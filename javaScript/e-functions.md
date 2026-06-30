# **JavaScript Functions**

## Table of Contents

1. **Function Statement vs Expression**
2. **Regular Function vs Arrow Function**
3. **Anonymous Function**
4. **Named Function Expression**
5. **First Class Function**
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



