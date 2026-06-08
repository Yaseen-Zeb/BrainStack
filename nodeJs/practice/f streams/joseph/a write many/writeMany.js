const fs = require("node:fs/promises");
// const fs = require("fs");

// Execution Time: 20s
// CPU usage: 45%
// Memory usage: 2GB
// (async () => {
//   console.time("Time");
//   const fileHandle = await fs.open("./text.txt", "w");
//   for (let i = 0; i <= 1000000; i++) fileHandle.write(` ${i}`);
//   console.timeEnd("Time");
// })();

// Execution Time: 4sec
// CPU usage: 12%
// Memory usage: 28kb
// fs.open("./text.txt", "w", (error, fd) => {
//   if (error) throw error;
//   console.time("Time");
//   for (let i = 0; i <= 1000000; i++) fs.writeSync(fd, `${i} `);
//   console.timeEnd("Time");
// });

// Execution Time: 8sec
// CPU usage: 12%
// Memory usage: 5kb
(async () => {
  console.time("Time");
  const fileHandle = await fs.open("./text.txt", "w");
  const stream = fileHandle.createWriteStream();
  console.log(stream.writableHighWaterMark);

  let i = 0;
  const numberOfWrites = 10;
  function keepFilling() {
    while (i < numberOfWrites) {
      if (i === numberOfWrites - 1) return stream.end(`${i} `);
      let isBuffFilled = stream.write(`${i} `);
      if (!isBuffFilled) break;
      i++;
    }
  }
  keepFilling();

  stream.on("drain", () => {
    keepFilling();
  });

  stream.on("finish", () => {
    console.timeEnd("Time");
    fileHandle.close();
  });
})();
