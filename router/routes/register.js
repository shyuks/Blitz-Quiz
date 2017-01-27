const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
  console.log('Register route working!');
  res.status(200).send('Register route is working!');
});

module.exports = router;