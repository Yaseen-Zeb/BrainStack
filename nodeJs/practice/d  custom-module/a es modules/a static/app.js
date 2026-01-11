import { add, subtract } from "./math.js"; // Import custom module

console.log(add(2, 3));
console.log(subtract(10, 4));

// Static imports are fixed and known before running
// Cannot be conditional or inside blocks
// Advantages:
// Engine knows dependencies early
// Faster and optimized
// Supports tree-shaking
