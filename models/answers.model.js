const Sequelize = require('sequelize');
const sequelize = require('./../db/connection');

const Answers = sequelize.define('Answers', {
  answerBody: Sequelize.STRING,
  isCorrect: Sequelize.STRING
});

module.exports = Answers;