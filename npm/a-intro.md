# **npm Intro**

## Table of Contents

1. **What is npm?**
2. **Why do we need npm?**
3. **What is a package?**
4. **What is package.json?**
5. **What is node_modules?**
6. **Regular Dependencies vs DevDependencies**
7. **Global vs Local Install**





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





# Dependencies vs DevDependencies
## Dependencies
Used in production
`npm install express`
Saved in:
`"dependencies":...`
## DevDependencies
Used only in development
`npm install nodemon --save-dev`
Saved in:
`"devDependencies":...`





# npm scripts
npm scripts are shortcuts defined in package.json to run commands in a controlled, cross-platform way.
Instead of typing long commands:
node --watch index.js --env=dev
You write:
`
"scripts": {
  "dev": "node index.js"
}
`
And run:
`npm run dev`

Inside package.json:
`
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
`
## Why npm scripts exist
### Abstraction
- Hide complex commands
- One simple name → many operations
### Consistency
- Everyone on the team runs the same command
- No “it works on my machine” problem
### Environment control
- npm scripts automatically:
- add node_modules/.bin to PATH
- work same on Windows, Linux, macOS
## Special scripts (auto-run)
Some scripts run automatically:
| Script        | When it runs   |
| ------------- | -------------- |
| `start`       | `npm start`    |
| `prestart`    | before `start` |
| `poststart`   | after `start`  |
| `preinstall`  | before install |
| `postinstall` | after install  |





# Global vs Local Install
## Local Install (default)
`npm install express`
Installed in:
`node_modules/express`
- Package is scoped to one project
- Version is controlled per project
- Prevents conflicts between apps
Best for:
libraries (express, mongoose)
app dependencies
## Global Install
`npm install -g nodemon`
Installed in:
system npm directory
accessible from any folder
Best for:
CLI tools (nodemon, pm2, vite, npm)
## Why not install everything globally?
❌ Problems:
Version conflicts
Hard to reproduce environment
Breaks CI/CD
Team members may have different versions
📌 Modern best practice:
Install locally and use npm scripts.