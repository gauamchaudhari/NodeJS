const path = require('path');   

console.log(__dirname); // Current directory
console.log(__filename); // Current file
console.log(path.basename(__filename)); // File name
console.log(path.dirname(__filename)); // Directory name
console.log(path.extname(__filename)); // File extension
console.log(path.parse(__filename)); // Parse file path
console.log(path.join(__dirname, 'test', 'hello.html')); // Join paths
console.log(path.resolve(__dirname, 'test', 'hello.html')); // Resolve path
console.log(path.normalize('/test/test1//2slashes/1slash/tab/..')); // Normalize path
console.log(path.isAbsolute('/test/test1//2slashes/1slash/tab/..')); // Check if path is absolute
console.log(path.isAbsolute('test/test1//2slashes/1slash/tab/..')); // Check if path is absolute
console.log(path.relative('/test/test1//2slashes/1slash/tab/..', '/test/test1//2slashes/1slash/tab/..')); // Get relative path
console.log(path.sep); // Path separator
console.log(path.delimiter); // Path delimiter
console.log(path.win32); // Windows path module
console.log(path.posix); // POSIX path module
console.log(path.format({ // Format path
    root: '/',
    dir: '/home/user/dir',
    base: 'file.txt',
    ext: '.txt',
    name: 'file'
})); // Format path
console.log(path.parse('/home/user/dir/file.txt')); // Parse path
console.log(path.join('/home/user', 'dir', 'file.txt')); // Join paths
console.log(path.resolve('/home/user', 'dir', 'file.txt')); // Resolve path
console.log(path.normalize('/home/user/dir/../file.txt')); // Normalize path