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
## Basic Syntax
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

## Character Ranges
You can define a range of characters to match using a hyphen `-`.
## Syntax:
```javascript
const regex = /[a-z]/; // Matches any lowercase letter
const regex = /[0-9]/; // Matches any digit
const regex = /[a-zA-Z]/; // Matches any letter (case-insensitive)
const regex = /[a-zA-Z0-9]/; // Matches any alphanumeric character
```
## Example
```javascript
const regex = /[0-9]/;
console.log(regex.test("hello")); // false
console.log(regex.test("cat")); // false
console.log(regex.test("123")); // true
```

## Negation
Negation allows you to match any character that is *not* in the specified set. It is defined using the caret `^` inside the square brackets, and it must be the first character after the opening bracket.
## Syntax:
```javascript
const regex = /[^abc]/; // Matches any character that is NOT 'a', 'b', or 'c'
const regex = /[^0-9]/; // Matches any character that is NOT a digit
```
## Example:
```javascript
const regex = /[^0-9]/;
console.log(regex.test("hello")); // true
console.log(regex.test("cat")); // true
console.log(regex.test("123")); // false
```

## Shorthands for Character Classes
| Shorthand | Equivalent      | Meaning                 |
| --------- | --------------- | ----------------------- |
| `\d`      | `[0-9]`         | Digit                   |
| `\D`      | `[^0-9]`        | Not a digit             |
| `\w`      | `[A-Za-z0-9_]`  | Word character          |
| `\W`      | `[^A-Za-z0-9_]` | Not a word character    |
| `\s`      | whitespace      | Space, tab, newline     |
| `\S`      | non-whitespace  | Any non-space character |

## Examples
```javascript
const regex = /\d/; // matches any digit from 0-9
console.log(regex.test("hello")); // false
console.log(regex.test("cat")); // false
console.log(regex.test("123")); // true

const regex = /\D/; // matches any character that is NOT a digit
console.log(regex.test("hello")); // true
console.log(regex.test("cat")); // true
console.log(regex.test("123")); // false

const regex = /\w/; // matches any word character (letter, digit, or underscore)
console.log(regex.test("hello")); // true
console.log(regex.test("cat")); // true
console.log(regex.test("123")); // true
console.log(regex.test("_")); // true

const regex = /\W/; // matches any character that is NOT a word character
console.log(regex.test("hello")); // false
console.log(regex.test("cat")); // false
console.log(regex.test("123")); // false
console.log(regex.test("_")); // false

const regex = /\s/; // matches any whitespace character (space, tab, newline)
console.log(regex.test("hello")); // false
console.log(regex.test("123")); // false
console.log(regex.test("_")); // false
console.log(regex.test(" ")); // true

const regex = /\S/; // matches any non-whitespace character
console.log(regex.test("hello")); // true
console.log(regex.test("123")); // true
console.log(regex.test("_")); // true
console.log(regex.test(" ")); // false
```

