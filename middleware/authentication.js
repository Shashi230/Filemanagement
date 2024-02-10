const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  //console.log('h');
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Verify JWT token
  jwt.verify(token, 'mykey', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    // If token is valid, attach the decoded user information to the request object
    req.user = decoded;
    next();
  });
};

module.exports = authenticate;
