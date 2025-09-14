// Import the built-in 'fs' (File System) module to work with files
const fs = require("fs");

const txt = `Content written at ${new Date()}`;

// Write the text into a file named 'file-a.txt' inside the 'files' folder
// If the file doesn't exist, it will be created; if it exists, it will be overwritten
fs.writeFileSync("./files/file-a.txt", txt);

// Read the content of the file as a UTF-8 string
const fileAContent = fs.readFileSync("./files/file-a.txt", "utf-8");

console.log(fileAContent);
