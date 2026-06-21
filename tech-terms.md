
# **Technical Terms**

## Table of Contents

1. **Simultaneous or Parallel**
2. **Concurrent**
3. **Sequential**
4. **Synchronous**





# Simultaneous or Parallel
- Means multiple things happening at the exact same time.
## Example:
- Multiple tasks execute at the exact same time on different CPU cores.
- Core 1: A A A
- Core 2: B B B





# Concurrent
- Means multiple tasks make progress during the same time period.
- They may or may not run at the exact same time.
- A single CPU can achieve concurrency by switching between tasks.
## Example:
- Single CPU switching tasks A and B.
- Core 1: A B A B A B





# Sequential
- Means tasks start in a specific order.
- Focuses on ordering, not whether execution is blocking or non-blocking.
- Sequential tasks may be synchronous or asynchronous.
## Example:
- Task A,B,C started one after another and completed one after another in same order or random order.





# Synchronous
- Means a task must finish before the next task can proceed.
- Focuses on waiting/blocking.
- Synchronous execution is always sequential.
## Example:
- A finishes → B starts
- B finishes → C starts

