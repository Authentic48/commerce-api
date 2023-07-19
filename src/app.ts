import express from 'express';
import 'dotenv/config';
import container from './config/container.config';
import { InversifyExpressServer } from 'inversify-express-utils';

const server = new InversifyExpressServer(container);

const app = server.build();
app.use(express.json());

export { app };
