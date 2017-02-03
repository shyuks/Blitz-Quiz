const express = require('express');
const router = express.Router();
const registerTeacherController = require('../../util/registerTeacherController')

router.post('/', registerTeacherController);

module.exports = router;
