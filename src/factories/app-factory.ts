import {App} from "../app";
import logger from "morgan";
import express from "express";
import cookieParser from "cookie-parser";
import indexRouter from "../routes";
import {ErrorEventHandler} from "../config/error-event-handler";

export class AppFactory {
    public getApp() {
        return new App([
            logger('dev'),
            express.json(),
            express.urlencoded({extended: false}),
            cookieParser()
        ], [
            indexRouter
        ], [
            new ErrorEventHandler()
        ]).theApp();
    }
}
