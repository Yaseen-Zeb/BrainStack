# **npm Intro**

## Table of Contents

1. **What is npm?**
2. **Why do we need npm?**
3. **What is a package?**
4. **What is package.json?**
5. **What is node_modules?**





# What is npm?
npm = Node Package Manager
It is:
- a package manager for JavaScript
- comes automatically with Node.js
- used to install, update, remove, and manage packages





# Why do we need npm?
## Without npm:
- You would manually download JS libraries
- Copy files into your project
- Manage versions yourself
## With npm:
- One command installs libraries
- Version control is automatic
- Dependency management is easy





# What is a package?
## A package is:
- a reusable piece of code
- written by someone else (or you)
- published on npm registry
## Examples:
- express → web server
- mongoose → MongoDB
- react → UI library
- nodemon → auto restart server





# What is package.json?
This is the heart of your project
`{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.18.2"
  }
}`
It tells:
- project name & version
- which packages your app needs
- scripts to run your app





# What is node_modules?
When you run:
`npm install express`
npm:
- downloads Express
- puts it inside node_modules/
- also installs Express’s dependencies