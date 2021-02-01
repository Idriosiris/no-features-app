import {describe, test, expect} from '@jest/globals';
import request from 'supertest';
import {App} from "../../src/app";
import logger from "morgan";
import express from "express";
import cookieParser from "cookie-parser";
import indexRouter from "../../src/routes";

describe("Server is running", () => {
    test("/healthcheck endpoint returning 200 and ok", async () => {
        let app = new App([
            logger('dev'),
            express.json(),
            express.urlencoded({extended: false}),
            cookieParser()
        ], [
            indexRouter
        ]).theApp()

        const healthcheckCall = await request(app).get("/healthcheck");

        expect(healthcheckCall.status).toEqual(200);
        expect(healthcheckCall.text).toEqual("ok");
    });

    test("root endpoint returning welcome message", async () => {
        let app = new App([
            logger('dev'),
            express.json(),
            express.urlencoded({extended: false}),
            cookieParser()
        ], [
            indexRouter
        ]).theApp()

        const healthcheckCall = await request(app).get("/");

        expect(healthcheckCall.status).toEqual(200);
        expect(healthcheckCall.text).toEqual("Welcome to the backend of the useless app");
    });
});