const Sequelize = require('sequelize');
const sequelize = require('./../db/connection');

const Question = sequelize.define('question', {
  type: Sequelize.STRING,
  body: Sequelize.STRING,
  answer: Sequelize.STRING,
  timeLimit: Sequelize.INTEGER
});

module.exports = Question;