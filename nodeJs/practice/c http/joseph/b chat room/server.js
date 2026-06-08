const net = require("net");
let connectedSockets = [];

const server = net.createServer((socket) => {
  socket.on("data", (chunk) => {
    connectedSockets.forEach((s) => {
      s.write(chunk);
    });
  });
});

server.listen(2000, "127.0.0.1", () => {
  console.log("server ", server.address());
});

server.on("connection", (socket) => {
  connectedSockets.push(socket);
  // console.log("A new user connected!");
});
