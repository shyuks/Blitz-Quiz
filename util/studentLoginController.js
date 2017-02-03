const Sequelize = require('sequelize');
const sequelize = require('./../db/config');
const bcrypt = require('bcrypt-nodejs')
const Student = require('./../models/students.model');

const studentAuth = (req, res) => {
    Student.findById(req.body.params.Id)
    .then((student) => {
        if(bcrypt.compareSync(req.body.params.password, student.password)) {
          console.log("login successful")
          req.session.regenerate(() => {
            req.session.Id = req.body.params.Id;
            let session = req.session.Id
            console.log("sending ", req.session)
            // req.session.save()
            console.log("session saved?")
            res.send(session)
          });
        } else {
            console.log("login is incorrect")
        }
    })
    .catch((err) => {
        console.log("error: ", err)
    })
}



module.exports = studentAuth;
