// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

// Middleware to authenticate users based on JWT token
const authenticateUser = (req, res, next) => {
  const token = req.cookies.auth_token;

  if (!token) {
    return res.redirect('/auth/login');  // Redirect to login if no token
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.redirect('/auth/login');  // Redirect to login if token is invalid
    }
    req.user = decoded;  // Store the user info in the request object
    next(); // Proceed to the next middleware or route handler
  });
};

module.exports = authenticateUser;
