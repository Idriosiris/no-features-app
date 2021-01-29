import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'NoFeaturesAppDB',
    password: 'pa55word',
    port: 5433,
})

export class DatabaseHealthcheckRepository {

    async databaseHealthCheck(): Promise<string> {
        let databaseUpAndRunning: string;

        const result = await pool.query('SELECT 1');

        if (result.rowCount == 1) {
            databaseUpAndRunning = "Database up and running!";
        } else {
            databaseUpAndRunning = "";
        }

        return databaseUpAndRunning;
    }

}