import {Pool} from "pg";

export class DatabaseHealthcheckRepository {
    private databaseConnection: Pool;

    constructor(databaseConnection: Pool) {
        this.databaseConnection = databaseConnection;
    }

    async databaseHealthCheck(): Promise<string> {
        let databaseUpAndRunning: string;

        const result = await this.databaseConnection.query('SELECT 1');

        if (result.rowCount == 1) {
            databaseUpAndRunning = "Database up and running!";
        } else {
            databaseUpAndRunning = "";
        }

        return databaseUpAndRunning;
    }

}