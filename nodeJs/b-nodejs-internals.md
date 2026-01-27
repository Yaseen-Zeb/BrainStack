# **Node.js Internals**

## Table of Contents

1. **Node.js Architecture** (**Main Thread**, **OS Kernel**, **Thread Pool**)





# Node.js Architecture

## Main Thread
The main thread in Node.js is where all JavaScript code executes (via the call stack) and where the event loop runs.
**Synchronous tasks** run directly on the **call stack**, which executes them line by line.
**Asynchronous tasks** are delegated by the main thread to the **OS kernel or the libuv thread pool**, preventing blocking of execution.
The **event loop** manages asynchronous callbacks by pulling them from queues and pushing them into the call stack once it is free.

## OS Kernel
The OS kernel is the operating system’s core that directly manages hardware resources (CPU, memory, disk, network).
Asynchronous tasks that can be handled directly by the OS kernel are assign to OS kernel by the Main Thread.
### What Uses the OS Kernel?
Network I/O 
• HTTP
• TCP
• UDP
• sockets
is usually handled by the OS kernel, since most operating systems natively provide efficient non-blocking APIs for these.
### libuv is the bridge
It connects Node.js to the OS kernel.
What libuv does:
✔️ Registers socket events with the OS
✔️ Waits for OS to notify when data is ready
✔️ Pushes the callback to the Node event loop

## Thread Pool
The Thread Pool is a group of background worker threads managed by **libuv (the C library under Node.js)**.
By default, it has **4 threads** (can be increased via UV_THREADPOOL_SIZE).
Asynchronous tasks that cannot be handled directly by the OS kernel are assign to Thread Pool by the Main Thread.
### What Uses the Thread Pool?
Not everything async in Node.js uses the thread pool.
The thread pool is used for tasks that cannot be handled directly by the OS kernel:
• File system operations (fs.readFile, fs.writeFile)
• Crypto operations (crypto.pbkdf2, crypto.scrypt, hashing, encryption)
• Compression (zlib)
• DNS lookups (dns.lookup).

## Event loop gets callbacks only from libuv
The event loop does not directly talk to the OS or the thread pool.
- Main thread (JS) talks to libuv;
- libuv talks to the OS or thread pool;
- The OS or thread pool notifies libuv;
- libuv pushes the callback to the event loop; 
- Then the event loop runs it on the main thread.


## Note:-
When an asynchronous task is assigned (like file read/write, timers, or network calls), it has two parts:
• The asynchronous operation itself → handled outside the main thread (by the OS(kernel), the libuv thread pool).
• The callback (synchronous JS code) → once the operation finishes, the callback is placed into the event loop queue, and then executed on the main thread’s call stack.
**So**
Async work (waiting, reading, writing, networking) → done in the background by the assignee (OS, the libuv thread pool, or kernel).
Sync work (your callback code logic) → always runs on the main thread’s call stack.


------------------------------- Pending Understanings ------------------------
# Pending Understanings
Event loop runs (4)phase callbacks → then nextTick → then microtasks → repeat.
Browser vs Node event loop difference
Real interview questions