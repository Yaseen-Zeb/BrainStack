# **Number System**

## 📑 Table of Contents


1. **What is a Number System**
3. **Why different number systems exist**
4. **Why Binary Conversion and Arithmetic Are Important**
5. **Decimal to Binary Conversion**





# What is a Number System
A number system is a way of representing **quantities** using symbols or digits.
Every number system has:
- A base (i.e 2, 10, 8, 16)
- A set of symbols i.e (for bi:0,1), (for di 0-9), (for oct 0-7) etc
- Rules for how those symbols are used





# Why different number systems exist
**System**	 **Purpose**
Binary	     (1 = ON, 0 = OFF) is the actual hardware states.
Hexadecimal	 A way to represent large binary numbers shortly (e.g 1111 1111 0000 1010 = Hex FF0A).
Decimal	     For human input/output (easy to read).
Octal	     Used in **early** computers to make binary numbers shorter by grouping bits in 3s (e.g., 111 = 7).





# Why Binary Conversion and Arithmetic Are Important
- As computers understand binary and we humans think in decimal (0–9), there’s a natural communication gap between us and the machines we have created.
- So obviously, we need a way to turn our human-friendly numbers into computer-friendly signals, and vice versa.
- That’s why scientists and engineers have defined a set of rules that make this communication possible.
- At the core of these rules, there are only two main types:
## Conversion Rules
- - Which define how information changes form (for example, from decimal to binary or binary to hexadecimal).
- - These rules allow us to understand how data is represented and shared between humans and machines.
## Arithmetic Rules
- - Which define how binary values interact (addition, subtraction, shifting, etc.).
- - These rules allow computers to actually process and compute information.
- While running code, one of the key tasks the interpreter performs is converting high-level instructions into low-level binary and back, by following the conversion rules we learn.
- And by understanding these rules ourselves, we begin to truly understand how the invisible magic world of 0s and 1s powers everything we use every day.
- Together, these two rule sets form the grammar and logic of the computer’s language.





# Decimal to Binary Conversion
There are many ways to convert a decimal number into binary, but one of the simplest methods is the **Power of 2 method**.
Steps:
- List the powers of 2 up to (and not exceeding) the given number.
- Find the combination of these powers whose sum equals the given number.
- Write 1 under the powers you used and 0 under the ones you didn’t.
## For example
35
32, 16, 8, 4, 2, 1
1   0   0  0  1  1
## Explanation:
- We list powers of 2: 1, 2, 4, 8, 16, 32
- Find the sum: 32 + 2 + 1 = 35
- Write 1 below 32, 2, and 1 → rest get 0
