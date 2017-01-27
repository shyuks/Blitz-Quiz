const Sequelize = require('sequelize');
const sequelize = require('./../db/connection');

const Classes = sequelize.define('Classes', {
  className: Sequelize.STRING
});

module.exports = Classes;