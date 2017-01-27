const Sequelize = require('sequelize');
const keys = require('./../keys.js');

const connection = 'postgres://' + keys.USER_SQL + ':'+ keys.PASS_SQL + keys.SERVER_SQL;
const sequelize = new Sequelize(connection, {
  dialect: 'postgres',
  port: 5432
});

module.exports = sequelize;