import { Document } from 'mongoose';

export interface IUserDocument extends Document {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  profilePicture: Buffer;
  created: string;
}

export interface IUser extends IUserDocument {
  setPassword(password: string): void;
  validatePassword(password: string): boolean;
  generateAuthToken(): any;
}
