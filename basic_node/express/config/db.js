require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("✅ Sequelize: MySQL connected successfully.");
  } catch (error) {
    console.error("❌ Sequelize: Unable to connect to the database:", error);
    process.exit(1);
  }
}

module.exports = { sequelize, connectDB };
