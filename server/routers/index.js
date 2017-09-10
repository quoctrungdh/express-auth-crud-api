const express = require('express');

const router = express.Router();

function handleGetIndex(req, res) {
  res.send('Welcome to the API');
}

router.get('/', handleGetIndex);

module.exports = router;
