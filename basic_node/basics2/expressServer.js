const express = require('express');
const app = express();
const port = 3005;

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('🌍 Welcome to the Home Page!');
});

app.get('/about', (req, res) => {
    res.send('📖 Welcome to the About Page!');
});

app.get('/contact', (req, res) => {
    res.send('📞 Welcome to the Contact Page!');
});

// start the web server
app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}/`);
});