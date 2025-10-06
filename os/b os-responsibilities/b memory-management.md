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
- Contiguous memory management schemes
- Non-Contiguous memory management schemes


## Contiguous memory management
In contiguous memory management the hole process is allocated a single block of memory.
### Types
There are two types of contiguous memory management:s
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