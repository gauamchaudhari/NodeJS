const cluster = require("cluster");
const os = require("os");
const express = require("express");

const numcpu = os.cpus().length;

if (cluster.isPrimary) {
  console.log(`👑 Master PID: ${process.pid}`);
  console.log(`🔁 Total CPUs: ${numcpu}, Forking workers...`);

  for (let i = 0; i < numcpu; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(`💀 Worker ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });
} else {
  const app = express();
  const port = process.env.PORT || 3000;

  app.get("/", (req, res) => {
    res.send(`🏃‍♂️ Request handled by worker PID: ${process.pid}`);
  });

  // Heavy CPU Simulate Route
  app.get("/load", (req, res) => {
    const start = Date.now();
    while (Date.now() - start < 2000); // simulate 2 second CPU block
    res.send(`🔥 Heavy work done by PID: ${process.pid}`);
  });

  app.listen(3005, () => {
    console.log(`✅ Worker ${process.pid} started at http://localhost:3005`);
  });
}
