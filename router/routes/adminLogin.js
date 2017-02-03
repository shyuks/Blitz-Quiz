const express = require('express');
const router = express.Router();
const adminLoginController = require('../../util/adminLoginController')

router.post('/admin', adminLoginController);

module.exports = router;
