const express = require('express');
const router = express.Router();

const Test = require('./../../models/tests.model');
const Class = require('./../../models/classes.model');
const Question = require('./../../models/questions.model');
const testController = require('../../util/teacherLoginController');


router.post('/new', (req, res) => {
  console.log('POST request at /test/new');

  Class.find({
    where: { id: req.body.classId }, 
    include: [ { model : Test }] 
  }).then(obj => {
    Test.create({testName: req.body.testName}).then(test => {
      obj.addTest(test).then(a => {
        
        res.status(200).send('hello');
      })
    })
  });
});

router.post('/question', (req, res) => {
  console.log('POST request at /test/question')
  let a = req.body;
  Test.find({
    where: { id: a.testId }, 
    include: [ { model : Question }] 
  }).then(obj => {
    console.log(obj);
    Question.create({
      type: a.type,
      body: a.body,
      answer: a.answer,
      isComplete: false,
      status: 'incomplete'
    }).then(quest => {
      obj.addQuestion(quest).then(s => {
        
        res.status(200).send('hello');
      });
    });
  });
});

module.exports = router;