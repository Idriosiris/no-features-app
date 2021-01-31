import {describe, expect, test} from '@jest/globals';
import {DatabaseHealthcheckRepository} from "../../repositories/database-healthcheck-repository";
import {databaseConnection} from "../../config/database-connection";

describe("Database is running", () => {
    test("can perform SELECT query", async () => {
        let databaseHealthcheckRepository;

        databaseHealthcheckRepository = new DatabaseHealthcheckRepository(databaseConnection);

        let healthcheck = await databaseHealthcheckRepository.databaseHealthCheck();

        expect(healthcheck).toEqual("Database up and running!");
    });
});