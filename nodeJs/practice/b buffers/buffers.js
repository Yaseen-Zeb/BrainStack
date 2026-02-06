const { Buffer } = require("buffer");

const buf1 = Buffer.alloc(3);

buf1[0] = 72; // 0x48;
buf1[1] = 0x69;
buf1[2] = 0x21;

const buf2 = Buffer.from([201, 0x69, 0x21]);

const utf8 = (buff) => buff.toString("utf-8");

console.log("buf1", utf8(buf1)); // Hi!
console.log("buf2", utf8(buf2)); // Hi!
console.log("💪".length); // Hi!
