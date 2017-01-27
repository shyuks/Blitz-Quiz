const express = require('express');
const router = express.Router();

router.get('/student', (req, res) => {
  console.log('student route working!');
  res.status(200).send('Student route is working!');
});

module.exports = router;