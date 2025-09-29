const db = require("../config/db");
const bcrypt = require("bcryptjs");

const seedUsers = () => {
  const hashedPassword = bcrypt.hashSync("Admin@123", 10); // Use a fixed password for seeding

  const users = [
    {
      email: "gautam.patel.5317@yopmail.com",
      password: hashedPassword,
      full_name: "User One",
    },
    {
      email: "user2@yopmail.com",
      password: hashedPassword,
      full_name: "User Two",
    },
  ];

  users.forEach((user) => {
    db.query(
      "INSERT INTO users (email, password, full_name) VALUES (?, ?, ?)",
      [user.email, user.password, user.full_name],
      (err, result) => {
        if (err) throw err;
        console.log(`User ${user.email} added to the database.`);
      }
    );
  });
};

seedUsers();
