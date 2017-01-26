const Sequelize = require('sequelize');

const sequelize = require('../db/config').sequelize;

const Class = require('/classes.model');

const Test = sequelize.define('tests', {
  testName: Sequelize.STRING,
  type: Sequelize.STRING,
  timeAllowed: Sequelize.INTEGER
});

Class.hasMany(Test);

module.exports = Test;