const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.header('Authorization');
  // console.log("Auth Header:", authHeader); // 👈 log what’s coming

  const token = authHeader?.split(' ')[1];

  if (!token) return res.status(401).json({ msg: 'No token, access denied ok ' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("Decoded:", decoded); // 👈 check this
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};


module.exports = authMiddleware;
