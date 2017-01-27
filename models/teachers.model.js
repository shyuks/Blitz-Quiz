const Sequelize = require('sequelize');
const sequelize = require('./../db/connection');

const Teachers = sequelize.define('Teachers', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  password: Sequelize.STRING
});

module.exports = Teachers;