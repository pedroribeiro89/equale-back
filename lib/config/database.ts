import { Sequelize } from "sequelize";

export const database = new Sequelize(
    'equaledatabase',
    'root',
    'imaginie',
    { dialect: 'mysql'}
);

