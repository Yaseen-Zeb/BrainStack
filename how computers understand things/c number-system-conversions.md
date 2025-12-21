# **Number System Conversions**

## Table of Contents


1. **Decimal to Binary Conversion**
2. **Binary to Decimal Conversion**
3. **Octal to Binary Conversion**
4. **Binary to Octal Conversion**
5. **Hexadecimal to Binary Conversion**
6. **Binary to Hexadecimal Conversion**





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