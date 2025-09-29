const db = require("../config/db");

// Create User
exports.createUser = (req, res) => {
  const { email, password, full_name } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  db.query(
    "INSERT INTO users (email, password, full_name) VALUES (?, ?, ?)",
    [email, hashedPassword, full_name],
    (err, result) => {
      if (err) return res.status(500).json({ message: "Error creating user" });
      res.json({ message: "User created successfully" });
    }
  );
};

// Update User
exports.updateUser = (req, res) => {
  const { full_name } = req.body;
  const { id } = req.params;

  db.query(
    "UPDATE users SET full_name = ? WHERE id = ?",
    [full_name, id],
    (err) => {
      if (err) return res.status(500).json({ message: "Error updating user" });
      res.json({ message: "User updated successfully" });
    }
  );
};

// Delete User
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM users WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json({ message: "Error deleting user" });
    res.json({ message: "User deleted successfully" });
  });
};
