const { add, subtract } = require("./math"); // Import custom module

console.log(add(2, 3));
console.log(subtract(10, 4));


// CommonJS support only dynamic imports
// Dunamic imports are decided at runtime
// Can be conditional or inside functions or loops
// Advantages:
// Flexible
// Can load modules only when needed

// Note:-
// ES Modules came later than Node.js. Node.js originally used CommonJS. Because of this, many old Node.js packages were written in CommonJS. Today, ES Modules are the recommended and future-proof standard, but CommonJS is still widely used for backward compatibility.