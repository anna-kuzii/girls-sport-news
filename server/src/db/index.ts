import mongoose from 'mongoose';
import appConfig from '../configs/app.config';

export const connect = async() => {
  try {
    // @ts-ignore
    await mongoose.connect(appConfig.DATABASE_URL, { useNewUrlParser: true });
    console.log('Successfully connected');
  } catch (err) {
    throw err;
  }
};
