const describe = require("@jest/globals").describe;
const test     = require("@jest/globals").test;
const expect   = require("@jest/globals").expect;
const request  = require("supertest");
const app      = require("../../app");

describe("Server /healthcheck works", () => {
    test("Status code is 200", async () => {
        const healthcheckCall = await request(app).get("/healthcheck");

        expect(healthcheckCall.statusCode).toEqual(200);
    });
});