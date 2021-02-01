import {describe, expect, test} from '@jest/globals';
import {DatabaseHealthcheckRepository} from "../../src/repositories/database-healthcheck-repository";
import DatabaseConnection from "../../src/config/database-connection";

describe("Database is running", () => {
    test("can perform SELECT query", async () => {
        let databaseHealthcheckRepository;

        databaseHealthcheckRepository = new DatabaseHealthcheckRepository(DatabaseConnection.connection());

        let healthcheck = await databaseHealthcheckRepository.databaseHealthCheck();

        expect(healthcheck).toEqual("Database up and running!");
    });
});

afterAll(async () => {
   await DatabaseConnection.end();
});