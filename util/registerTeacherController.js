const Sequelize = require('sequelize');
const sequelize = require('./../db/config');
const bcrypt = require('bcrypt-nodejs')

const Teacher = require('./../models/teachers.model');

const addTeacher = (req, res) => {
  const data = req.body.params;
  if((data.passwordTeacher === data.confirmPasswordTeacher) && data.firstNameTeacher && data.lastNameTeacher){
    console.log(data.firstNameTeacher, data.lastNameTeacher, data.passwordTeacher)
    Teacher.create({
      firstName: data.firstNameTeacher,
      lastName: data.lastNameTeacher,
      password: bcrypt.hashSync(data.passwordTeacher),
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
