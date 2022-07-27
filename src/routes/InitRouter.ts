/* eslint-disable import/prefer-default-export */
import express, { Application, Router } from 'express';
import {home} from '@src/controllers'
const route: Router = express.Router();

export function InitRouter(app: Application) {
  route.get('/',home);
  app.use('/', route);
}
