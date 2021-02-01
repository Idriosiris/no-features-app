import {Pool} from "pg";

export default class DatabaseConnection {
    private static pool: Pool;

    static connection(): Pool{
        if(!this.pool) {
            this.pool = new Pool({
                user: 'postgres',
                host: 'localhost',
                database: 'NoFeaturesAppDB',
                password: 'pa55word',
                port: 5433
            })
        }

        return this.pool;
    }

    static async end() {
        await this.pool.end();
    }
}