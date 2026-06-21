# **Regular Expressions**

## Table of Contents

1. **Regex Intro**
2. **Exact match**
3. **Character Classes**
4. **Quantifiers**




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





# Quantifiers
Quantifiers specify how many times a character, character class, or group can occur in a regex.
## Common Quantifiers:
| Quantifier | Meaning                    |
| ---------- | -------------------------- |
| `*`        | Zero or more               |
| `+`        | One or more                |
| `?`        | Zero or one (optional)     |
| `{n}`      | Exactly n times            |
| `{n,}`     | n or more times            |
| `{n,m}`    | Between n and m times (inclusive) |

## * (Zero or More)
Matches the preceding element zero or more times.
### Examples
```javascript
const regex = /a*/;
console.log(regex.test("aaa")); // true
console.log(regex.test("a")); // true
console.log(regex.test("")); // true
```
## + (One or More)
Matches the preceding element one or more times.
### Examples
```javascript
const regex = /a+/;
console.log(regex.test("aaa")); // true
console.log(regex.test("a")); // true
console.log(regex.test("")); // false
```

## ? (Zero or One)
Matches the preceding element zero or one time (making it optional).
### Examples
```javascript
const regex = /colou?r/;
console.log(regex.test("color")); // true
console.log(regex.test("colour")); // true
console.log(regex.test("clor")); // false
```

## {n} (Exactly n Times)
Matches the preceding element exactly *n* times.
### Examples
```javascript
const regex1 = /a{3}/; // matches 'aaa' exactly 3 times
console.log(regex1.test("aaa")); // true
console.log(regex1.test("aa")); // false
console.log(regex1.test("aaaa")); // true - finds 'aaa' within 'aaaa'

const regex2 = /\d{3}/; // matches any 3-digit number
console.log(regex2.test("123")); // true
console.log(regex2.test("12")); // false
console.log(regex2.test("1234")); // true - finds '123' within '1234'
```

## {n,} (At Least n Times)
Matches the preceding element *n* or more times.
### Examples
```javascript
const regex1 = /a{3,}/; // matches 'aaa' or more
console.log(regex1.test("aaa")); // true
console.log(regex1.test("aaaa")); // true
console.log(regex1.test("aa")); // false

const regex2 = /\d{3,}/; // matches any 3-digit number or more
console.log(regex2.test("123")); // true
console.log(regex2.test("1234")); // true
console.log(regex2.test("12")); // false
```

## {n,m} (Between n and m Times)
Matches the preceding element between *n* and *m* times (inclusive).
### Examples
```javascript
const regex1 = /a{2,4}/; // matches 'aa', 'aaa', or 'aaaa'
console.log(regex1.test("aa")); // true
console.log(regex1.test("aaa")); // true
console.log(regex1.test("aaaa")); // true
console.log(regex1.test("a")); // false
console.log(regex1.test("aaaaa")); // true - finds 'aaaa' within 'aaaaa'

const regex2 = /\d{2,4}/; // matches any 2-4 digit number
console.log(regex2.test("12")); // true
console.log(regex2.test("123")); // true
console.log(regex2.test("1234")); // true
console.log(regex2.test("12345")); // true - finds '1234' within '12345'
console.log(regex2.test("1")); // false
```


