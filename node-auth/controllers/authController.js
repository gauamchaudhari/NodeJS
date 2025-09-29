const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../config/db");
const nodemailer = require("nodemailer");
const passport = require("passport");

// Register
exports.register = async (req, res) => {
  const { email, password, full_name } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  db.query(
    "INSERT INTO users (email, password, full_name) VALUES (?, ?, ?)",
    [email, hashedPassword, full_name],
    (err, result) => {
      if (err)
        return res.status(500).json({ message: "Error registering user" });
      res.redirect("/login");
    }
  );
};

// Login
exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, results) => {
      if (err || results.length === 0) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const user = results[0];
      const match = await bcrypt.compare(password, user.password);

      if (!match)
        return res.status(400).json({ message: "Invalid credentials" });

      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      res.cookie("auth_token", token);
      res.redirect("/dashboard");
    }
  );
};

// Forgot Password
exports.forgotPassword = (req, res) => {
  const { email } = req.body;
  db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
    if (err || results.length === 0)
      return res.status(400).json({ message: "Email not found" });

    const token = Math.random().toString(36).substring(2, 15);
    db.query("INSERT INTO password_reset (email, token) VALUES (?, ?)", [
      email,
      token,
    ]);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      to: email,
      subject: "Password Reset",
      text: `Use this link to reset your password: http://localhost:5000/reset-password/${token}`,
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error)
        return res.status(500).json({ message: "Error sending email" });
      res.json({ message: "Password reset link sent" });
    });
  });
};

// Reset Password
exports.resetPassword = (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  db.query(
    "SELECT * FROM password_reset WHERE token = ?",
    [token],
    async (err, results) => {
      if (err || results.length === 0)
        return res.status(400).json({ message: "Invalid token" });

      const email = results[0].email;
      const hashedPassword = await bcrypt.hash(password, 10);

      db.query(
        "UPDATE users SET password = ? WHERE email = ?",
        [hashedPassword, email],
        (err) => {
          if (err)
            return res
              .status(500)
              .json({ message: "Error resetting password" });
          res.redirect("/login");
        }
      );
    }
  );
};
