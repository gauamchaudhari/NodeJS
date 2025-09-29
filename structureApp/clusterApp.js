const cluster = require('cluster');
const os = require('os');
const http = require('http');

const numcpu = os.cpus().length;

if (cluster.isPrimary) {
    console.log(`👑 Master process PID: ${process.pid}`);
    console.log(`🔁 Forking ${numcpu} workers...`);

  // Fork workers
  for (let i = 0; i < numcpu; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`💀 Worker ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });
} else {
     // Each worker creates its own HTTP server
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end(`👷 Handled by worker: ${process.pid}\n`);
    }).listen(8000, () => {
        console.log(`✅ Worker started: ${process.pid}`);
    });
}