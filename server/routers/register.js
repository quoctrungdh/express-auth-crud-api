const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

const auth = require('./admin').auth();

const { RESPONSE_MESSAGE, SECRET_KEY, TOKEN_EXPIRE_TIME } = require('../constants.js');

const { ERR_AUTH_000 } = RESPONSE_MESSAGE;

function handleRegister(req, res) {
  const { username, password } = req.body;

  // if there's no username or password provided, return an error
  if (!username || !password) {
    res.json({
      success: false,
      message: ERR_AUTH_000,
    });
  }

  // create new user
  auth.createUser({
    email: username,
    password,
  })
    .then((success) => {
      const { email } = success;

      const token = jwt.sign({ email }, SECRET_KEY, {
        expiresIn: TOKEN_EXPIRE_TIME,
      });

      // if register successfully, send success message
      res.json({
        success: true,
        message: RESPONSE_MESSAGE.OK_REGISTER_000,
        token, // TODO: send token or not
      });
    })
    .catch((error) => {
      const { errorInfo } = error;

      // if something failed, send error message back to the user
      res.json({
        success: false,
        message: errorInfo.message,
      });
    });
}

router.post('/', handleRegister);

module.exports = router;
