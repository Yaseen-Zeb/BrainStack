# **Introduction to Node.js**

## 📑 Table of Contents

1. **History & Intro**
2. **Where to Use Node.js**
3. **Where Not to Use Node.js**





# History & Intro
**Before 2009**, JavaScript could only run inside browsers. Browsers provided the JavaScript engine (like Google’s V8) along with built-in APIs (not part of the JavaScript language itself) such as:
- DOM & UI: document.getElementById, querySelector, addEventListener, window.alert
- Networking: fetch, XMLHttpRequest, WebSocket
- Timers: setTimeout, setInterval, requestAnimationFrame
- Storage: localStorage, sessionStorage, IndexedDB, cookies
- Other utilities: console.log, navigator, location, history, performance

**In 2009**, Ryan Dahl created Node.js to run JavaScript outside the browser. He embedded Google’s V8 engine into a C++ program and added server-side APIs (not part of the JavaScript language itself) such as:
- File system & OS: fs, path, os
- Networking: http, https, net, dns
- Utilities & events: events, util, stream, buffer
- Timers: setTimeout, setInterval, setImmediate, process.nextTick
- Process & system: process, child_process, cluster
- Crypto & compression: crypto, zlib

Node.js is therefore a JavaScript runtime built on the V8 engine, providing APIs different from browser APIs. This allows JavaScript to be used for backend development—building fast, scalable network applications and servers.





# Where to Use Node.js
- Building APIs with databases (create, read, update, delete records).
- Real-time apps such as chat platforms.
- Streaming services like YouTube or Netflix.
- Server-side rendered web apps, where pages are generated on the server.





# Where Not to Use Node.js
Avoid using Node.js for CPU-intensive tasks such as:
- Heavy image or video processing.
- Large file compression or complex mathematical calculations.
These tasks block the single thread and are better suited to technologies like Python, Java, or PHP.
