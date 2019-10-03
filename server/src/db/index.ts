import * as mongoose from 'mongoose';

mongoose
  .connect(process.env.DATABASE_URL)
  .then(
    (): void => {
      // console.log('Successfully connected');
    },
    (err: string) => {
      throw err;
    },
  );
