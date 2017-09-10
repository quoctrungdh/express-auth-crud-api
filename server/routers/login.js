const express = require('express');
const jwt = require('jsonwebtoken');

const {
  SECRET_KEY, LOGIN_INFO, TOKEN_EXPIRE_TIME, RESPONSE_MESSAGE,
} = require('../constants.js');

const router = express.Router();

const { ERR_AUTH_000, ERR_AUTH_001, OK_AUTH_000 } = RESPONSE_MESSAGE;

function handleLogin(req, res) {
  const { username, password } = req.body;
  // TODO: use better method to check
  if (!username || !password) {
    res.json({
      success: false,
      message: ERR_AUTH_000,
    });
  } else if (username !== LOGIN_INFO.username) {
    res.json({
      success: false,
      message: ERR_AUTH_000,
    });
  } else if (password !== LOGIN_INFO.password) {
    res.json({
      success: false,
      message: ERR_AUTH_001,
    });
  } else {
    res.json({
      success: true,
      message: OK_AUTH_000,
      token: jwt.sign({ username, password }, SECRET_KEY, {
        expiresIn: TOKEN_EXPIRE_TIME,
      }),
    });
  }
}

router.post('/', handleLogin);

module.exports = router;
