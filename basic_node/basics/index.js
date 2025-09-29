const http = require('http');

const server  = http.createServer((req,res) => {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Hello Worlds from Node.js\n');   
});

server.listen(3000, () => {
    console.log('🚀 Server running at http://localhost:3000/');
});