const describe = require("@jest/globals").describe;
const test     = require("@jest/globals").test;
const expect   = require("@jest/globals").expect;
const request  = require("supertest");
const app      = require("../../app");

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