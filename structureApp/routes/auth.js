const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const authController = require("../controllers/authController");
const jwt = require("jsonwebtoken");
const db = require("../config/db");

// Register
router.post(
  "/register",
  [
    body("name").notEmpty(),
    body("email").isEmail(),
    body("password").isLength({ min: 6 }),
  ],
  authController.register
);

// Login
router.post(
  "/login",
  [body("email").isEmail(), body("password").notEmpty()],
  authController.login
);

router.post("/refresh", (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) return res.sendStatus(401);

  // Verify token
  jwt.verify(refreshToken, "REFRESH_SECRET", (err, decoded) => {
    if (err) return res.sendStatus(403);

    // Check if token matches the one in DB
    db.query(
      "SELECT * FROM users WHERE id = ?",
      [decoded.id],
      (err, results) => {
        if (
          err ||
          results.length === 0 ||
          results[0].refresh_token !== refreshToken
        ) {
          return res.sendStatus(403);
        }

        const accessToken = jwt.sign(
          { id: decoded.id, role: results[0].role },
          "ACCESS_SECRET",
          { expiresIn: "15m" }
        );

        res.json({ accessToken });
      }
    );
  });
});

module.exports = router;
