const Sequelize = require('sequelize');

const sequelize = require('../db/config').sequelize;

const Test = require('/tests.model');

const Question = sequelize.define('questions', {
  type: Sequelize.STRING,
  body: Sequelize.STRING,
  answer: Sequelize.STRING,
  startTime: Sequelize.DATE
});

Test.hasMany(Question);

module.exports = Question;