import mongoose from 'mongoose';
import userSchema from '../db/schemes/user';

const Users = mongoose.model('Users', userSchema);

const signUp = async({ request, response }: any) => {
  const { body: { user } } = request;

  if(!user.email || !user.password) {
    response.status = 422;
    response.message = 'Please, fill in required fields.';
    return response;
  }

  const finalUser = new Users(user);

  // @ts-ignore
  finalUser.setPassword(user.password);

  await finalUser.save();

  const token = (finalUser as any).generateAuthToken();

  response.status = 200;
  response.message = 'The user is successfully registered.';
  response.set('access-token', token);

  return response;
};

export default signUp;
