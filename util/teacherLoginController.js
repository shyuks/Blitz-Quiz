const Sequelize = require('sequelize');
const sequelize = require('./../db/config');
const bcrypt = require('bcrypt-nodejs')
const Teacher = require('./../models/teachers.model');

const teacherAuth = (req, res) => {
    Teacher.findById(req.body.params.Id)
    .then((teacher) => {
        if(bcrypt.compareSync(req.body.params.password, teacher.password)) {
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
            console.log("invalid credentials")
        }
    })
    .catch((err) => {
        console.log("error: ", err)
    })
}



module.exports = teacherAuth;
