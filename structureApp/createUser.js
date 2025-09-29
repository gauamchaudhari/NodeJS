const yargs = require('yargs');

const argv = yargs
  .usage('Usage: $0 --name [string] --role [string]')
  .demandOption(['name', 'role'])
  .describe('name', 'User name')
  .describe('role', 'User role')
  .alias('n', 'name')
  .alias('r', 'role')
  .argv;

// Simulate user creation
console.log('🆕 Creating User...');
console.log(`👤 Name: ${argv.name}`);
console.log(`🔐 Role: ${argv.role}`);
console.log('✅ User created successfully!');