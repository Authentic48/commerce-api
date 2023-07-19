import 'reflect-metadata';
import { Container } from 'inversify';
import { AuthController } from '../controllers/auth.controller';
import { TYPES } from '../libs/types/types';

const container = new Container();

//Controllers
container.bind<AuthController>(TYPES.AuthController).to(AuthController).inSingletonScope();

export default container;
