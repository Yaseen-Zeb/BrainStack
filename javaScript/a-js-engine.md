# **JavaScript Engine**

## Table of Contents

1. **What is the JavaScript Engine?**
2. **Parsing**
3. **Interpreter and JIT Compilation**
4. **Execution**





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





# Interpreter and JIT Compilation
Modern JavaScript engines use a hybrid approach called Just-In-Time (JIT) compilation, which combines both an interpreter and a compiler to execute code efficiently.
- Historically, JavaScript was a purely interpreted language where code was read and executed line-by-line. To eliminate the slowness of pure interpretation, modern JavaScript engines merge the fast startup times of an interpreter with the high-speed execution of a compiler
## Interpreter
As we know, an interpreter reads and executes code one line at a time without compiling the entire program into machine code.
Now, in js Engine the **Interpreter** takes the **AST** and translates it into a low-level intermediate format called **bytecode**, which it begins executing immediately for a fast startup.
## JIT Compiler
While the interpreter gets the code running quickly, it is not very efficient for long-running, complex applications. This is where the JIT (Just-In-Time) compiler comes in. 
To do this efficiently, JavaScript engines use an **optimization profiler**, which monitors the code as it runs. If it detects a section of code a **"hotspot"** being executed many times, it sends that specific section to the JIT compiler for optimization.
The **JIT compiler** replaces the interpreter’s generic bytecode with highly optimized machine code that can run much faster. This optimized code is then cached, allowing subsequent executions of the same code to run at near-native speed.