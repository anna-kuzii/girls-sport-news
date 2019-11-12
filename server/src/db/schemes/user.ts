import { Schema, model, Model } from 'mongoose';import crypto from 'crypto';import jwt from 'jsonwebtoken';import appConfig from '../../configs/app.config';import { IUser } from './user.model';const userSchema = new Schema({  first_name: {    type: String,  },  last_name: {    type: String,  },  email: {    type: String,    required: true,    unique: true,  },  password: {    type: String,    required: true,  },  profilePicture: Buffer,  created: {    type: Date,    default: Date.now,  },  hash: String,  salt: String,});userSchema.methods.setPassword = function(password: string): void {  this.salt = crypto.randomBytes(16).toString('hex');  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');};userSchema.methods.validatePassword = function(password: string): boolean {  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');  return this.hash === hash;};userSchema.methods.generateAuthToken = function() {  const curDate = new Date();  const expirationDate = new Date(curDate);  expirationDate.setDate(curDate.getDate() + 60);  return jwt.sign({    email: this.email,    id: this._id,    exp: Math.floor(expirationDate.getTime() / 1000),  }, appConfig.JWT_KEY! );};const User: Model<IUser> = model<IUser, Model<IUser>>('User', userSchema);export default User;