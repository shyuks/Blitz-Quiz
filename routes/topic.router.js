const topicRouter = require('express').Router()
const topicController = require('../controllers/topic.controller');

topicRouter.route('/topic').get(topicController.GET_TOPICS)
topicRouter.route('/topic').post(topicController.NEW_TOPIC)

module.exports = topicRouter