# **Process Management**

## 📑 Table of Contents

1. **What is a Program**
2. **What is a Proccess**
3. **What is Process Management**
4. **What is Buffer**




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