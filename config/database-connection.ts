import {Pool} from "pg";

export const databaseConnection = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'NoFeaturesAppDB',
    password: 'pa55word',
    port: 5433
})