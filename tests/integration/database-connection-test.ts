import {describe, expect, test} from '@jest/globals';
import {DatabaseHealthcheckRepository} from "../../repositories/database-healthcheck-repository";
import DatabaseConnection from "../../config/database-connection";

describe("Database is running", () => {
    test("can perform SELECT query", async () => {
        let databaseHealthcheckRepository;

        databaseHealthcheckRepository = new DatabaseHealthcheckRepository(DatabaseConnection.connection());

        let healthcheck = await databaseHealthcheckRepository.databaseHealthCheck();

        expect(healthcheck).toEqual("Database up and running!");
    });
});

afterAll(() => {
    DatabaseConnection.connection().end().then(() => console.log("Connection is done"));
})