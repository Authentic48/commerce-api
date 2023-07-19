import { app } from './app';
import { connectDB } from './config/db.config';

const start = async () => {
  await connectDB();

  const PORT = process.env.PORT || 5001;

  app.listen(PORT, () => {
    console.log(`App in ${process.env.ENV} is running on ${PORT}`);
  });
};

start();
