const fs = require("fs");

// Read a file asynchronously
// fs.readFile('test.txt','utf-8',(err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }
//     console.log('File contents:', data);
// });

// Read a file synchronously
// const data = fs.readFileSync('test.txt');
// console.log('Synchronous read:', data);

// Write to a file asynchronously
// const content = 'Hello, this is a test file.';
// fs.writeFile('output.txt', content, (err) => {
//     if (err) console.error('Error writing file:', err);
//     else console.log('File written successfully');
// });

// create a directory
// mkdirSync Synchronous version
// try {
//   if (!fs.existsSync("foo")) {
//     fs.mkdirSync("foo");
//   }
// } catch (error) {
//   console.error("Error creating directory:", error);
// }

// console.log("Directory created");

// mkdirsync - Asynchronous version
// try {
//   if (!fs.existsSync("bar")) {
//     fs.mkdir("bar", (err) => {
//       if (err) {
//         console.error("Error creating directory:", err);
//       } else {
//         console.log("Directory created");
//       }
//     });
//   }
// } catch (error) {
//   console.error("Error creating directory:", error);
// }

// removing a directory
// rmdirSync - Synchronous version
// try {
//     if (fs.existsSync("foo")) {
//         fs.rmdirSync("foo");
//         console.log("Directory removed");
//     }
// } catch (error) {
//     console.error("Error removing directory:", error);
// }

// // rmdir - Asynchronous version
// try {
//     fs.rmdir("bar", (err) => {
//         if (err) {
//             console.error("Error removing directory:", err);
//         } else {
//             console.log("Directory removed");
//         }
//     });
// } catch (error) {
//     console.error("Error removing directory:", error);
// }

// Get contents of a folder
// asynchronous version
// fs.readdir(".", (err, files) => {
//   if (err) {
//     console.error("Error reading directory:", err);
//     return;
//   }
//   console.log("Directory contents:", files);
// });
// Synchronous version
// try {
//   const files = fs.readdirSync(".");
//   console.log("Directory contents:", files);
// } catch (err) {
//   console.error("Error reading directory:", err);
// }

// Rename a file
// synchronous version
// try {
//   if (fs.existsSync("output.txt")) {
//     fs.renameSync("output.txt", "renamed_output.txt");
//     console.log("File renamed successfully");
//   }
// } catch (err) {
//   console.error("Error renaming file:", err);
// }

// asynchronous version
// try {
//   if (fs.existsSync("renamed_output.txt")) {
//     fs.rename("renamed_output.txt", "output.txt", (err) => {
//       if (err) {
//         console.error("Error renaming file:", err);
//       } else {
//         console.log("File renamed successfully");
//       }
//     });
//   }
// } catch (err) {
//   console.error("Error renaming file:", err);
// }

// Rename directory
// synchronous version
// try {
//   if (fs.existsSync("bar")) {
//     fs.renameSync("bar", "new_bar");
//     console.log("Directory renamed successfully");
//   }
// } catch (err) {
//   console.error("Error renaming directory:", err);
// }

// asynchronous version
// try {
//   if (fs.existsSync("new_bar")) {
//     fs.rename("new_bar", "bar", (err) => {
//       if (err) {
//         console.error("Error renaming directory:", err);
//       } else {
//         console.log("Directory renamed successfully");
//       }
//     });
//   }
// } catch (err) {
//   console.error("Error renaming directory:", err);
// }
