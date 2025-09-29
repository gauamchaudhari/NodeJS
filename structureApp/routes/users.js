const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const upload = require("../middleware/uploadMiddleware");

const { body, param } = require("express-validator");
router.use(authMiddleware);

// Create user
router.post(
  "/",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
  ],
  userController.createUser
);

// Update user
router.put(
  "/:id",
  [
    param("id").isInt().withMessage("ID must be an integer"),
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
  ],
  userController.updateUser
);

// Get all users
router.get("/", userController.getUsers);
// Get one user
router.get(
  "/:id",
  param("id").isInt().withMessage("ID must be an integer"),
  userController.getUserById
);
// Delete user
router.delete(
  "/delete:id",
  authMiddleware,
  roleMiddleware("admin"),
  (req, res) => {
    const { id } = req.params;
    userController.deleteUser(req, res);
  }
);

router.post("/upload", authMiddleware, upload.single("file"), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  res.json({
    message: "File uploaded successfully",
    file: {
      filename: file.filename,
    },
  });
});




module.exports = router;
