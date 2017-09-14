const express = require('express');

const router = express.Router();

function handleGetList(req, res) {
  const mock = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ];
  res.json(mock);
}

router.get('/', handleGetList);

module.exports = router;
