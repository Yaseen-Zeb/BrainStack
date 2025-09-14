// Import the built-in 'http' module to create an HTTP server
const http = require("http"); // retuern an object

// Create an HTTP server instance
const server = http.createServer((request, response) => {
  console.log("Request received");

  if (request.url === "/") {
    response.end("index");
  }

  if (request.url === "/users") {
    response.end("users");
  }

  response.end("General");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server is running on: http://127.0.0.1:8000");
});
