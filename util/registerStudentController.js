const Sequelize = require('sequelize');
const sequelize = require('./../db/config');
const bcrypt = require('bcrypt-nodejs')

const Student = require('./../models/students.model')

const addStudent = (req, res) => {
    const data = req.body.params
    if((data.passwordStudent === data.confirmPasswordStudent) && data.firstNameStudent && data.lastNameStudent) {
        console.log(data.firstNameStudent, data.lastNameStudent, data.passwordStudent)
        Student.create({
          firstName: data.firstNameStudent,
          lastName: data.lastNameStudent,
          password: bcrypt.hashSync(data.passwordStudent),
          photo: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg'
        })
        .then((user) => {
            res.send(user)
        })
        .catch((error) => {
            console.log('error: ', error)
        })
    } else {
        console.log('wrong req body params.')
    }
}

module.exports = addStudent
