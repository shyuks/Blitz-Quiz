const Sequelize = require('sequelize');
const sequelize = require('../db/config');

const Class = sequelize.define('classes', {
  className: Sequelize.STRING
});

module.exports = Class;