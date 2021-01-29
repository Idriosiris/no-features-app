import {describe, expect, test} from '@jest/globals';
import {DatabaseHealthcheckRepository} from "../../repositories/database-healthcheck-repository";

describe("Database is running", () => {
    test("can perform SELECT query", async () => {
        let databaseHealthcheckRepository;

        databaseHealthcheckRepository = new DatabaseHealthcheckRepository();

        let healthcheck = await databaseHealthcheckRepository.databaseHealthCheck();

        expect(healthcheck).toEqual("Database up and running!");
    });
});