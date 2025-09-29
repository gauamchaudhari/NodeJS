const os = require("os");

console.log("OS Platform (प्लेटफ़ॉर्म): " + os.platform());
console.log("OS Architecture (आर्किटेक्चर): " + os.arch());
console.log(
  "Total Memory (कुल मेमोरी): " +
    (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) +
    " GB"
);
console.log(
  "Free Memory (फ्री मेमोरी): " +
    (os.freemem() / 1024 / 1024 / 1024).toFixed(2) +
    " GB"
);
console.log("Hostname (होस्टनाम): " + os.hostname());
console.log("Home Directory (होम डायरेक्टरी): " + os.homedir());
console.log("Number of CPU Cores (CPU कोर की संख्या): " + os.cpus().length);
