# **Node.js Internals**

## 📑 Table of Contents

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