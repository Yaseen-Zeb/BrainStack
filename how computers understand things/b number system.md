# **Number System**

## 📑 Table of Contents


1. **What is a Number System**
3. **Different number systems & Why they exist**
4. **Why Binary Conversion and Arithmetic are Important**
5. **Decimal to Binary Conversion**
6. **Binary to Decimal Conversion**
7. **Octal to Binary Conversion**
8. **Binary to Octal Conversion**
9. **Hexadecimal to Binary Conversion**
10. **Binary to Hexadecimal Conversion**





# What is a Number System
A number system is a way of representing **quantities** using symbols or digits.
Every number system has:
- A base (i.e 2, 10, 8, 16)
- A set of symbols i.e (for bi 0,1), (for di 0-9), (for oct 0-7) etc
- Rules for how those symbols are used. i.e arithmetic operations etc





# Different number systems & Why they exist
## Binary System
Digits used: 0, 1
Each place value: Power of 2
i.e
2p0 => 1 => 1 => 1(one digit)
2p1 => 2 => 2,1 => 1,0 => 10(two digits)
2p2 => 4 => 4,2, 1 => 1,0,0 => 100(three digits)
2p3 => 8 => 8,4,2,1 => 1,0,0,0 => 1000(four digits)
2p4 => 16 => 16,8,4,2,1 => 1,0,0,0,0 => 10000(five digits)
Each increase in the power of 2 adds a new digit — that’s what "place value = power of 2" means.
### Used by:
Computers (because hardware works with ON/OFF, i.e., 1/0)
### Why important:
Every piece of data — numbers, letters, colors, sound — is stored as binary inside computer memory.

## Decimal System
Digits used: 0–9
Each place value: Power of 10
i.e
10p0 => 1
10p1 => 10
10p2 => 100
10p3 => 1000
10p4 => 10000
Each increase in the power of 10 adds a new digit — that’s what "place value = power of 10" means.
### Used by:
Humans (because we have 10 fingers — historically natural for counting)
### Why important:
We use it for everyday life — money, measurements, and general counting.

## Octal System
Digits used: 0–7
Each place value: Power of 8
i.e
8p0 => 1
8p1 => 8
8p2 => 64
8p3 => 512
8p4 => 4096
Each increase in the power of 8 adds a new digit — that’s what "place value = power of 8" means.
### Used by:
Early computers and in Linux file permissions (like chmod 755, 777)
### Why important:
It groups 3 binary bits into one octal digit (since 2³ = 8). Easier to read than long binary strings.

## Hexadecimal System
Digits used: 0–9 and A–F (A=10, B=11, C=12, D=13, E=14, F=15) or a–f (a=10, b=11, c=12, d=13, e=14, f=15)
Each place value: Power of 16
16p0 ⇒ 1
16p1 ⇒ 16
16p2 ⇒ 256
16p3 ⇒ 4096
16p4 ⇒ 65536
Each increase in the power of 16 adds a new digit — that’s what "place value = power of 16" means.
### Used by:
Programming, memory addresses, color codes (e.g. #FF5733, #ffffff, #000000)
### Why important:
It’s a compact way to represent binary — each hex digit equals 4 binary bits (a nibble).

## In Short:
Binary → Computer’s language
Decimal → Human’s language
Octal & Hexadecimal → Middle ground (shortcuts to represent binary clearly)





# Why Binary Conversion and Arithmetic are Important
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
Given number is 35
32, 16, 8, 4, 2, 1
1   0   0  0  1  1
## Explanation:
- We list powers of 2: 1, 2, 4, 8, 16, 32
- Find the sum: 32 + 2 + 1 = 35
- Write 1 below 32, 2, and 1 → rest get 0





# Binary to Decimal Conversion
To convert binary into decimal, we do the reverse of what we did before —
each bit (0 or 1) represents a power of 2, and we just add up the values where there is a 1.
Steps:
- Write down the binary number.
- Label each bit with its corresponding power of 2 (starting from right(0) to left(rest)).
- Add the values where the bit is 1.
## For example
Given number is 100011
100011
(1 * 2p5) + (0 * 2p4) + (0 * 2p3) + (0 * 2p2) + (1 * 2p1) + (1 * 2p0)
32 + 0 + 0 + 0 + 2 + 1
35





# Octal to Binary Conversion
Octal is base 8, and binary is base 2.
Since 8 = 2p3, each octal digit can be written as 3 binary bits.
So,
1 octal digit = 3 binary digits (bits)
Steps:
- Write each octal digit separately.
- Convert each digit to a 3-bit binary number.
- Combine all the binary groups.
## For example
Given Octal number is 2536
2 => 2,1   => 1,0   => 010
5 => 4,2,1 => 1,0,1 => 101
3 => 2,1   => 1,1   => 011
6 => 4,2,1 => 1,1,0 => 110
Now combine the obtain binary
010101011110





# Binary to Octal Conversion
To convert binary into octal, we do the reverse of what we did before —
we just need to group binary digits into sets of 3 (starting from the right)
and then convert each group into its octal value.
Steps:
- Start from the rightmost bit of the binary number.
- Group the digits into sets of 3.
- - Add leading zeros (on the left) if needed to make the first(leftmost) group complete.
- Convert each 3-bit group into its octal equivalent.
## For example
Given Binary number is 101111100 => 101 111 100
Grouping
101 => (1 * 2p2) + (0 * 2p1) + (1 * 2p0) => 4+0+1 => 5
111 => (1 * 2p2) + (1 * 2p1) + (1 * 2p0) => 4+2+1 => 7
100 => (1 * 2p2) + (0 * 2p1) + (0 * 2p0) => 4+0+0 => 4
Now combine the obtain octal
574





# Hexadecimal to Binary Conversion
Hexadecimal is base 16, and binary is base 2.
Since 8 = 2p4, each octal digit can be written as 4 binary bits.
So,
1 Hexadecimal digit = 4 binary digits (bits)
Steps:
- Write each Hexa digit separately.
- Convert each digit to a 4-bit binary number.
- Combine all the binary groups.
## For example
Given Octal number is FA53C6

F(15) => 8,4,2,1 => 1,1,1,1 => 1111
5     => 4,2,1   => 1,0,1   => 0101
3     => 2,1     => 1,1     => 0011
6     => 4,2,1   => 1,1,0   => 0110
Now combine the obtain binary
1111010100110110





# Binary to Hexadecimal Conversion
To convert binary into hexa, we do the reverse of what we did before —
we just need to group binary digits into sets of 4 (starting from the right)
and then convert each group into its hexa value.
Steps:
- Start from the rightmost bit of the binary number.
- Group the digits into sets of 4.
- - Add leading zeros (on the left) if needed to make the first(leftmost) group complete.
- Convert each 4-bit group into its hexa equivalent.
## For example
Given Binary number is 111100111010111001011100 => 1111 0011 1010 1110 0101 1100
Grouping
1111 => (1 * 2p3) + (1 * 2p2) + (1 * 2p1) + (1 * 2p0) => 8+4+2+1 => 15 => F
0011 => (0 * 2p3) + (0 * 2p2) + (1 * 2p1) + (1 * 2p0) => 0+0+2+1 => 3
1010 => (1 * 2p3) + (0 * 2p2) + (1 * 2p1) + (0 * 2p0) => 8+0+2+1 => 11 => B
1110 => (1 * 2p3) + (1 * 2p2) + (1 * 2p1) + (0 * 2p0) => 8+4+2+1 => 14 => E
0101 => (0 * 2p3) + (1 * 2p2) + (0 * 2p1) + (1 * 2p0) => 0+4+0+1 => 5
1100 => (1 * 2p3) + (1 * 2p2) + (0 * 2p1) + (0 * 2p0) => 8+4+0+0 => 12 => C
Now combine the obtain hexa
F3BE5C