// async function* upperCaseStream(source) {
//   for await (const chunk of source) {
//     yield chunk.toString().toUpperCase();
//   }
// }

// upperCaseStream()

// async function* upperCaseStream(source) {
//   for await (const chunk of source) {
//     yield chunk.toString().toUpperCase();
//   }
// }

// upperCaseStream()

// function add(...r) {
//   console.log(r.reduce((acc, e) => acc + e, 0));
// }
// add(1, 2, 1);
// const {object} =  require("./obj")
// let obj = object
// console.log(object);
// obj.name = "helllo"
// console.log(object);


// const arr = [1, 2];

// const it = arr[Symbol.iterator]();
// console.log(Symbol);


// console.log(it.next()); // { value: 1, done: false }
// console.log(it.next()); // { value: 2, done: false }
// console.log(it.next()); // { value: undefined, done: true }

// const buf = Buffer.from("AA");
// console.log(buf);
// for (const b of buf) {
//     console.log(b);
// }

const fs = require("fs");

const stream = fs.createReadStream("./text.txt",{highWaterMark: 5});

const iterator = stream[Symbol.asyncIterator]();

(async () => {
  const { value, done } = await iterator.next();
  console.log(value);
})();



// (async()=>{
//     for await (const chunk of stream) {
//         console.log(chunk);
//         console.log(8);
// }
// })()






