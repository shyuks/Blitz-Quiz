const Sequelize = require('sequelize');

const sequelize = require('../db/config').sequelize;

const Teachers = require('/teachers.model');

const Students = require('/students.model');

const Class = sequelize.define('classes', {
  className: Sequelize.STRING
});

Teachers.hasMany(Class);
Class.belongsToMany(Students, {through: StudentsClasses});

module.exports = Class;