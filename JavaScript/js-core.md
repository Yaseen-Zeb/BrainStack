# **JavaScript Core**

## 📑 Table of Contents
1. **Memory: Stack vs Heap**
2. **Execution Context**3
3. **Closure**

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

When the JavaScript engine scans a script file, it makes an environment called the Execution Context that handles the entire transformation and execution of the code.

## Parts of Execution Context

Creation Phase
Execution Phase

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

During Execution Phase the when there is sync function call it goes to **Call Stack** also called **Execution Context Stack, Runtime Stack, or Machine Stack** and make his own **Execution Context (FEC)** with same proccess as above. It works on LIFO (Last In, First Out)

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



# Closure
A closure is created when a function "remembers" and can access variables from its outer scope, even after that outer function has finished executing. **Closure = Function + Lexical Environment**

```js
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer(); 
counter(); // 1
counter(); // 2
counter(); // 3
```

Closures exist because the returned function (inner) keeps a reference to its parent scope (outer), so variables like count remain in heap memory even after outer has finished.



