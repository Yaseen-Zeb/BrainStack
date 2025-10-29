# **Number System**

## 📑 Table of Contents


1. **What is a Number System**
3. **Different number systems & Why they exist**
4. **Binary System**
5. **Decimal System**
6. **Octal System**
7. **Hexadecimal System**
8. **Why Binary Conversion and Arithmetic are Important**





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