# **Into**

## 📑 Table of Contents


1. **Intro**
2. **Why computers use binary (0 and 1)**
3. **Bits, Nibbles, Bytes, Unicode, Words and Endianness**





# Intro
In every era, humans need to send messages to each others.
- They began with signs, drawings, and writing which is simple but slow.
- Then came smoke signals, drums, and letters but still limited by distance.
- Later, the mechanical age began — with printing presses, typewriters, and early calculators helping us share and process information faster but requiring a lot of effort and energy.
- Than electricity invented and slowly communication met electricity. Today, everything you see on a screen — text, sound, photos, and games — works using just two states: on and off.





# Why computers use binary (0 and 1)
Here very interesting thing come. Before solving any problem, we first identify what we need to achieve and what possibilities are available.
Similarly:
- Computers run on electricity, and electricity has only two possible states ON or OFF.
- To represent these two states, we use 1 for ON and 0 for OFF.
- Now to comunicate with electricity we need to encoded and decode our language to 0 & 1





# Bits, Nibbles, Bytes, Unicode, Words and Endianness
**Bit**
One binary digit (0 or 1).
**Why a Bit**:
Because digital electronics use two stable states — on (1) and off (0) and we need to encoded and decode our language to 0 & 1.

**Nibble**:
4 bits.
**Why a Nibble**:
A nibble represents half of a byte and perfectly fits one hexadecimal digit (0–F).
Since each hex digit equals 4 bits, using nibbles makes binary-to-hex conversions simple and efficient for humans and machines.

**Byte**
8 bits (the most common unit).
**Why a Byte**:
Early computer designers chose 8 bits because it’s large enough to represent 256 different values (2⁸) **mean** enough to encode a full set of characters (like ASCII), numbers, and symbols — while still being small enough for efficient memory use.
Over time, 8 bits became the standard smallest addressable unit in memory.

**Unicode**
Unicode is a universal character encoding standard that can use up to 4 bytes to represent each character, allowing it to cover all languages, symbols, and emojis used worldwide.
**Why a Unicode**:
- In the beginning of computers, there were 1-byte systems that could represent only 256 different values (2⁸) — enough for English letters (A–Z, a–z), numbers (0–9), and a few symbols like @, #, !, and $.
- For a while, this was sufficient. But as computers spread globally, people needed to represent characters from other languages — such as Arabic, Chinese, Hindi, Japanese, and many others — plus special signs, math symbols, and emojis.
- Since 1 byte = 256 combinations wasn’t enough, scientists and engineers decided to create a universal system that could assign a unique code to every character in every language.
- That system became Unicode. It uses up to 4 bytes per character, allowing more than 1 million unique code points, covering almost all writing systems in the world.

**Word**:
A fixed-size group of bits (commonly 16, 32, or 64) that the CPU processes as a single unit.
**Why a Word**:
A word matches the natural data size that the CPU’s internal registers and buses handle in one operation.
For example, a 32-bit CPU can process 32 bits (1 word) at once — making data handling faster and instructions simpler.

**Endianness**
The order that how bytes are stored multi-byte value in memory.
**Types**
Little-endian: Least significant byte stored first.
Big-endian: Most significant byte stored first.
**Why Endianness**:
When computers were first designed. Different CPU architectures adopted different conventions for efficiency and compatibility.
Little-endian makes arithmetic operations easier (used by Intel CPUs).
Big-endian aligns data naturally with how humans write numbers (used by older or network systems).
**So** Endianness mainly matters when sharing data between different systems or reading raw memory. **Modern systems use Big-endian for comunication through cables or over network(HTTP,TCP) numbers are always converted to big-endian before transmission**

**Quick fact**
1 byte = 8 bits → 2⁸ = 256 possible values.
n bits → 2ⁿ distinct patterns.