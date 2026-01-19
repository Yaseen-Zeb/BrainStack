Node.js Internals – Deep Dive
Table of Contents

Main Thread & Call Stack

Async Tasks & Event Loop

libuv & Thread Pool

OS Kernel Interaction

Event Registration & Callback Execution

Example: File Read / Network Request

Timeline Visualization

1️⃣ Main Thread & Call Stack

Main Thread: single JS thread where all code executes.

Call Stack: executes synchronous tasks line by line.

Event Loop runs inside the main thread, constantly checking for completed async tasks and pushing callbacks into the stack.

Key: Only one JS instruction executes at a time. Async work doesn’t block the main thread.

2️⃣ Async Tasks & Event Loop

When your JS code calls an async function:

fs.readFile("file.txt", "utf8", callback);


Step 1: Main thread delegates the operation outside the JS thread.

File reads → thread pool (libuv)

Network → OS kernel (non-blocking)

Step 2: Callback is registered with the event loop as a pending event.

Step 3: Event loop constantly polls libuv / OS for completion events.

Step 4: When async task completes, the callback is queued → executed on main thread when call stack is free.

3️⃣ libuv & Thread Pool

libuv = C library that manages async I/O in Node.

Thread Pool (default 4 threads, configurable via UV_THREADPOOL_SIZE) handles tasks OS cannot handle asynchronously, e.g.,:

File system (fs.readFile, fs.writeFile)

Crypto (crypto.pbkdf2, hashing)

Compression (zlib)

Some DNS lookups (dns.lookup)

Event Loop lives inside libuv, polling for completed async operations and dispatching callbacks.

4️⃣ OS Kernel Interaction

Modern OS provide non-blocking APIs for network I/O (TCP, HTTP, UDP, sockets).

Node delegates network tasks to OS kernel instead of the thread pool.

OS signals completion back to libuv → event loop → callback executes.

So Node doesn’t block waiting for the network. CPU remains free.

5️⃣ Event Registration & Callback Execution

JS calls async function → callback is registered.

Async operation runs in thread pool / OS kernel / hardware.

When done, an event is triggered in libuv.

Event loop queues the callback → main thread executes it on the call stack.

Each async task has its own event and callback reference, so Node knows which callback corresponds to which task.

6️⃣ Example: Two File Reads
fs.readFile("file1.txt", callback1);
fs.readFile("file2.txt", callback2);


Step-by-step:

Step	Action
1	Main thread registers file1 & file2 with libuv thread pool.
2	Thread pool starts reading files in background.
3	Callbacks stored in event loop queue, waiting for completion events.
4	File2 finishes first → event loop queues callback2.
5	Main thread executes callback2.
6	File1 finishes → event loop queues callback1 → executed later.

Order of execution depends on completion, not code order.

7️⃣ Timeline Visualization
Time →
JS Main Thread: | fs.readFile(file1) | fs.readFile(file2) | ...
libuv Thread Pool:   [reading file1]  [reading file2]  
Event Loop:      <-polling->  callback2 queued -> callback1 queued
CPU executes:                    callback2 -> callback1


This shows how async, libuv, thread pool, event loop, and main thread interact.

✅ Key Deep-Level Insights

Async work = done outside main thread (thread pool / OS / hardware)

Callbacks = run on main thread once event is triggered

Event loop = orchestrates callback execution without blocking CPU

libuv = underlying engine that provides thread pool, async APIs, and event loop

Order of completion = depends on async task speed, not JS code order