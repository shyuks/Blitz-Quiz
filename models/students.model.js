const Sequelize = require('sequelize');

const sequelize = require('../db/config').sequilize;

const Students = sequelize.define('Students', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  password: Sequelize.STRING
});

module.exports = Students;