const path = require('path');

// Get full path of the file
console.log('Full Path:', __filename);

// Get directory name
console.log('Directory Name:', __dirname);
// Get base name of the file
console.log('Base Name:', path.basename(__filename));
// Get file extension
console.log('File Extension:', path.extname(__filename));
// Get path object
const pathObject = path.parse(__filename);
console.log('Path Object:', pathObject);
// Join paths
const joinedPath = path.join(__dirname, 'newFolder', 'file.txt');
console.log('Joined Path:', joinedPath);
// Normalize path   
const normalizedPath = path.normalize('/foo/bar//baz/asdf/quux/..');
console.log('Normalized Path:', normalizedPath);
// Resolve path
const resolvedPath = path.resolve('foo', 'bar', 'baz');
console.log('Resolved Path:', resolvedPath);