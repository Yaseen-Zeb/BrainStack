const net = require("net");

const server = net
  .createServer((socket) => {
    socket.on("data", (chunk) => {
      console.log(chunk.toString());
    });
  })
  .listen(2000, "192.168.18.228", () => {
    console.log("server ", server.address());
  });
