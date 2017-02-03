const express = require('express');
const router = express.Router();
const registerStudentController = require('../../util/registerStudentController')

router.post('/', registerStudentController);

module.exports = router;
