require('dotenv').config();
// "development": {
//   "username": process.env.DB_USERNAME,
//       "password": process.env.DB_PASSWORD,
//       "database": process.env.DB_NAME,
//       "host": process.env.DB_HOST_NAME,
//       "dialect": "mysql",
//       "operatorsAliases": 0
// },
module.exports = {
  "development": {
    "username": 'root',
    "password": 'imaginie',
    "database": 'equaledatabase',
    "host": '127.0.0.1',
    "dialect": "mysql",
    "operatorsAliases": 0
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": 0
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST_NAME,
    "dialect": "mysql",
    "operatorsAliases": 0
  }
};
