const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dogs', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres'/* one of 'mysql' |  | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

module.exports = sequelize;