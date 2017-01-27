const Sequelize = require('sequelize');
const sequelize = require('./../db/connection');

const Questions = sequelize.define('Questions', {
  type: Sequelize.STRING,
  body: Sequelize.STRING,
  answer: Sequelize.STRING,
  timeLimit: Sequelize.INTEGER
});

module.exports = Questions;