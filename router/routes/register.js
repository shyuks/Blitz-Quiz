const express = require('express');
const router = express.Router();
const registerController = require('../../util/registerController')

router.post('/', registerController);

module.exports = router;