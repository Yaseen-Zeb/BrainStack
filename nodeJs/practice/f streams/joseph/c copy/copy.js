const fs = require("node:fs/promises");
const { pipeline } = require("node:stream/promises");

// TODO: copy file without stream
(async () => {
  console.time("copy");
  const result = await fs.readFile("text.txt"); // return the whole file in one buffer
  let writeFileHandle;
  try {
    // writeFileHandle = await fs.open("dest.txt", "w"); // low-level fs APIs
    // await writeFileHandle.write(result);
    await fs.writeFile("dest.txt", result); // high-level fs API
  } catch (error) {
    console.error(error);
  } finally {
    // if (writeFileHandle) await writeFileHandle.close(); // free resource
    console.timeEnd("copy");
  }
})();

// TODO: Let's implement stream without nodejs stream to copy file.
// (async () => {
//   console.time("copy");
//   // keep them out is function scope
//   let readFileHandle;
//   let writeFileHandle;
//   try {
//     readFileHandle = await fs.open("./text.txt", "r");
//     writeFileHandle = await fs.open("./dest.txt", "w");
//     let readedBytes = -1;
//     while (readedBytes !== 0) {
//       const chunk = await readFileHandle.read();
//       readedBytes = chunk.bytesRead;
//       await writeFileHandle.write(chunk.buffer.subarray(0, chunk.bytesRead));
//     }
//     console.log("Copied successfully");
//   } catch (error) {
//     console.error("Copy failed:", error);
//   } finally {
//     if (readFileHandle) await readFileHandle.close();
//     if (writeFileHandle) await writeFileHandle.close();
//     console.timeEnd("copy");
//   }
// })();

// TODO: Understanding Piping
// TOPIC: PIP => behind the sence pip do the exact same thing as we does manually. it handle back pressure, draining, pause and resume by itself. so kind of easy to use.
// (async () => {
//   console.time("copy");
//   let readFileHandle, writeFileHandle;
//   async function freeResourceAlloc() {
//     // The catch(() => {}) ensures that if the handle is already closed,so code won’t crash.
//     if (readFileHandle) await readFileHandle.close().catch(() => {});
//     if (writeFileHandle) await writeFileHandle.close().catch(() => {});
//   }

//   try {
//     readFileHandle = await fs.open("./text.txt", "r");
//     writeFileHandle = await fs.open("./dest.txt", "w");

//     const readStream = readFileHandle.createReadStream();
//     const writeStream = writeFileHandle.createWriteStream();

//     // ERROR HANDLING: errors destroy the opposite stream
//     readStream.on("error", async (err) => {
//       writeStream.destroy(err);
//       await freeResourceAlloc();
//       console.error("Stream error:", err);
//     });
//     writeStream.on("error", async (err) => {
//       readStream.destroy(err);
//       await freeResourceAlloc();
//       console.error("Stream error:", err);
//     });

//     // SUCCESS SIGNAL: as write will done after read so thats why
//     writeStream.on("finish", async () => {
//       await freeResourceAlloc();
//       console.timeEnd("copy");
//     });

//     readStream.pipe(writeStream);
//   } catch (error) {
//     console.error("Failed to open files:", error);
//   }
//   // confusion here 30min wasted but not understand
//   //  finally {
//   //   await freeResourceAlloc();
//   // }
// })();

// TODO: pipeline => A module method to pipe between streams and generators forwading errors and properly cleaning up and provide a callback when the pipeline is completed
// (async () => {
//   console.time("copy");
//   const readFileHandle = await fs.open("./text.txt", "r");
//   const writeFileHandle = await fs.open("./dest.txt", "w");

//   try {
//     await pipeline(
//       readFileHandle.createReadStream(),
//       writeFileHandle.createWriteStream(),
//     );
//   } catch (error) {
//     console.error(error);
//   } finally {
//     await readFileHandle.close();
//     await writeFileHandle.close();
//     console.timeEnd("copy");
//   }
// })();
