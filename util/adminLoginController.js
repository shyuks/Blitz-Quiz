const Sequelize = require('sequelize');
const sequelize = require('./../db/config');

const adminCred = {
    email: 'greg@gmail.com',
    password: 'popcorn'
}

const adminAuth = (req, res) => {
    if ((req.body.params.email === adminCred.email) && (req.body.params.password === adminCred.password)) {
        console.log('admin login sucessful')
        res.status(200).json(adminCred.email);
    } else {
        console.log('wrong admin creds')
        res.status(500).send('Invalid credentials');
    }
}

module.exports = adminAuth;
