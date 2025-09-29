const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log("Customer Route Time: ", Date.now());
  next();
});

router.get("/", (req, res) => {
  res.send("Customer Home Page");
});

router.get("/profile", (req, res) => {
  res.send("Customer Profile Page");
});

module.exports = router;
