const fs = require("node:fs");

const readStream = fs.createReadStream("./src.json", { highWaterMark: 2 });
const writeStream = fs.createWriteStream("./dest.json");
readStream.pipe(writeStream);
