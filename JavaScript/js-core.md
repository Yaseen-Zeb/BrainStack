# **JavaScript Core**

## 📑 Table of Contents
1. **Memory: Stack vs Heap**
2. **Execution Context**

# Memory: Stack vs Heap

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
```

# Execution Context -> (Memory Allocation / Hoisting, Stack)

An Execution Context is the environment in which JavaScript code is evaluated and executed.

## Parts of Execution Context

Creation Phase
Execution Phase
Call Stack

### Creation Phase (Memory Allocation / Hoisting)

- JS engine sets up memory before execution.
- Uses **Stack Memory**.
- What happens:
  - Variables are **hoisted** → memory is allocated with `undefined`.
  - Functions are **hoisted** → full function definition is stored.

```js
console.log(a); // undefined
var a = 10;

function test() {
  return "hello";
}
```

### Execution Phase

Code executes line by line. **Stack Memory** get updated and actual values get assigned to variables. **Heap Memory** is used for reference types (objects, arrays, functions).

```js
var y = 20;                // stored in stack (primitive)
var x = { name: "Ali" };   // stored in heap (object reference)
```

During Execution Phase the when there is sync function call it goes to **Call Stack** and make his own **Execution Context** with same proccess as above. It works on LIFO (Last In, First Out)

```js
function one() {
  two();
}
function two() {
  console.log("Hello");
}
one();
```
Global Execution Context → pushed to Global call stack.
one() → pushed to call stack.
two() → pushed to Call Stack of function **one**.
two() → executes → logs "Hello", then pops out from the (CS) of function one.
one() → pops out from the global (CS)
Global CS is empty.


