import {App} from "./src/app";
import logger from "morgan";
import express from "express";
import cookieParser from "cookie-parser";
import localPort from "./src/utility/local-port";
import {ErrorEventHandler} from "./src/config/error-event-handler";
import IndexController from "./src/routes";

let app = new App([
    logger('dev'),
    express.json(),
    express.urlencoded({extended: false}),
    cookieParser()
], [
    new IndexController()
], [
    new ErrorEventHandler()
]);

app.startListening(localPort);
