# **Binary Arithmetic**

## Table of Contents


1. **Binary Addition**
2. **Binary Subtraction**





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
Start from rightmost bit:
| Top Bit        | Bottom Bit      | Sum (Decimal)             | Binary Result  |
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





# Binary Subtraction
Binary subtraction is very similar to decimal subtraction — but it works with only 0 and 1.
Sometimes, we need to borrow (just like in normal subtraction) when the top digit is smaller than the bottom one.
Binary Subtraction Rules
```
| Binary Operation | Decimal Equivalent           | Result         | Note          |
| ---------------- | ---------------------------- | -------------- | ------------- |
| 0 − 0            | 0 − 0 = 0                    | 0              | Normal        |
| 1 − 0            | 1 − 0 = 1                    | 1              | Normal        |
| 1 − 1            | 1 − 1 = 0                    | 0              | Normal        |
| 0 − 1            | 0 − 1 → borrow from next bit | 10 − 1 = 1     | Borrow needed |
```
## How Borrow Works
When you see 0 − 1, you can’t subtract directly, so you borrow a 1 (which become equals 2 in binary i.e 10) from the next higher bit. like
```
  10
−  1
----
   1
```
Here, you borrowed 1 from the next bit (so it became 10 in binary, which is 2 in decimal).
Then, 2 − 1 = 1.
## Example
```
Subtract 0101 from 1010
| Step | Top Bit             | Bottom Bit | Borrow?                     | Result |
| ---- | ------------------- | ---------- | --------------------------- | ------ |
| 1    | 1                   | 1          | No                          | 0      |
| 2    | 0                   | 0          | No                          | 0      |
| 3    | 1                   | 1          | No                          | 0      |
| 4    | 0                   | 1          | Yes (borrow 1 → becomes 10) | 1      |
| 5    | 1 (after borrowing) | 0          | No                          | 1      |


Now, performing full binary substraction
   10101
−  01101
--------
   01000
```
## Note
When doing binary subtraction:
- Always start from the rightmost bit.
- If the top bit is smaller, borrow 1 from the next bit (turns into 10 in binary).
- Continue step by step until all bits are subtracted.





# Binary Multiplication
Binary multiplication is simpler than decimal multiplication because it only uses two digits — 0 and 1
There’s no need to remember tables like 2×3 or 7×8, just follow a few simple rules
```
| Binary Operation | Decimal Equivalent | Result |
| ---------------- | ------------------ | ------ |
| 0 × 0            | 0 × 0 = 0          | **0**  |
| 0 × 1            | 0 × 1 = 0          | **0**  |
| 1 × 0            | 1 × 0 = 0          | **0**  |
| 1 × 1            | 1 × 1 = 1          | **1**  |
```
## Example
```
      101
   ×   11
   --------
      101     (101 × 1)
+   1010     (101 × 1, shifted one place to the left)
   --------
    1111
```
## Example 2
```
       110
    ×  101
    --------
       110     (110 × 1)
+    0000      (110 × 0 → all 0s, shifted one place)
+  11000      (110 × 1, shifted two places)
    --------
     11110
```

## Note
When multiplying binary numbers:
- The only operations are 1×1=1 and 1×0=0
- Use shifting (move one place left) for each new row
- Then add all the partial results in binary