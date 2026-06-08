const fs = require("node:fs/promises");

(async () => {
  console.time("Time");
  const fileHandleRead = await fs.open("./text.txt", "r");
  const fileHandleWrite = await fs.open("./dest.txt", "w");
  const streamRead = fileHandleRead.createReadStream();
  const streamWrite = fileHandleWrite.createWriteStream();
  console.log(streamRead.readableHighWaterMark); // 64 KB (65536 bytes)
  console.log(streamWrite.writableHighWaterMark); // 16 KB (16384 bytes)

  // BUG: never do this for big data while reading and writing. it will crash the system instead we are going to drain the stream
  // streamRead.on("data", (chunk) => {
  //   streamWrite.write(chunk);
  // });

  function manuallyHandleBackPresure() {
    streamRead.on("data", (chunk) => {
      if (!streamWrite.write(chunk)) streamRead.pause();
    });
    streamWrite.on("drain", () => {
      streamRead.resume();
    });
  }
  manuallyHandleBackPresure();

  // function nodeBuiltInBackPresureHandler() {
  //   streamRead.pipe(streamWrite)
  // }
  // nodeBuiltInBackPresureHandler()

  streamRead.on("error", (err) => {
    console.error("Read error:", err);
    streamWrite.destroy(err);
  });
 
  streamWrite.on("error", (err) => {
    console.error("Write error:", err);
    streamRead.destroy(err);
  });

  streamRead.on("end", () => {
    streamWrite.end();
  });

  streamWrite.on("finish", async () => {
    await fileHandleRead.close();
    await fileHandleWrite.close();
     console.timeEnd("Time");
  });
})();
