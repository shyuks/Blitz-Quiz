const express = require('express');
const router = express.Router();
const studentController = require('../../util/studentController')

router.get('/students', studentController);

module.exports = router;