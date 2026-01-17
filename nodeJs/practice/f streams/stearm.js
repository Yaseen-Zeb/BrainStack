const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.listen(1000);

// Run one at a time form the below request listerners, now let understand streams.

// fs.readFile reads the entire file from disk and loads it completely into memory (buffer). Only after the whole file is loaded, the data can be used (for example, sending it in an HTTP response).
// Issue
// Large files consume a lot of memory
// Multiple users = multiple large buffers
// Memory can fill up and crash the server
server.on("request", (req, res) => {
  fs.readFile("./large-file.txt", (err, data) => {
    if (err) res.end(err);
    res.end(data);
  });
});

// 2️⃣ fs.createReadStream + data / end (manual streaming)
// How this works
// File is read in small chunks (≈ 64KB)
// Each chunk is sent immediately to the client
// Data is not fully stored in memory
// Memory usage stays constant

// ⚠️ Limitation
// You are manually handling chunks
// Backpressure is not handled automatically
// If the client is slow, memory can still grow
server.on("request", (req, res) => {
  const streamData = fs.createReadStream("./large-file.txt");
  streamData.on("data", (chunk) => {
    res.write(chunk);
  });
  streamData.on("end", () => {
    res.end("ended");
  });
});

// 3️⃣ fs.createReadStream().pipe(res) – proper streaming (BEST)
// File is read in small chunks
// Chunks are written directly to the response
// Backpressure is automatically handled
// Stream pauses if the client is slow
// Memory(buffer) usage stays very low
// Safe for large files and many users

// 💡 Why this is best
// No full buffering
// No manual event handling
// Node manages flow control internally
server.on("request", (req, res) => {
  fs.createReadStream("./large-file.txt").pipe(res);
});

// | Method             | Memory Usage | Backpressure | Scales Well
// | ------------------ | ------------ | ------------ | -----------
// | `fs.readFile`      | ❌ High       | ❌ No         | ❌ No
// | Stream + `data`    | ✅ Low        | ❌ No         | ⚠️ Limited
// | `stream.pipe(res)` | ✅ Low        | ✅ Yes        | ✅ Yes

