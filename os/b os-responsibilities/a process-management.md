# **Process Management**

## 📑 Table of Contents

1. **What is a Program**
2. **What is Process Management**
3. **What is Buffer**
4. **System Call**




# What is a Program
A program itself is a passive entity: it is just a set of instructions stored in secondary memory (for example, a file on disk).
A single program can give rise to multiple processes.
For instance/example, a web browser program can have multiple tabs, and each tab may run as a separate process.





# What is a Proccess
A process itself is a active entity: The term process (Job) refers to program code that has been loaded into a computer's memory so that it can be executed by the central processing unit (CPU).
## Components of a Process:
**Code Section (Text):** The executable code of the program.
**Program Counter:** Keeps track of the instruction currently being executed.
**Stack:** Holds temporary data like function parameters and local variables.
**Data Section:** Stores global and static variables.
**Heap:** Memory for dynamically allocated data.





# What is Process Management
The OS manage several things listed below
- Process Life Cycle
- Process Scheduling
- Process Context Switching
- Inter-Process Communication (IPC)
- Deadlock Handling
- Concurrency & Synchronization
- Resource Allocation
- Process Protection & Security
is called Process Management.


## Process Life Cycle
A process transitions through several states during its lifecycle. These states are:
- New: The process is being created.
- Ready: The process is waiting to be assigned to the CPU.
- Running: The process is actively executing instructions.
- Waiting (Blocked): The process is waiting for an event (like I/O completion).
- Terminated: The process has finished execution.
### Example: Opening a program (like a browser)
**New State:**
- A system call requests the OS to create a new process.
- The OS loads the program’s executable code from disk into memory (RAM) (often via OS’s internal I/O buffers).
- The OS creates a **Process Control Block (PCB)** – a special data structure in the kernel that stores information about the process:
- - Process ID (PID)
- - Current state (new, ready, running, waiting, terminated)
- - Program counter (next instruction address)
- - CPU register values
- - Memory pointers (text, data, heap, stack segments)
- - Open files, I/O devices
- The OS allocates memory for the process:
- - Text segment – program instructions.
- - Data segment – global/static variables.
- - Heap – dynamic memory allocation.
- - Stack – function calls and local variables.
- - OS sets up I/O buffers, file descriptors, and network ports if needed.
- CPU registers like program counter and stack pointer are initialized.
- OS assigns scheduling information (priority, time quantum).
- The process state changes from **New → Ready**.
**Ready State:**
- The process’s PCB is added to the ready queue (a list of processes waiting for CPU time).
- The scheduler chooses one process from the ready queue based on the scheduling policy (FCFS, Round Robin, Priority, etc.).
- When the scheduler picks this process, its state changes from **Ready → Running**.
**Running State:**
- The CPU executes the process instructions.
- The process can perform:
- - Computation(حساب) (CPU-bound work).
- - System calls (requesting OS services).
- - I/O operations (disk, network, etc.).
- Possible transitions:
- - Running → Waiting: If the process requests I/O or waits for an event.
- - Running → Ready: If its time quantum expires (in preemptive scheduling).
- - Running → Terminated: If the process finishes execution.
**Waiting (Blocked) State**
- The process cannot continue until some event occurs (e.g., I/O completion, receiving data from network).
- It is placed in the waiting queue.
- Once the event is completed, the OS moves the process back to the ready queue **(Waiting → Ready)**.
**Terminated State**
- The process finishes execution (either normally or abnormally due to errors).
- The OS releases:
- - Allocated memory (text, data, heap, stack).
- - Open files and I/O resources.
- - PCB is removed from process tables.
- - The process is no longer in the system.


## Process Scheduling
Process Scheduling is the method of deciding which process should when multiple processes are waiting for CPU or other resources.
Since CPU is a limited resource so scheduling become necessary to achieve:
- Efficient CPU utilization
- Fairness (no process starves(whena process never gets CPU because others keep getting priority) forever)
- Fast response time (important in interactive systems like typing, clicking, using apps so the users doesn’t feel a lag)
- High throughput (should complete as many processes as possible in a given time)
### CPU Scheduling Algorithms
**First Come, First Serve (FCFS)**
- Processes are executed in the order they arrive.
- Problem: Simple, but can cause convoy effect (slow process delays all).
**Shortest Job Next (SJN) / Shortest Job First (SJF)**
- Process with the shortest burst time runs first
- Problem: Starvation of long processes.
**Priority Scheduling**
- Process with the highest priority runs first.
- Problem: Starvation (low-priority processes may never run).
**Round Robin (RR)**
Each process gets a fixed time quantum.
After the fixed time, process goes back to ready queue.
**Multilevel Queue Scheduling**
- Processes are divided into queues.
- Each queue has its own scheduling algorithm (like one queue is FCFS and another is RR).


## Process Context Switching
Context Switching is the process by which the CPU saves the state of a currently running process and loads the state of another process so that multiple processes can share a single CPU.
It happens when the OS switches the CPU from one process (or thread) to another.
### Steps in Context Switching:
- An interrupt occurs (e.g., timer interrupt, I/O completion, system call). Scheduler decides another process should run.
- OS saves CPU registers, program counter, etc. into the **PCB** of the current process.
- Scheduler picks a new process from the **Ready Queue**.
- OS loads the saved context of the chosen process from its PCB.
- CPU starts executing the new process from where it left off.


## Inter-Process Communication (IPC)
Inter-Process Communication (IPC) is a mechanism that allows processes to exchange data and synchronize their actions.
Since processes are isolated in memory for protection, IPC provides a safe way to share information and coordinate between them.
### Models of IPC
**Shared Memory Model**
- A region of memory is shared among processes.
- Processes read/write directly to this shared space.
- Fast (no kernel involvement after setup).
- Needs synchronization tools (semaphores, mutexes) to avoid conflicts.
- Example: Producer-Consumer problem using a buffer.
**Message Passing Model**
- Processes communicate by sending and receiving messages.
- No shared memory → safer but slower (involves kernel).
- Useful in distributed systems.
- Example: Client-Server communication.


## What is a Deadlock?
A deadlock happens when a process is blocked forever, waiting for resources that are holding by other process.
Example:
Process A holds Resource 1, wants Resource 2.
Process B holds Resource 2, wants Resource 1.
**Both wait forever = deadlock**


## Concurrency
Concurrency means multiple processes or threads running at the same time.
It doesn’t mean literally simultaneous (that’s parallelism, when you have multiple CPUs/cores).
On a single CPU, concurrency is achieved by context switching.
Example:
In a web server, one thread handles user A’s request, another handles user B’s request. Both appear to run together → concurrency.
**The Problem**
When multiple processes/threads share resources (like variables, files, or memory), issues arise:
Race Condition: Outcome depends on the order of execution.
Example: Two threads update the same bank balance at the same time → final result may be wrong.


## Synchronization
Synchronization means controlling the order of execution of concurrent processes/threads so that shared resources are accessed safely.
**Key Synchronization Ways:**
**Mutex (Mutual Exclusion Lock)**
Only one process/thread can access the resource at a time.
Example: Lock a file before writing, unlock after done.
**Semaphores**
Same like mutex but here we can set counters that control the numbers of processes/threads to access the resource at a time.
Two types:
Binary Semaphore (same like a **mutex**, 0 or 1).
Counting Semaphore (allow limited number of processes to access).

**So**
Concurrency = many tasks running at once (real or apparent).
Problem = race conditions when they share resources.
Synchronization = techniques (locks, semaphores, monitors) to prevent race conditions and ensure correctness.





# What is Buffer
A buffer is a temporary storage area in memory used to balance the speed difference between a fast producer (like CPU or RAM) and a slow consumer (like disk, printer, or network), or vice-versa.

The CPU and RAM are much faster than devices like disks, printers, or networks.
**So**
Buffer take data or instruction slowly from I/O devices and let it to CPU or memory in fast speed and CPU give data fastly to buffer then I/O devices take it slowly.

## Producer & Consumer in Buffering
**Producer**	
The part that creates or sends data into the buffer. such as:  
- Printer give data to buffer.
- CPU writing data to be printed.
**Consumer**	
The part that takes data out of the buffer to process it. such as: 
- CPU reading data from buffer to proccess.
- Printer reading data from buffer to print.

### How it works step-by-step
- Producer writes data to the buffer whenever it has something ready.
- Consumer reads from the buffer at its own (usually slower) speed.
- If the buffer is full, the producer must wait (or overwrite if allowed).
- If the buffer is empty, the consumer must wait until the producer adds data.





# System Call
System Calls are,
A way for programs to interact with the operating system.
Provide the services of the operating system to the user programs.
Only entry points into the kernel and are executed in kernel mode.
**How do System Calls Work?**
A system call allows a program to request services from the operating system.
It can be written in high-level languages (C, C++, Pascal) or in assembly.
When a program makes a system call, it switches to kernel mode.
Then OS handles the request, performs the task (e.g., file access, process control), and returns the result.
Without system calls, each program would need its own way to access hardware, making systems inconsistent and error-prone.
**Types of System Calls**
https://media.geeksforgeeks.org/wp-content/uploads/20231017212555/Types-of-System-Calls-(3)-(2).png