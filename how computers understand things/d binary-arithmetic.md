# **Binary Arithmetic**

## 📑 Table of Contents


1. **Binary Addition**





# Binary Addition
Binary follows the same logic as decimal, but since it has only 0 and 1, we carry over when the sum reaches 2.
The simplest way to remember binary addition is:
Add normally in decimal, then convert the result to binary.
```
| Binary Addition   | Decimal Equivalent | Binary Conversion | Binary Result |
| ----------------- | ------------------ | ----------------- | ------------- |
| 0 + 0             | 0                  | 0                 | 0             |
| 0 + 1             | 1                  | 1                 | 1             |
| 1 + 0             | 1                  | 1                 | 1             |
| 1 + 1             | 2                  | 10                | 10            |
| 1 + 1 + 1         | 3                  | 11                | 11            |
| 1 + 1 + 1 + 1     | 4                  | 100               | 100           |
| 1 + 1 + 1 + 1 + 1 | 5                  | 101               | 101           |
| ...               | ...                | ...               | ...           |
```
and so on...
In short when adding binary numbers — first find their decimal sum, then convert that sum to binary to get your final answer.
## Example
```
1011101 + 1110110
| Bit from First | Bit from Second | Sum (Decimal)             | Binary Result  |
| -------------- | ----------------| ------------------------- | -------------- |
| 1              | 0               | 1                         | 1              |
| 0              | 1               | 1                         | 1              |
| 1              | 1               | 2                         | 10 (0 carry 1) |
| 1              | 0               | 2 (1 carry from previous) | 10 (0 carry 1) |
| 1              | 1               | 3 (1 carry from previous) | 11 (1 carry 1) |
| 0              | 1               | 2                         | 10 (0 carry 1) |
| 1              | 1               | 3                         | 11             |

Now, performing full binary addition
   1011101
+  1110110
----------
  11010011
```
## Note
If there are multiple values to add in binary (more than two numbers):
- Add the first two binary numbers.
- Take that result, then add the third number.
- Take the new sum, then add the fourth number.
- Continue this process up to the nth number.