const sequelize = require('../config/db');

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected...');
    await sequelize.sync();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = connectDB;
