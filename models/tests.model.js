const Sequelize = require('sequelize');
const sequelize = require('./../db/connection');

const Tests = sequelize.define('Tests', {
  testName: Sequelize.STRING,
  type: Sequelize.STRING,
  minutesAllowed: Sequelize.INTEGER
});

module.exports = Tests;