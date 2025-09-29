const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const authenticateUser = require('./middleware/authMiddleware'); // Correct import

dotenv.config();

const app = express();

// Set up EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware for parsing cookies
app.use(cookieParser());

// Serve static files (e.g., CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Debug: Check if routes are functions before using them
if (typeof authRoutes === 'function') {
  console.log('authRoutes is a valid function');
} else {
  console.log('authRoutes is NOT a valid function');
}

if (typeof userRoutes === 'function') {
  console.log('userRoutes is a valid function');
} else {
  console.log('userRoutes is NOT a valid function');
}

// Use the auth and user routes only if they are valid functions
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

// Protect the dashboard route with authentication middleware
app.get('/dashboard', authenticateUser, (req, res) => {
  res.render('user/dashboard', { user: req.user });
});

// Start the server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
