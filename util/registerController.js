const Sequelize = require('sequelize');
const sequelize = require('./../db/config');

const Teacher = require('./../models/teachers.model');

const addTeacher = (req, res) => {
  if((req.body.params.password === req.body.params.confirmPassword) && req.body.params.firstName && req.body.params.lastName){
    console.log(req.body.params.firstName, req.body.params.lastName, req.body.params.password)
    Teacher.create({
      firstName: req.body.params.firstName,
      lastName: req.body.params.lastName,
      password: req.body.params.password,
      photo: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg'
    })
    .then((user) => {
      console.log('TEACHER CREATED!!!!');
      res.send(user)
    })
    .catch((error) => {
      console.log("this error: ", error)
    })
  } else {
    console.log("Please make sure you have inputted your information correctly")
  }
}

module.exports = addTeacher;