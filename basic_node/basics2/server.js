const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    
    if (req.url === '/about') {
        res.setHeader('Content-Type', 'text/plain');
        res.end('About Page\n');
        return;
    }

    if (req.url === '/contact') {
        res.setHeader('Content-Type', 'text/plain');
        res.end('Contact Page\n');
        return;
    }

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/plain');
        res.end('Home Page\n');
        return;
    }

    // Handle unknown routes
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Not Found\n');
});

server.listen(3002, () => {
    console.log('🚀 Server running at http://localhost:3002/');
});
