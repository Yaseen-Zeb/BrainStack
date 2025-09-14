// Import the built-in 'fs' (File System) module to work with files
const fs = require("fs"); // return an object
//                                 ----------------Synchronous-----------------
const txt = `Content written at ${new Date()}`;

// Write the text into a file named 'file-a.txt' inside the 'files' folder
// If the file doesn't exist, it will be created; if it exists, it will be overwritten
fs.writeFileSync("./file-a.txt", txt);

// Read the content of the file as a UTF-8 string
const fileAContent = fs.readFileSync("./file-a.txt", "utf-8");

console.log(fileAContent);
// Note : In the above code, for error handling we can use (try,catch)

//                                  ----------------Asynchronous-----------------

fs.writeFile("./file-a.txt", txt, (writeErr) => {
  if (writeErr) {
    console.error("Error writing file:", writeErr);
    return;
  }
  console.log("File written successfully.");

  fs.readFile("./file-a.txt", "utf-8", (readErr, data) => {
    if (readErr) {
      console.error("Error reading file:", readErr);
      return;
    }
    console.log("File content:", data);
  });
});
