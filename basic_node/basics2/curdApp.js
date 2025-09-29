const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3007;

// Middleware to parse JSON
app.use(express.json());

// MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Admin@123',
  database: 'testdb'
});

connection.connect(err => {
  if (err) throw err;
  console.log('✅ Connected to MySQL');
});

// Create - Add new user
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  connection.query(
    'INSERT INTO users (name, email) VALUES (?, ?)',
    [name, email],
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ id: results.insertId, name, email });
    }
  );
});

// Read - Get all users
app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Update - Update user by ID
app.put('/users/:id', (req, res) => {
  const { name, email } = req.body;
  const { id } = req.params;
  connection.query(
    'UPDATE users SET name = ?, email = ? WHERE id = ?',
    [name, email, id],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'User updated' });
    }
  );
});

// Delete - Delete user by ID
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM users WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'User deleted' });
  });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
