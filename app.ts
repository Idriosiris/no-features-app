import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes';

let app = constructApp();

initMiddlewares();
initRoutes();

function constructApp() {
    return express();
}

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