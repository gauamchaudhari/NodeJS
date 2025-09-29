const fs = require('fs');
const crypto = require('node:crypto');
const yargs = require('yargs');

// Secret key (for simplicity, we're using a fixed key)
const key = Buffer.from('your-fixed-32-byte-key-here'); // Must be exactly 32 bytes

// Encrypt function
const encryptFile = (inputPath, outputPath) => {
  const iv = crypto.randomBytes(16); // Generate random IV for encryption
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  const input = fs.createReadStream(inputPath);
  const output = fs.createWriteStream(outputPath);

  // Write IV at the beginning of the encrypted file
  output.write(iv);

  input.pipe(cipher).pipe(output);

  output.on('finish', () => {
    console.log(`📂 File encrypted and saved as ${outputPath}`);
  });
};

// Decrypt function
const decryptFile = (inputPath, outputPath) => {
  const input = fs.createReadStream(inputPath);
  const output = fs.createWriteStream(outputPath);

  let ivFromFile;

  // Read the IV from the encrypted file (first 16 bytes)
  input.once('data', (chunk) => {
    ivFromFile = chunk.slice(0, 16); // The first 16 bytes are the IV

    // Now that we have the IV, we can initialize the decipher
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, ivFromFile);

    // Continue reading the encrypted data
    input.pipe(decipher).pipe(output);

    output.on('finish', () => {
      console.log(`📂 File decrypted and saved as ${outputPath}`);
    });
  });
};

// Command-line arguments processing
const argv = yargs
  .usage('Usage: $0 --action [encrypt/decrypt] --input [input file] --output [output file]')
  .demandOption(['action', 'input', 'output'])
  .describe('action', 'Action to perform (encrypt/decrypt)')
  .describe('input', 'Input file path')
  .describe('output', 'Output file path')
  .alias('a', 'action')
  .alias('i', 'input')
  .alias('o', 'output')
  .argv;

// Perform action
if (argv.action === 'encrypt') {
  encryptFile(argv.input, argv.output);
} else if (argv.action === 'decrypt') {
  decryptFile(argv.input, argv.output);
} else {
  console.log('Invalid action! Please use "encrypt" or "decrypt".');
}
