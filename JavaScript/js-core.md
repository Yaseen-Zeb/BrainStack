# Memory: Stack vs Heap

## Concept
JavaScript manages memory in two main areas:
- **Stack** → Stores primitive values and function calls (fixed, simple data).
- **Heap** → Stores objects, arrays, and functions (dynamic, complex data).

## Key Points
- Stack = fast, small, ordered (LIFO).
- Heap = large, flexible, unordered.
- Primitives → stored directly in stack.
- Objects/arrays → reference in stack, data in heap.
- Garbage Collector frees unused heap memory.

## Example
```js
// Stack (primitive)
let a = 10;
let b = a;
b = 20;
console.log(a); // 10
console.log(b); // 20

// Heap (reference)
let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 20;
console.log(obj1.value); // 20