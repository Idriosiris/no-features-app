import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes';
import {App} from "./app1";

let app = new App().constructApp();

initMiddlewares();
initRoutes();

function initMiddlewares() {
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));
    app.use(cookieParser());
}

function initRoutes() {
    app.use('/', indexRouter);
}

export default app;