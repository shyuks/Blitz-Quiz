const Sequelize = require('sequelize');
const sequelize = require('./../db/config');

const Teacher = require('./../models/teachers.model');

const addTeacher = (req, res) => {
  const data = req.body.params;
  if((data.password === data.confirmPassword) && data.firstName && data.lastName){
    console.log(data.firstName, data.lastName, data.password)
    Teacher.create({
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
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
    console.log("Please make sure you have input your information correctly")
  }
}

module.exports = addTeacher;