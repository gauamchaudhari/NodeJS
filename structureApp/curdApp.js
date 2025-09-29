const express = require('express');
const authRoutes = require('./routes/auth');
const cookieParser = require('cookie-parser');

const app = express();
require('dotenv').config();

const userRoutes = require('./routes/users');

app.use(cookieParser());
app.use(express.json());
app.use('/users', userRoutes);
app.use('/auth', authRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
