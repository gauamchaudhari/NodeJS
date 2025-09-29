const db = require('../config/db');

const createPasswordResetTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS password_reset (
      id INT AUTO_INCREMENT PRIMARY KEY,
      email VARCHAR(255) NOT NULL,
      token VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  db.query(query, (err, result) => {
    if (err) throw err;
    console.log('Password reset table created or already exists.');
  });
};

createPasswordResetTable();
