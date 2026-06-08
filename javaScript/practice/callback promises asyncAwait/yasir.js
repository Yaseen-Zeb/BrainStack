// line by line
console.log(1);
console.log(2);
console.log(3);





// now there are some restriction like network,files access in js due to sucurity reasons
// so js take help of browsers to do them
// they are a bit show
// now one options is to wait to until work complete 
// and instead of waiting the js continue execution of the rest

// console.log(1);
// function readFile() {
//   setTimeout(() => {
//     console.log("Yes");
//   }, 5000);
// }
// readFile()
// console.log(2);

// now we dont want to log Yes each time so call come here
// console.log(1);
// function readFile(cb) {
//   setTimeout(() => {
//    cb()
//   }, 5000);
// }
// readFile(()=>console.log("Yasir"))
// readFile(()=>console.log("Yaseen"))
// console.log(2);




// console.log(1);
// function readFile(cb) {
//   setTimeout(() => {
//     cb();
//   }, 2000);
// }
// readFile(() => {
//   console.log("Yasir");

//   readFile(() => {
//     console.log("Yaseen");

//     readFile(() => {
//       console.log("Ali");

//       readFile(() => {
//         console.log("Ahmed");

//         readFile(() => {
//           console.log("End");
//         });
//       });
//     });
//   });
// });
// console.log(2);



