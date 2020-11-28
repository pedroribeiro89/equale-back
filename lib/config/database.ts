import { Sequelize } from "sequelize";

require('dotenv').config();

export const database = process.env.CLEARDB_DATABASE_URL ?
    new Sequelize(process.env.CLEARDB_DATABASE_URL) :
    new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USERNAME,
        process.env.DB_PASSWORD,
        { dialect: 'mysql'}
    );
