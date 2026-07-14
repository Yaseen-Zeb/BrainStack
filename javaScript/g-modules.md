# **Modules**

## Table of Contents

1. **Why modules exist (the problem they solve)**
2. **How Module and Classic Script work?**
3. **How Modules Load and Execute**





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
2. **Default exports**: A module can have at most one default export, but it can also have named exports alongside it.
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





## What Happens When a File Becomes a Module?
When a JavaScript file is treated as a module, it gains a few special properties:
1. **Private Scope by Default**: Variables, functions, classes, and imports declared in a module are private to that module unless explicitly exported.
2. **No Automatic Global Variables**: Unlike regular scripts, modules do not automatically create global variables.
3. **Module Execution**: When a module is loaded, its code is executed only once, and the results (like exported values) are cached for future imports.

## Example of a Module
Here's how a file works as a module:
```javascript
// math.js - This file is a module
const API_KEY = "123456"; // Private variable - not accessible outside

export function add(a, b) { 
    // Can access API_KEY because it's in the same module
    console.log(`Using API key: ${API_KEY}`); 
    return a + b;
}
```
In this example, `API_KEY` is private to `math.js`. Only `add()` is exported and can be used by other modules.





# How Module and Classic Script work?
## Classic Script
When a classic script is loaded, the browser creates a Global Execution Context.
Global Execution Context
        │
        ▼
Global Environment Record
The Global Environment Record is special because it is divided into two parts.
Global Environment Record
│
├── Object Environment Record
│      │
│      └── window (Global Object)
│
└── Declarative Environment Record
### Object Environment Record
This record is connected to the browser's global object (window).
The browser exposes its global APIs here, such as:
`window`
`document`
`console`
`fetch`
`setTimeout`
`location`
`history`
and many other Browser Object Model (BOM) and Document Object Model (DOM) APIs.
In classic scripts, **global var declarations and function declarations also become properties of the global object.**
Example:
```javascript
var user = "Ali";
function greet() {}
// These are accessible as:
window.user;
window.greet;
```
### Declarative Environment Record
This stores bindings that are not properties of the global object, including:
`let`
`const`
`class`
Example:
```javascript
let age = 20;
const city = "Peshawar";
// These exist in the Global Environment Record but not on `window`.
window.age;   // undefined
window.city;  // undefined
```
### Scope Chain in Classic Script
Scope chaining in classic scripts works by traversing up the lexical environment chain until the global scope is reached.
Function Scope -> Global Environment Record

## Module
When we run js, it similarly creates an execution context.
Global Execution Context
        │
        ▼
Global Environment Record
The Global Environment Record is special because it is divided into two parts.
Global Environment Record
│
├── Object Environment Record
│      │
│      └── window (Global Object)
│
└── Declarative Environment Record

After that When the browser encounters:
```html
<script type="module">
```
it creates a Module Environment Record for that module.
### Module Environment Record
Unlike the Global Environment Record, a Module Environment Record is not divided into an Object Environment Record and a Declarative Environment Record.
It is a single declarative environment that stores the module's bindings.
It contains:
`var`
`let`
`const`
`class`
`function declarations`
`imported bindings`
`exported bindings`
For example:
```javascript
var count = 1;
const name = "Ali";
function greet() {}
```
All of these belong to the module itself.
None become properties of window.
window.count;   // undefined
window.greet;   // undefined
This is one of the biggest differences between classic scripts and ES Modules.
### Accessing Browser APIs
Modules can still access browser APIs.
For example:
console.log(document);
The lookup happens like this:
Function Environment
        ↓
Module Environment Record
        ↓
Global Environment Record
The Module Environment does not contain document, so JavaScript continues searching until it reaches the Global Environment Record, where the browser provides the binding.
This is why document, console, fetch, and setTimeout still work inside modules.
**Note:** if there is only "type="module"" declared on a script file, then our defined variables, functions, classes, etc. will not be added to the window object. It will be added only if we explicitly add them through classical script type.
### Additional Features of Module Environment Records
Besides providing a separate scope, modules introduce several capabilities that classic scripts do not have.
**Export** A module makes specific bindings (variables, functions, classes, etc.) available for use by other modules.
**Import** Other modules can import and use those bindings.
**Live Bindings** This means the imported binding is a live connection, not a copy. If the original value changes, the imported value changes too.
```javascript
// first.js
export let count = 10;
export function increment() {
    count++;
}
// second.js
import { increment } from './first.js'; 
import { logCount } from './main.js'; 
increment();
increment();
increment();
logCount(); // 13
// main.js
import { count } from './first.js';
export function logCount() {
    console.log(count);
}
```
**Module Cache** When the browser loads the same module more than once (like multiple files importing the same module), it doesn't re-run the code. It reuses the already cached version. This makes loading much faster.
```javascript
// first.js
export function load() {
    console.log("Module loaded");
}
// second.js
import { load } from './first.js'; 
load();
load();
load();
// thid.js
import { load } from './first.js'; 
load(); // it uses the cached version
```
**Strict Mode** All code inside a module automatically runs in strict mode. This enforces safer coding practices and eliminates confusing language features.
**Top-Level this** The value of this at the top level of a module is undefined (unlike classic scripts where it's the window object). This prevents accidental global variable creation.





# How Module Scripts Load & Execute?
This process has few stages whicha are as under:
## Discover Entry Modules and Load Them and Build Module Dependency Graph
```html
<script type="module" src="./server.js"></script>
<script type="module" src="./auth.js"></script>
<script type="module" src="./user.js"></script>
```
At this point, no JavaScript has executed. The browser identifies the entry modules (root modules), downloads them, recursively follows their import statements, downloads any missing modules, and builds the complete module dependency graph.
For example:
```javascript
// server.js
import { auth } from './auth.js';
// auth.js
import { user } from './user.js';
export const auth = true;
// user.js
export const user = true;
```
In this case, the module graph would look like this:
server.js
        ↓
    auth.js
         ↓
     user.js
This means server.js depends on auth.js, which depends on user.js.
After building the module graph, the browser can execute the modules in the correct order.

## Execute Modules
Once the module dependency graph has been built and all modules have been linked, the browser starts executing the modules.
Execution begins from the entry module(s). If a module depends on another module that has not yet been executed, the browser pauses the current module, executes the dependency first, and then resumes execution of the paused module.
Each module is executed only once. If another module imports a module that has already started or finished executing, the browser reuses the existing Module Record instead of executing the module again.
Then execution unwinds back up the chain.
**Now** here the most important concept to understand is that every module has flags (evaluated/not evaluated and known/unknown) and many more but these two are importat in below explanation.
Once the browser loads a module, it creates a Module Record and caches it. After the module successfully executes, its state becomes 'evaluated'. Future imports reuse the same Module Record; the module is never executed again.

### Scenario 1: Multiple files import the same module
      app.js
      /   \
     /     \
 user.js  admin.js
      \    /
       \  /
      utils.js
#### What happens?
- Browser loads all modules.
- Creates one Module Record for utils.js.
- Executes utils.js once.
- Both user.js and admin.js receive the same exported bindings.

### Scenario 2: Two files import each other
This is also know as **cyclic dependency**
For Example:
main.js
   ▲
   │
   ▼
math.js
#### What happens?
- Browser loads both files.
- Creates Module Records for both.
- Starts executing main.js.
- main.js imports math.js, so it pauses.
- Starts executing math.js.
- math.js imports main.js.
- The browser checks:
    - Is main.js known?
        ✓ Yes.
    - Is main.js already being evaluated?
        ✓ Yes.
- Therefore:
    - ❌ Do NOT execute main.js again.
    - Reuse the existing Module Record.
    - Continue executing math.js.