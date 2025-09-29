const crypto = require("crypto");
const secretText = "Admin@123";
const hashAlgorithm = "sha256";

const hash = crypto.createHash(hashAlgorithm);
hash.update(secretText);

const hashedPassword = hash.digest("hex");

console.log(`Original Text: ${secretText}`);
console.log(`Hash (${hashAlgorithm}): ${hashedPassword}`);

const tokenBuffer = crypto.randomBytes(16); 
const randomToken = tokenBuffer.toString("hex");
console.log(`Random Token: ${randomToken}`); 
