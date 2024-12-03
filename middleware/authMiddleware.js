const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

// Middleware to verify JWT from cookies
const authMiddleware = (req, res, next) => {
  // Get token from cookies
  const token = req.header('Authorization');
  //  console.log(jwt.verify(token,process.env.KEY))
  //  console.log(token)
  // Check if the token is missing
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.KEY);
    
    req.user = decoded.user;
    next();
  } catch (err) {
    // Token is invalid
    console.log(err)
    return res.status(400).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;
