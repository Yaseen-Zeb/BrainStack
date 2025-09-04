# **Async & Event Loop**

## 📑 Table of Contents

1. **Web APIs**
2. **Microtasks vs Macrotasks**





# Web APIs
Web APIs are built into the browser, not JavaScript itself.
They let JS interact with the browser and external systems.
JS (single-threaded) uses these APIs to handle tasks asynchronously without blocking the main thread.
OR
These are features provided by the browser environment—not by the JS language itself. They do work “on the side” and notify JS when they’re done.

## Common Web APIs
Timers: setTimeout, setInterval
Network: fetch, XMLHttpRequest
DOM Events: clicks, keypress, scroll, etc.
Others: Geolocation, Notifications, Web Workers, IntersectionObserver, etc.

## Flow
You call a Web API → the browser starts the task → when it’s ready, it enqueues a callback to be run by the JS event loop.

Note: In Node.js there’s no “browser,” but a similar system exists (libuv). Concepts still map.








