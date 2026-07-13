# **Strict Mode**

## Table of Contents

1. **What is Strict Mode?**





# What is Strict Mode?
"use strict" is a special directive in JavaScript that tells the JavaScript engine:
Run this code in strict mode, where bad or unsafe JavaScript practices become errors instead of being silently ignored.
It was introduced in ES5 (2009) to make JavaScript safer and easier to debug.
**directives**
The word directive simply means: An instruction or command telling someone or something how to act.
So, directive is an instruction to the compiler, interpreter, or runtime that tells it how to behave, rather than being part of your program's actual business logic.
Think of it like this:
- Normal code → tells the computer what your program should do.
- Directive → tells the language or runtime how to interpret or execute your code.
## Examples
- `"use strict";` is a directive that tells the JavaScript engine to run the code in strict mode.
- `"use client";` is a directive used in React to indicate that a component should run in the client-side environment.
- `"use server";` is a directive used in React to indicate that a component should run in the server-side environment.
- `#include <iostream>` is a directive used in C++ to include the iostream library in the code.
There are other directives too in different programming languages.





# Changes introduced in Strict Mode
## 1. Variables must be declared
Before strict mode, if you assign a value to a variable that hasn't been declared (using var, let, or const), JavaScript would silently create a global variable. Strict mode throws an error in this case.
```javascript
// normal js
x = 10;  // silently creates global variable

// strict mode
"use strict";
x = 10;  // Throws ReferenceError in strict mode (was global variable before)
```

## 2. this behaves differently
In normal JavaScript, `this` refers to the global object (window) in global functions. In strict mode, it refers to `undefined`.
```javascript
// normal js
function showThis() {
  console.log(this);
}
showThis(); // Logs: Window object (in browser)

// strict mode
"use strict";
function showThisStrict() {
  console.log(this);
}
showThisStrict(); // Logs: undefined
```

## 3. Duplicate parameter names are not allowed
In normal JavaScript, you can define a function with duplicate parameter names. Strict mode throws an error in this case.
```javascript
// normal js
function add(a, a) {
  return a + a;
}
console.log(add(2, 3)); // 5 (the second 'a' overrides the first)

// strict mode
"use strict";
function addStrict(a, a) {
  return a + a;
}
addStrict(2, 3); // SyntaxError: Duplicate parameter name not allowed
```

## 4. Deleting variables is not allowed
```javascript
// normal js
var x = 10;
delete x; // returns true in normal js

// strict mode
"use strict";
var y = 20;
delete y; // throws SyntaxError: Delete of an unqualified identifier in strict mode
```

## Do We Still Need It Today?
If you're writing ES modules (import/export), strict mode is enabled automatically.
Example:
```javascript
// app.js
export function greet() {}
```
This file is already running in strict mode.
Similarly, code inside ES6 classes is also automatically strict.
So today:
- In Classic `<script>` files → use `"use strict"` if you want strict mode.
- In ES modules (import/export) → strict mode is automatic.
- In Class methods → strict mode is automatic.

## Summary
| Without Strict Mode                                             | With Strict Mode       |
| --------------------------------------------------------------- | ---------------------- |
| Undeclared variables become globals                             | Error                  |
| `this` in a regular function is the global object (in browsers) | `undefined`            |
| Duplicate parameters allowed                                    | Error                  |
| Many mistakes are ignored                                       | Mistakes become errors |
| Harder to debug                                                 | Easier to debug        |

Think of "use strict" as a "strict teacher" for JavaScript. Instead of silently accepting questionable code, it forces you to write cleaner and safer code by turning many common mistakes into immediate errors.