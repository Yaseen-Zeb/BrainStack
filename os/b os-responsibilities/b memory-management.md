# **Memory Management**

## 📑 Table of Contents


1. **What is Memory Management**
2. **Memory Management Techniques (Contiguous memory management AND Non-Contiguous memory management)**




# What is Memory Management
Memory management is an essential task of the operating system operating systems that ensures efficient use of the main memory (**RAM**). The OS ensures that memory is allocated and deallocated properly to keep programs running smoothly.
**It decides:**
- Which process gets memory,
- How much memory it gets,
- When it gets it,
- And when to free it when it’s no longer needed.






# Memory Management Techniques
It can categorized in two parts:
- Contiguous memory management
- Non-Contiguous memory management


## Contiguous memory management
In contiguous memory management the hole process is allocated a single block of memory.
### Types
There are two types of contiguous memory management:
**Fixed Partitioning**
**Variable Partitioning**


#### Fixed Partitioning
- In fixed partitioning, the memory is divided into a fixed number of partitions or segments.
- Each partition can hold one process or program.
**Example:**
RAM = 400 MB
Part A = 200 MB
Part B = 200 MB
So memory is divided into fixed portions.
**Problem**
If three processes of 100 MB each arrive, the first two will be loaded into Part A and Part B.
However, even though 200 MB of total space is still free, the third process cannot be loaded because there’s no free partition — this is called **internal fragmentation**.


#### Variable Partitioning
In Variable Partitioning, memory is not divided beforehand.
When process come the OS creates partitions dynamically based on the size of that process.
**Example:**
RAM = 500 MB
Process A → needs 100 MB
Process B → needs 300 MB
Process C → needs 100 MB
So each process gets exactly the memory it needs.
**Problem**
Now, if Process A and B finish and free their memory, there will be two 100 MB holes. If a new process of 200 MB arrives, it cannot fit even though total free memory = 200 MB.
This is called **external fragmentation**.

**Note**
**Internal Fragmentation** – unused space inside allocated blocks
**External Fragmentation** – free spaces between processes





## Non Contiguous memory management
Non-contiguous memory management allows both processes and main memory (RAM) to be divided into smaller parts.
These smaller parts of a process (called pages or segments) can be stored in different locations in memory (frames).
This helps the operating system to use memory more efficiently and reduce fragmentation.
### Types
There are three types of non contiguous memory management:
**Paging**
**Segmentation**
**Paging + Segmentation**


#### Paging
hint, https://medium.com/@The_Anshuman/what-is-paging-in-os-4b9101bee8c1
Paging divides both physical memory of RAM and logical memory of process into fixed-size blocks.
Logical memory of process  → divided into pages (equal size).
Physical memory (RAM) → divided into frames (same size as pages).
The OS keeps a **page table** to map each page to its corresponding frame.
**Example:**
- Let us consider the main memory size of 12 KB and a frame size of 1 KB. As a result, the main memory will be divided into a collection of 12 frames, each of 1 KB.
- There are three processes in the system: P1, P2, P3, each having a size of 4 KB. These processes are further divided into pages of 1 KB each, so that one page can fit into one frame.
- Initially, all the frames are empty, which means the pages of the processes will be stored in a contiguous manner.
- Let’s assume that, at a certain point, processes P1 and P3 are moved to a waiting state. As a result, we now have 8 empty memory frames available, which can be used to load other pages. Within the ready queue, there’s a process called P5, which has a size of 8 KB, equivalent to 8 pages.
- We have **now** 8 frames in empty frames in memory but they are non-contiguous(in to parts). **So** paging allows us to store processes(pages) in various locations(frames), we can utilize these available frames to load the pages of process P5 in the place of P1 and P3.
**Problem**
In paging, as the logical memory of a process is divided into fixed-size blocks/pages. If a function or data structure in the process is larger than a single page, it gets split across multiple pages. This means one part of the function is stored in one page, and the remaining part is stored in another.
Alrigth this is still working correctly but here some issues creates which are as follow:
**Internal Fragmentation**
The last page of a process may not be completely filled, leaving unused space inside that page.
**Increased Page Table Size And Page Faults**
More pages mean a larger page table, which takes up more memory and needs more management time.
More pages also mean more page faults.
**Slower Access (Performance Issue)**
Since the function’s code or data is spread over multiple pages, the CPU may need to fetch from different memory frames, this causes extra memory accesses.