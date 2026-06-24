# **Regular Expressions**

## Table of Contents

1. **Regex Intro**
2. **Exact match**
3. **Character Classes or Sets**
4. **Quantifiers**
5. **Anchors**
6. **Flags or Modifiers**
7. **Groups, Capturing Groups, and Backreferences**
8. **Alternation (OR Operator)**





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

## With Character Classes
```javascript
const regex = /[a-z]{3}/; // matches any 3 lowercase letters
console.log(regex.test("abc")); // true
console.log(regex.test("123")); // false
console.log(regex.test("Abc")); // false
```





# Anchors
Anchors match positions within the string, not actual characters. They are used to specify where a pattern matches at a specific location in the string.
## Common Anchors:
| Anchor | Meaning                    |
| ------ | -------------------------- |
| `^`    | Start of the string        |
| `$`    | End of the string          |
| `\b`   | Word boundary              |
| `\B`   | Not a word boundary        |

## ^ (Start of the String)
Matches the beginning of the string.
### Examples:
```javascript
const regex = /^hello/;
console.log(regex.test("hello world")); // true
console.log(regex.test("world hello")); // false
```
## $ (End of the String)
Matches the end of the string.
### Examples:
```javascript
const regex = /world$/;
console.log(regex.test("hello world")); // true
console.log(regex.test("world hello")); // false
```
## Exact Match
```javascript
const regex1 = /^cat$/;
console.log(regex1.test("cat")); // true
console.log(regex1.test("the cat")); // false
console.log(regex1.test("cat sat")); // false
const regex2 = /^\d{4}$/;
console.log(regex2.test("1234")); // true
console.log(regex2.test("12345")); // false
console.log(regex2.test("123a")); // false
const regex3 = /^[A-Za-z]{3,10}$/;
console.log(regex3.test("abc")); // true
console.log(regex3.test("abc123")); // false
console.log(regex3.test("abc123def")); // false
```
## \b (Word Boundary)
Matches the position between a word character (\w) and a non-word character (\W).
## Position vs Boundary
### Position
- A position is any location between characters in a string.
- A position has no character. It’s just a point or location.
- "cat" has 4 positions: |c|a|t|
### Boundary
- A boundary in regex means a special kind of position with a rule.
- i.e. word boundary \b, A position is a word boundary only if:
    - (word character) | (non-word character)
    - OR
    - (non-word character) | (word character)
- So boundary = qualified position.
### Examples:
```javascript
const regex1 = /\bcat\b/;
// const regex1 = /cat/;
console.log(regex1.test("the cat sat")); // true
console.log(regex1.test("thetomcat sat")); // false (no boundary before 'cat')
console.log(regex1.test("cat is here")); // true

// /cat/ vs /\bcat\b/
// /cat/ matches 'cat' anywhere in the string
// /\bcat\b/ matches 'cat' only as a whole word

// /\bcat/ checks for boundary before 'cat'
// /cat\b/ checks for boundary after 'cat'
// /\bcat\b/ checks for boundary before and after 'cat'
```
## \B (Not a Word Boundary)
Matches the position where there is no word boundary.
### Examples:
```javascript
const regex1 = /\Bcat\B/;
console.log(regex1.test("the cat sat")); // false (non word boundary before and after 'cat')
console.log(regex1.test("thetomcat sat")); // false (word boundary before 'cat')
console.log(regex1.test("concatenate")); // true (non word boundary before and after 'cat')
const regex2 = /\B\d\B/;
console.log(regex2.test("123")); // false (non word boundary before and after '1')
console.log(regex2.test("abc123def")); // true (non word boundary before and after '1')

// /\Bcat/ checks the non word boundry only before 'cat'
// cat\B/ checks the non word boundry only after 'cat'
// \Bcat\B/ checks the non word boundry before and after 'cat'
```





# Flags
In regex, flags (also called modifiers) change how the entire pattern behaves.
## Common Flags:
| Flag | Meaning                    |
| ---- | -------------------------- |
| `i`    | Case-insensitive           |
| `g`    | Global (find all matches)  |
| `m`    | Multiline                  |
## Examples
```javascript
const regex = /cat/i;
console.log(regex.test("cat")); // true
console.log(regex.test("Cat")); // true
console.log(regex.test("CAT")); // true
const regex2 = /cat/g;
console.log(regex2.test("cat cat cat")); // true
console.log(regex2.test("cat")); // true
const regex3 = /^cat$/gm;
console.log(regex3.test("cat\ncat")); // true (m flag treats each line as a separate string)
console.log(regex3.test("cat")); // false (g flag makes it global which means it will not match the whole string, m flag makes it multiline which means it will match the whole string)
console.log(regex3.test("catcat")); // false
// m turns regex into line-by-line matching engine instead of whole-string matching.
```




# Groups, Capturing Groups, and Backreferences
## Groups
Parentheses () are used to group parts of a regex together.
Groups allow you to apply quantifiers to multiple characters at once.
### Examples
```javascript
const regex = /(cat)+/;
console.log(regex.test("cat")); // true
console.log(regex.test("catcat")); // true
console.log(regex.test("catcatcat")); // true
```

## Capturing Groups
A capturing group stores the matched text so it can be reused later.
### Examples:
```javascript
// Single Capturing Group
const regex = /(\d+)/;
const str = "123";
const match = str.match(regex);
if (match) {
    console.log(match[0]); // "123" (the entire match)
    console.log(match[1]); // "123" (the first group)
}

// Multiple Capturing Groups
const regex2 = /(\d+):(\d+):(\d+)(cat)/;
const str2 = "23:59:59cat";
const match2 = str2.match(regex2);
if (match2) {
    console.log(match[0]); // "23:59:59" (the entire match)
    console.log(match[1]); // "23" (the first group - hours)
    console.log(match[2]); // "59" (the second group - minutes)
    console.log(match[3]); // "59" (the third group - seconds)
    console.log(match[4]); // "cat" (the fourth group - cat)
}

// Non-Capturing Groups
// Sometimes you need grouping but don't want to store the match. Use (?:...) 
const regex3 = /(?:\d+):(?:\d+):(?:\d+)/;
const str3 = "23:59:59";
const match3 = str3.match(regex3);
if (match3) {
    console.log(match3[0]); // "23:59:59" (the entire match)
}

// Named Capturing Groups
// Instead of numbers, groups can have names.
// Use (?<name>...) to create a named capturing group.
const regex4 = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const str4 = "2023-12-31";
const match4 = str4.match(regex4);
if (match4) {
    console.log(match4.groups.year);  // "2023"
    console.log(match4.groups.month); // "12"
    console.log(match.groups.day);   // "31"
}
```

## Backreferences
Backreferences allow you to match the same text that was captured by a previous group.
Use \n to refer to the nth capturing group.
### Examples:
```javascript
const regex = /(\w+)\s+\1/;
const str = "hello hello";
const match = str.match(regex);
if (match) {
    console.log(match[0]); // "hello hello"
    console.log(match[1]); // "hello" (the first group)
}

// const regex2 = /(cat)(dog)/;
const regex2 = /(cat)(dog)\1\2/;
const str2 = "catdogcatdog";
const match2 = str2.match(regex2);
if (match2) {
    console.log(match2[0]); // "catdogcatdog"
    console.log(match2[1]); // "cat" (the first group)
    console.log(match2[2]); // "dog" (the second group)
}
```





# Alternation (OR Operator)
The alternation operator `|` allows you to match one of several possible patterns.
## Examples
```javascript
// Match 'cat' or 'dog'
const regex1 = /cat|dog/;
console.log(regex1.test("The cat sat on the mat")); // true
console.log(regex1.test("The dog barked")); // true
console.log(regex1.test("The bird flew")); // false

// Match 'cat' or 'dog' or 'fish'
const regex2 = /cat|dog|fish/;
console.log(regex2.test("I like cats")); // true
console.log(regex2.test("I like dogs")); // true
console.log(regex2.test("I like fish")); // true
console.log(regex2.test("I like birds")); // false
```

## Examples with Grouping
```javascript
// Match 'apple' or 'orange'
const regex3 = /gr(a|e)y/;
console.log(regex3.test("grey")); // true
console.log(regex3.test("gray")); // true
console.log(regex3.test("grae")); // false
const regex4 = /(Mr|Mrs|Ms)\.?\s\w+/;
console.log(regex4.test("Mr. Smith")); // true
console.log(regex4.test("Mrs Smith")); // true
console.log(regex4.test("Ms. Smith")); // true
console.log(regex4.test("Ms Smith")); // true
```


