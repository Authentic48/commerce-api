import { DataSource } from 'typeorm';
import 'dotenv/config';

const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT!,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: ['dist/libs/entities/*.js'],
  migrations: ['dist/database/migrations/*.js'],
});
export const connectDB = async () => {
  try {
    await dataSource.initialize();

    console.log('DB connected!!');
  } catch (e) {
    console.error('DB connection failed', e);
  }
};
