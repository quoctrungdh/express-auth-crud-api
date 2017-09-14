function checkAuthentication(req, res, next) {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (!token) {
    res.status(403).send({
      success: false,
      message: 'No token provided',
    });
  } else {
    // TODO: check user identity
    next();
  }
}

module.exports = {
  checkAuthentication,
};
