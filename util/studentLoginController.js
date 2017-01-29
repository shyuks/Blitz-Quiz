const Sequelize = require('sequelize');
const sequelize = require('./../db/config');

const Student = require('./../models/students.model');

const studentAuth = (req, res) => {
    Student.findById(req.body.params.ID)
    .then((student) => {
        if(student.password === req.body.params.password) {
          console.log("login successful")
          req.session.regenerate(() => {
            req.session.Id = req.body.params.Id;
          }); 
          res.send(student)
        } else {
            res.send("login is incorrect")
        }
    })
    .catch((err) => {
        console.log("error: ", err)
    })
}



module.exports = studentAuth;