const questionRouter = require('express').Router()
const questionController = require('../controllers/question.controller');

questionRouter.route('/topic').get(questionController.GET_QUESTIONS)
questionRouter.route('/topic').post(questionController.NEW_QUESTION)

module.exports = questionRouter