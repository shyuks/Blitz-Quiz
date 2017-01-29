const express = require('express');
const router = express.Router();
const teacherLoginController = require('../../util/teacherLoginController')

router.post('/teacher', teacherLoginController);

module.exports = router;