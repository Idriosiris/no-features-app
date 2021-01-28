import {describe, test, expect} from '@jest/globals';
import request from 'supertest';
import app from '../../app';

describe("Server is running", () => {
    test("/healthcheck endpoint returning 200 and ok", async () => {
        const healthcheckCall = await request(app).get("/healthcheck");

        expect(healthcheckCall.statusCode).toEqual(200);
        expect(healthcheckCall.text).toEqual("ok");
    });

    test("root endpoint returning welcome message", async () => {
        const healthcheckCall = await request(app).get("/");

        expect(healthcheckCall.statusCode).toEqual(200);
        expect(healthcheckCall.text).toEqual("Welcome to the backend of the useless app");
    });
});