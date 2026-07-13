# **Modules**

## Table of Contents

1. **Why modules exist (the problem they solve)**





# Why modules exist (the problem they solve)
## How JavaScript Used To Handle Multiple Files (Before ES6 Modules)
Before ES6 modules, there were several problems developers faced when trying to organize and reuse code across multiple files:
Imagine you are building a shopping website.
Your project looks like this:

project/
├── index.html
├── math.js
├── auth.js
├── cart.js
└── main.js

```javaScript
// math.js
function add(a, b) {
    return a + b;
}
```
```javaScript
// auth.js
function login() {
    console.log(`Login attempt`);
}
```
```javaScript
// cart.js
function addToCart(product) {
    console.log(`Added ${product} to cart`);
}
```
<!-- Now in HTML: -->
```html
<script src="math.js"></script>
<script src="auth.js"></script>
<script src="cart.js"></script>
<script src="main.js"></script>
```

Everything loads.
Seems fine...
Until...

## The Problems in classic script approach:
All scripts execute in the **global scope**. This means:
- **Global Scope Pollution**: Any variable or function you declare in any JS file is added to the global object (`window` in browsers).
- **Naming Collisions**: Different scripts might use the same variable names. The last script loaded wins, overwriting previous one. This leads to unpredictable behavior and bugs that are hard to track down in large projects. like
 ```javascript
// let say auth.js need the add function

// There are two ways:

// 1. use the math.js add function
add(1, 2); // the problem is: where did add() come from? No idea. You have to search every JavaScript file.

// 2. Creating new add function
function add(a, b) { return a + b; } // the problem is: you are re-declaring a function that already exists. and if there is another file that uses the same function name, it will be overwritten. you never know which one will be used. This can lead to unpredictable behavior and bugs that are hard to track down in large projects.
```
- **Load Order Matters**: You must load files in the correct order. If you load `cart.js` before `math.js`, `cart.js` will not have access to the `add()` function, and your application will break. This can be a nightmare to manage in large projects with many files.
- and lots if others problems as well

## The Solution: Modules
Modules say, Every file is private by default instead of everything being globally accessible.
Instead of:
Globallly Everything accessible
We now have:
math.js with Private add() and subtract()
cart.js with Private checkout()
main.js with Private checkout()
In short Files (Variables, Functions, Classes, etc) are private by default instead of everything being globally accessible.

### How to access things from other files
We use **Export** and **Import** keywords.
This creates a clear contract:
math.js
   │
   │ exports
   ▼
main.js
   │
   │ imports
   ▼
Uses add()

#### Two ways to export and import:
1. **Named exports**: Multiple exports per file.
2. **Default exports**: One export per file.
```javascript
// Named Exports
export function add(a, b) { return a + b; }
export function subtract(a, b) { return a - b; }

// Default Exports
export default function add(a, b) { return a + b; }
```
```javascript
// Named Imports
import { add, subtract } from './math.js';

// Default Imports
import add from './math.js';
```
##### When to use each type
###### Use Named Exports when:
- You have multiple functions, variables, or classes to export from a single file
- You want to be explicit about what you are exporting
- You want to allow importing specific items without importing the entire file
###### Use Default Exports when:
- You have a single main export from a file
- You want to provide a default import option
- You want to allow importing with any name