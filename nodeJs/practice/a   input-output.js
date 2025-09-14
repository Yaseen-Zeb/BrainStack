// Import the built-in 'readline' module to read input from the console
const readline = require("readline"); // return an object

// Create an interface to handle input (stdin) and output (stdout)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask the user a question and wait for their answer
rl.question("Enter your name: ", (name) => {
  // Print the answer entered by the user
  console.log("You entered " + name);
  // Close the readline interface after receiving input
  rl.close();
});

// This event fires when the readline interface is closed
rl.on("close", () => {
  console.log("readline closed.");
});
