const path = require('path');

// 1. path.join()
const joinedPath = path.join('foo', 'bar', 'baz/asdf', 'quux', '..');
console.log('Joined path:', joinedPath);

const filePath = path.join(__dirname, "parts", "user.json");
console.log("File path:", filePath);

//2. path.basename()
const baseName = path.basename(filePath);
console.log("Base name:", baseName);

// 3. path.extname()
const extName = path.extname(filePath);
console.log("Extension name:", extName);

// 4. path.dirname()
const dirName = path.dirname(filePath);
console.log("Directory name:", dirName);

// 5. path.resolve()
const resolvedPath = path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile');
console.log('Resolved path:', resolvedPath);

// 6. path.isAbsolute()
console.log('Is absolute (C:\\foo\\bar):', path.isAbsolute('C:\\foo\\bar'));
console.log('Is absolute (./baz):', path.isAbsolute('./baz'));

// 7. path.parse()
const parsedPath = path.parse('/home/user/dir/file.txt');
console.log('Parsed path:', parsedPath);

// 8. path.format()
const formattedPath = path.format({
    dir: '/home/user/dir',
    base: 'file.txt'
});
console.log('Formatted path:', formattedPath);

// 9. path.relative()
const relativePath = path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');
console.log('Relative path:', relativePath);

// 10. path.sep
console.log('Path separator:', path.sep);

// 11. path.delimiter
console.log('Path delimiter:', path.delimiter);
// 12. path.toNamespacedPath()
const namespacedPath = path.toNamespacedPath('C:\\foo\\bar');
console.log('Namespaced path:', namespacedPath);
