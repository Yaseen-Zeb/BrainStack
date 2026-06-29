# **JavaScript Engine**

## Table of Contents

1. **What is the JavaScript Engine?**
2. **Parsing**





# What is a JavaScript Engine?
A JavaScript Engine is a specialized computer program that **parses**, **interprets**, and **executes** JavaScript code into machine-readable instructions.
## Common JavaScript Engines: 
- **Google V8** - Used in Chrome and Node.js
- **SpiderMonkey** - Used in Firefox
- **JavaScriptCore** - Used in Safari





# Parsing
Parsing in a JavaScript engine is the process of reading raw source code and converting it into a structured, internal format that the engine can understand and execute.
## The Two Core Stages of Parsing
The parsing process is broken into two successive phases:
## Lexical Analysis (Tokenizing)
Lexical Analysis (or Tokenizing) is the process of breaking down raw source code into a sequence of tokens.
Example: `var name = "John";`
Tokens: `var`, `name`, `=`, `"`, `John`, `"`, `;`
## Syntactic Analysis (Parsing)
The engine takes the list of flat tokens and turns them into a nested tree structure called an **Abstract Syntax Tree (AST)**. This phase validates JavaScript rules; if a structural mistake is found, it immediately stops and throws a `SyntaxError`.