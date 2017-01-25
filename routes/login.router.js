const loginRouter = require('express').Router()
const loginController = require('../controllers/login.controller');

loginRouter.route('/login').get(loginController.CHECK_USER)

module.exports = loginRouter;