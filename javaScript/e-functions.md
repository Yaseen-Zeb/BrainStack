# **JavaScript Functions**

## Table of Contents

1. **Function Statement vs Expression**
2. **Anonymous Function**
3. **First Class Function**
4. **Regular Function vs Arrow Function**
5. **Named Function Expression**
6. **High Order Function**
7. **CallBack Function**
8. **IIFE (Immediately Invoked Function Expression)**
9. **Pure Function**
10. **Impure Function**
11. **Generator Function**





# Function Statement vs Expression
## Function Statement
Those function which are not stored in a variable, in short we can say that these are standalone function.
```javascript
function a() { // function statement
    console.log("a");
}
a();
```

## Function Expression
Function expression are those which are stored in a variable.
```javascript
var b = function () { // function expression
    console.log("b");
};
b();
```

## Diffrence between Function Statement and Function Expression
### 1. Function Hoisting
- Function statement is hoisted but function expression is not hoisted
### Example:
```javascript
a(); // function statement is hoisted so it will run
function a() { console.log("a"); }
b(); // function expression is not hoisted so it will give TypeError: b is not a function
var b = function () { console.log("b"); };
```
### 2. Syntax
- In function expression function is assigned to a variable
- Function statement = function a() {console.log("a");}





# Anonymous Function
Those functions which do not have a name are called anonymous functions.
```javascript
function () {
    console.log("hello");
}   // anonymous function
// runnimg this will throw syntax error so where we can use anonymous functions?
// anonymous functions are used in function expressions, call back functions, immediately invoked function and as value of variables.

// as call back functions
function funA(cb) {
  cb();
}
funA(function () {
  console.log("hello");
});

// as IIFE
(function () {
  console.log("hello");
})();

// as function expression / as value of variable
var funB = function () {
  console.log("hello");
};
funB();

// and many more places 
```





# First Class Function
It is a programming concept in which we can treat a function as other value (string, number, boolean, array, object, undefined, etc.)
## Example:
```javascript
// as return value of function
function funA() {
  return function () { // anonymous function
    console.log("hello");
  };
}
funA()();

// as argument of function (callback function)
function funB(fn) {
    fn();
}
funB(function () {
    console.log("hello");
});

// as value of variable
var funC = function () {
    console.log("hello");
};
funC();

// and many more places
```