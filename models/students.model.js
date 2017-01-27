const Sequelize = require('sequelize');
const sequelize = require('./../db/connection');

const Student = sequelize.define('student', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  password: Sequelize.STRING
});

module.exports = Student;