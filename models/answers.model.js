const Sequelize = require('sequelize');
const sequelize = require('../db/config');

const Answer = sequelize.define('answers', {
  answerBody: Sequelize.STRING,
  isCorrect: Sequelize.STRING
});

module.exports = Answer;