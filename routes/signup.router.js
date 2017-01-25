const signupRouter = require('express').Router()
const signupController = require('../controllers/signup.controller');

signupRouter.route('/signup').post(signupController.ADD_USER)

module.exports = signupRouter;