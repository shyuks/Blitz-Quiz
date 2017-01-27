const Sequelize = require('sequelize');
const sequelize = require('./../db/config');

const Teachers = require('./../models/teachers.model');

const addTeacher = () => {
  Teachers.create({
    firstName: 'Mary',
    lastName: 'Jane',
    password: '12234'
  }).then((user) => {
    console.log('TEACHER CREATED!!!!');
    console.log('Name: ' + user.firstName + ' ' + user.lastName);
    console.log('Pass: ' + user.password);
  })
};

module.exports = addTeacher;