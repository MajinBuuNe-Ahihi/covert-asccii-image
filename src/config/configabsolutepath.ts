/* eslint-disable import/prefer-default-export */
import express, { Application } from 'express';

export const configPath = (app: Application) => {
  app.use(express.static('./public'));
  app.set('view engines', 'ejs');
  app.set('views', './src/views');
};
