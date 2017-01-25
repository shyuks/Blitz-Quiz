const Sequelize = require('sequelize');

const sequelize = require('../db/config').sequelize;

const Students = require('/students.model');

const Question = require('/questions.model');

const Answer = sequelize.define('answers', {
  answerBody: Sequelize.STRING,
  isCorrect: Sequelize.STRING,
  answerTime: Sequelize.DATE
});

Students.hasOne(Answer);
Question.hasMany(Answer);

module.exports = Answer;