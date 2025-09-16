const http = require("http"); // retuern an object
const fs = require("fs"); // retuern an object

const homePage = fs.readFileSync("./home.html");

// Create an HTTP server instance
const server = http.createServer((request, response) => {
  console.log("Request received");
  //                          ---------------Routing-----------------
  // You can also serve an HTML file instead of plain text.
  // But if you reference external CSS or JS files using
  // <link rel="stylesheet" href="..."> or <script src="..."></script>,
  // you must also create separate routes or a static-file server to serve those files.
  // Node's core 'http' module does NOT automatically handle static files.
  if (request.url === "/" || request.url == "home") {
    // Set HTTP response status and headers
    // 200 → OK (successful request)
    // 'Content-Type' → tells the browser the type of content being sent
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(homePage);
    return;
  }

  if (request.url === "/users") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("users page");
    return;
  }
  response.writeHead(404);
  response.end("route not found");
});

server.listen(8000, () => {
  const { address, port } = server.address();
// for localhost/127.0.0.1 address = ::
// and for other ip, address = ip
  const host = (address === '::') ? 'localhost' : address;
  console.log(`Server is running on: http://${host}:${port}`);
});
