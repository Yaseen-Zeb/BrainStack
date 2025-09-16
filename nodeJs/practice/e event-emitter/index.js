// If you worked with JavaScript in the browser, you know how much of the interaction of the user is handled through events: mouse clicks, keyboard button presses, reacting to mouse movements, and so on.

// On the backend side, Node.js offers us the similar option using the events module.

// This module, in particular, offers the EventEmitter class, which we'll use to handle our events.

// There are alot of built-in events https://nodejs.org/en/learn/asynchronous-work/the-nodejs-event-emitter#the-nodejs-event-emitter some are as followed

// http events
const http = require("http");

const server = http.createServer((req, res) => {
  // here we can handle routes
  res.end("Hello");
});

server.on("request", (req, res) => {
  // here we can handle routes also
  console.log(`Request for ${req.url}`);
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(8000, () => {
  const { address, port } = server.address();
  const host = address === "::" ? "localhost" : address;
  console.log(`Server is running on: http://${host}:${port}`);
});

// readline enevts
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Type some thing: ");

rl.on("line", (input) => {
  console.log(`You typed: ${input}`);
});

rl.on("close", () => {
  console.log("Interface closed");
});
