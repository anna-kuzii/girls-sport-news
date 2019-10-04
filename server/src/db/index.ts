import mongoose from 'mongoose';
import appConfig from '../configs/app.config';

mongoose
  .connect(String(appConfig.DATABASE_URL))
  .then(
    (): void => {
      // console.log('Successfully connected');
    },
    (err: string) => {
      throw err;
    },
  );
