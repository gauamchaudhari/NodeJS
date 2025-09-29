const fs = require('fs');
fs.writeFile('message.txt', 'Hello, this file was created using Node.js!', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
        console.log('File written successfully');    
});