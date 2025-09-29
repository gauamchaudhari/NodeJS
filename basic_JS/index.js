import http from "http";
import personInfo from "./classes.js";
const person1 = new personInfo("Alice", 30);
person1.display();

// create server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!\n");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
