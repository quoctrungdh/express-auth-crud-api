// TODO: change secret and move to a better place
const SECRET_KEY = 'quoctrungdh';

// TODO: remove mock and use real database
const LOGIN_INFO = {
  username: 'admin',
  password: 'admin',
};

// TODO: test expire time maybe
const TOKEN_EXPIRE_TIME = 60 * 60 * 24; // 24 hours

const RESPONSE_MESSAGE = {
  ERR_AUTH_000: 'Authentication failed. Username or password not provided',
  ERR_AUTH_001: 'Authentication failed. Username or password not corect',
  OK_AUTH_000: 'Authentication success',
};

module.exports = {
  SECRET_KEY,
  LOGIN_INFO,
  TOKEN_EXPIRE_TIME,
  RESPONSE_MESSAGE,
};
