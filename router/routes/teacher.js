const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
  console.log('Teacher route working!');
  res.status(200).send('Teacher route is working!');
});

module.exports = router;