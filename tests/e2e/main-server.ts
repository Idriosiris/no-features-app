import {describe, test, expect} from '@jest/globals';
import request from 'supertest';
import {App} from "../../app1";

describe("Server is running", () => {
    test("/healthcheck endpoint returning 200 and ok", async () => {
        let app = new App().theApp()

        const healthcheckCall = await request(app).get("/healthcheck");

        expect(healthcheckCall.status).toEqual(200);
        expect(healthcheckCall.text).toEqual("ok");
    });

    test("root endpoint returning welcome message", async () => {
        let app = new App().theApp()

        const healthcheckCall = await request(app).get("/");

        expect(healthcheckCall.status).toEqual(200);
        expect(healthcheckCall.text).toEqual("Welcome to the backend of the useless app");
    });
});