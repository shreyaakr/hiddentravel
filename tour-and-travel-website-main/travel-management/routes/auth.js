/* eslint-disable no-undef */
// middleware/auth.js
const jwt = require('jsonwebtoken');
const config = require('config'); // Use config module for environment variables

// Your existing middleware code (if any)
const yourExistingMiddleware = (req, res, next) => {
  // Your existing middleware logic
  // Example: Logging, validation, etc.
  next();
};

// JWT authentication middleware
const auth = (req, res, next) => {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = {
  auth,
  yourExistingMiddleware
};
