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
A process itself is a passive entity: The term process (Job) refers to program code that has been loaded into a computer's memory so that it can be executed by the central processing unit (CPU).
Every process has a certain collection of data associated with it. For instance, the name of its parents, the location of the memory space that has been allotted, and security attributes like ownership rights and credentials.





# What is Process Management
An operating system (OS) runs many programs at the same time.
Process management is the part of the OS that creates, controls, schedules, and terminates these processes, while making sure they work safely and efficiently.

## Process Life Cycle
- Creating, 
- Scheduling,
- Terminating Processes

### Process Life Cycle
When you open a program (like a browser):
**Step 1: Request for Creation**
A system call asks the OS to create a process
The OS loads the program’s code into memory (RAM)
**Step 2: Process Control Block (PCB)**
Then the OS creates a PCB – a special data structure in the kernel.
PCB stores all information needed to manage the process:
- Process ID (PID)
- Current state (new, ready, running, waiting, terminated)
- Program counter (next instruction)
- CPU register values
- Memory pointers (code, data, stack segments)
- Open files, I/O devices
**Step 3: Allocate Memory & Resources**
The OS reserves memory space:
- Text segment: Program instructions.
- Data segment: Global/static variables.
- Heap: For dynamic memory allocation.
- Stack: For function calls and local variables.
Sets up any required resources such as I/O buffers, file descriptors, or network ports.
**Step 4: Load Program Code**
- The executable machine code of program is loaded from disk into the allocated memory **(via the OS’s internal I/O buffers)**
- Program’s initial stack and heap are prepared.
- Initial values (like environment variables, command-line arguments) are placed.
**Step 5: Initialize Execution Context**
CPU registers (like program counter, stack pointer) are set to starting positions.
OS sets up scheduling info (priority, time quantum).
The process state is set to Ready.
**Step 6: Add to the Ready Queue**
- The new PCB is linked into the OS’s ready queue, a list of all processes waiting for CPU time.
- A scheduler will eventually select it to run.
**Step 7: Dispatch**
When the CPU scheduler picks the process, a context switch occurs:
- The CPU loads the process’s registers and program counter from its PCB.
- The process starts executing.
**Step 8: Termination (Later)**
When the process finishes or is killed:
- OS frees memory and resources.
- Removes the PCB from the process table.





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