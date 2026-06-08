const net = require("net");
const readlinePromises = require("node:readline/promises");

const rl = readlinePromises.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function ask() {
  const msg = await rl.question("Enter your message > ");
  // by entering msg the cursor move down one line so we move back in y directon and remove line "Enter your message >".
  await moveCursor(0, -1);
  await clearLine(0);
  socket.write(msg);
}
async function moveCursor(xDir, yDir) {
  return new Promise((resolve, reject) => {
    process.stdout.moveCursor(xDir, yDir, () => resolve());
  });
}
async function clearLine(dir) {
  return new Promise((resolve, reject) => {
    process.stdout.clearLine(dir, () => resolve());
  });
}

const socket = net.createConnection(
  { port: 2000, host: "127.0.0.1" },
  async () => {
    console.log("Welcome to the chat!");
    await ask();
  },
);

socket.on("data", async (chunk) => {
  console.log();
  await moveCursor(0, -1);
  await clearLine(0);
  console.log(chunk.toString());
  await ask();
});
