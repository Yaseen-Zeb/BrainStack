const net = require("net");

const client = net.createConnection({ port: 2000, host: "127.1.1.1" }, () => {
  console.log("connected to server!");
  client.write("hello world!");
});
