# **Node.js Internals**

## 📑 Table of Contents

1. **Node.js Architecture** (**Main Thread**, **Thread Pool**, **OS Kernel**)





# Node.js Architecture

## Main Thread (Call Stack & Event Loop )
The main thread in Node.js is where all JavaScript code executes (via the call stack) and where the event loop runs.
The **call stack** executes synchronous JavaScript code.
The **event loop** manages the execution of asynchronous callbacks by pulling them from queues into the call stack once the stack is free.