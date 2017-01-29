const express = require('express');
const router = express.Router();
const studentLoginController = require('../../util/studentLoginController')

router.post('/student', studentLoginController);

module.exports = router;