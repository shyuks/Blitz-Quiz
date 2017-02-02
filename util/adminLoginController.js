const Sequelize = require('sequelize');
const sequelize = require('./../db/config');

const adminCred = {
    email: 'greg@gmail.com',
    password: 'popcorn'
}

const adminAuth = (req, res) => {
    if ((req.body.params.email === adminCred.email) && (req.body.params.password === adminCred.password)) {
        console.log('admin login sucessful')
        res.send(adminCred)
    } else {
        console.log('wrong admin creds')
    }
}

module.exports = adminAuth;
