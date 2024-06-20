const jwt = require('jsonwebtoken');
const JWT_SECRET = 'luffy';

const authenticateJWT = (req, res, next) => {
  const token = req.session.token;
  if (token) {
    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

module.exports = authenticateJWT;