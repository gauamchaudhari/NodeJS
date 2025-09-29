const express = require('express');
const app = express();
const post = 3006;

// Middleware to handle urlencoded (form) data and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route to serve HTML form GET 
app.get('/', (req, res) => {
    res.send(`
        <form action="/submit" method="POST">
            <lavel for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <br>
            <button type="submit">Submit</button>
        </form>`
    );
});

app.post('/submit', (req, res) => {
    const name = req.body.name;
    res.send(`Hello, ${name}!`);    
});

app.post('/api/submit', (req, res) => {
    const {name, age}   = req.body;
    res.json({
        message: `Hello, ${name}! You are ${age} years old.`,
        name,
        age
    }); 
});

app.listen(post, () => {
    console.log(`🚀 Server running at http://localhost:${post}/`);
});