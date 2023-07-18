import { app } from './app';

const start = () => {
  const PORT = process.env.PORT || 5001;

  app.listen(PORT, () => {
    console.log(`App in ${process.env.ENV} is running on ${PORT}`);
  });
};

start();
