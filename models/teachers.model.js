const Sequelize = require('sequelize');

const sequelize = require('../db/config').sequilize;

const Teachers = sequelize.define('Teachers', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  password: Sequelize.STRING
});

module.exports = Teachers;