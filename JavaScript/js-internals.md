# **JavaScript Internals/Core**

## 📑 Table of Contents

1. **Memory: Stack vs Heap**
2. **Execution Context**
3. **Closure**
4. **Scope**
5. **this**



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



# Execution Context(Memory Allocation / Hoisting)
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



# this
this is a special keyword in JavaScript that refers to the object that is executing the current function. It provides a way for functions to access the object that "owns" or "invokes" them
Its value is determined at call time, not at write time.

## Rules
Default Binding
Implicit Binding
Explicit Binding (call, apply, bind) واضح طور پر
New Binding
In Event Handler

**Default Binding**
When a function is called without any object context, this defaults to:
Global object (window in browsers, global in Node.js) in non-strict mode.
undefined in strict mode. **take a look on arrow fn** 
```js
function show() {
  console.log(this);
}
show(); // window (in browser), undefined (in strict mode)
```

**Implicit Binding**
When a function is called as a method of an object, this is bound to the object before the dot (.)
```js
const user = {
  name: "Ali",
  greet: function() {
    console.log(this.name);
  }
};
user.greet(); // "Ali" → `this` refers to `user`
```

**Explicit Binding**
We can manually set the value of this using:
call(thisArg, ...args)
apply(thisArg, [args])
bind(thisArg)
```js
function greet() {
  console.log(this.name);
}
const person = { name: "Sara" };
greet.call(person);  // "Sara"
greet.apply(person); // "Sara"
const boundGreet = greet.bind(person);
boundGreet();        // "Sara"
```

**New Binding**
When a function is called with the new keyword:
A **new empty object** is created.
**this** is bound to that object.
Unless the function returns another object, the newly created object is returned.
```js
function Person(name) {
  this.name = name;
}
const p1 = new Person("Ahmed");
console.log(p1.name); // "Ahmed"
```

**Event Handler this**
this in a Regular Function Event Handler
When you attach an event handler as a normal function (not arrow),
this inside the handler refers to the DOM element that received the event.
```js
document.getElementById("btn").addEventListener("click", function () {
  console.log(this); // <button id="btn">Click me</button>
});
//Arrow functions do not have their own this.
// Instead, they use the lexical this (the value of this where the function was defined).
document.getElementById("btn").addEventListener("click", () => {
  console.log(this); // window (in browsers)
});
```





