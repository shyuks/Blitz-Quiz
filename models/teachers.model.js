const Sequelize = require('sequelize');
const sequelize = require('./../db/connection');

const Teacher = sequelize.define('teacher', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  password: Sequelize.STRING
});

module.exports = Teacher;