# **Regular Expressions**

## Table of Contents

1. **Regex Intro**
2. **Exact match**
3. **Character Classes**




# Regex Intro
A Regular Expression (often called RegEx or RegExp) is a sequence of characters that forms a specific search pattern. It is a powerful tool used in programming and text editors for finding, validating, extracting, and replacing text within strings.





# Exact match
Exact match means the entire string must match the pattern, not just a part of it.

## Syntax
```javascript
const regex = /^pattern$/;
```
- `^` → start of the string
- `$` → end of the string

## Example
```javascript
const regex = /^hello$/;
console.log(regex.test("hello")); // true
console.log(regex.test("hello world")); // false
console.log(regex.test("hi")); // false
```





# Character Classes
A character class allows you to match any one of several characters. It is defined using square brackets `[]`.

## Syntax
```javascript
const regex = /[abc]/; // Matches 'a' or 'b' or 'c'
```

## Example
```javascript
const regex = /[aeiou]/;
console.log(regex.test("hello")); // true
console.log(regex.test("cat")); // true
console.log(regex.test("rhythm")); // false
```