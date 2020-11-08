import { Sequelize } from "sequelize";

require('dotenv').config();

export const database = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    { dialect: 'mysql'}
);
