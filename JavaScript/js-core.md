# **JavaScript Core**

## 📑 Table of Contents

1. **Memory: Stack vs Heap**
2. **Execution Context**3
3. **Closure**
4. **Scope**

# Memory: Stack vs Heap
JavaScript manages memory in two main areas:
- **Stack** → Stores primitive values and function calls (fixed, simple data).
- **Heap** → Stores objects, arrays, and functions (dynamic, complex data).
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
var y = 20; // stored in stack (primitive)
var x = { name: "Ali" }; // stored in heap (object reference)
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

# Scope
Scope determines the visibility and accessibility of variables — i.e., where a variable can be accessed or modified

## Types of Scope
Global Scope
Function Scope (Local Scope)
Block Scope

**Global Scope**
Variables declared outside any function or block are in global scope. Accessible anywhere in your code. In browsers, they become properties of window.
```js
let globalVar = "I am global";
function showGlobal() {
  console.log(globalVar); // Accessible
}
showGlobal();
console.log(globalVar); // Accessible
```

**Function Scope (Local Scope)**
Variables declared inside a function are only accessible within that function. Functions create their own scope
```js
function myFunc() {
  let localVar = "I am local";
  console.log(localVar); // Accessible here
}
myFunc();
console.log(localVar); // ❌ Error: localVar is not defined
```

**Block Scope**
Variables declared inside { } (like in if, for, while, {}) are block-scoped. Only let and const respect block scope. var does not.
```js
if (true) {
  let blockVar = "I am block scoped";
  const constVar = "Me too!";
  var varVar = "I am function scoped";
}
console.log(blockVar); // ❌ Error
console.log(constVar); // ❌ Error
console.log(varVar);   // ✅ Accessible if inside function, otherwise global
```
