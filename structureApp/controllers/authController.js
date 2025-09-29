const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');




exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);

  db.query(
    'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
    [name, email, hashed],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ message: 'User registered successfully' });
    }
  );
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) return res.status(500).json({ error: err });

    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = results[0];

    if (!password || !user.password) {
      return res.status(400).json({ message: 'Missing password or user data' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // 🔐 Create tokens
    const accessToken = jwt.sign(
      { id: user.id, role: user.role },
      'ACCESS_SECRET',
      { expiresIn: '15m' }
    );

    const refreshToken = jwt.sign(
      { id: user.id },
      'REFRESH_SECRET',
      { expiresIn: '7d' }
    );

    // 💾 Save refresh token to DB
    db.query('UPDATE users SET refresh_token = ? WHERE id = ?', [refreshToken, user.id], (err) => {
      if (err) return res.status(500).json({ error: 'Failed to save refresh token' });

      // 🍪 Send refresh token in HttpOnly cookie
      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        path: '/refresh',
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      // ✅ Send access token in response
      res.json({ accessToken });
    });
  });
};


  
