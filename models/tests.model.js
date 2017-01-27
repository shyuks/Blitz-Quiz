const Sequelize = require('sequelize');
const sequelize = require('../db/config');

const Test = sequelize.define('tests', {
  testName: Sequelize.STRING,
  type: Sequelize.STRING,
  timeAllowed: Sequelize.INTEGER
});

module.exports = Test;