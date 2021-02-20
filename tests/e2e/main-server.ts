import {describe, expect, test} from '@jest/globals';
import request from 'supertest';
import {Express} from "express";
import {AppFactory} from "../../src/factories/app-factory";

let app: Express = new AppFactory().getApp();

describe("Server is running", () => {
    test("/healthcheck endpoint returning 200 and ok", async () => {
        const healthcheckCall = await request(app).get("/healthcheck");

        expect(healthcheckCall.status).toEqual(200);
        expect(healthcheckCall.text).toEqual("ok");
    });

    test("root endpoint returning welcome message", async () => {
        const healthcheckCall = await request(app).get("/");

        expect(healthcheckCall.status).toEqual(200);
        expect(healthcheckCall.text).toEqual("Welcome to the backend of the useless app");
    });
});
