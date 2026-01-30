# **Binary representation**

## Table of Contents


1. **What is Binary representation**
2. **Why Binary Representation Is Needed**
3. **Binary Representation of Text (Characters)**





# What is Binary representation
Binary representation mean how real-world data becomes 0s and 1s.
Computers only understand:
- ON/OFF
- 1/0
But we want to store:
- numbers, letters, emojis
- images
- sound
- videos





# Why Binary Representation Is Needed
Computer hardware uses electricity which has two stable states (on/off). and the goal is represent everything using 1=voltage-present, 0=voltage-absent.





# Binary Representation of Text (Characters)
Engineers realized that if numbers can be converted between number systems.
So lets map/assign numeric values to English letters and other commonly used symbols.
And number will be then converted to binary when stored in a computer and converted back when retrieved.
This idea is called character encoding.
## ASCII
This is the first major character encoding.
Mapping Examples:
'A' → 65 → 01000001
'a' → 97 → 01100001
Characteristics:
- Uses 7 bits
- Supports 128 characters (0–127)
- Designed mainly for English letters, digits, and basic symbols
Limitations:
- No support for emojis
- No support for non-English languages
- Very limited character set

## Extended ASCII (8-bit)
ASCII used 7 bits, which means:
Total combinations = 2⁷ = 128
Characters available = 128 only

This was fine for basic English, but not enough for:
European languages (é, ñ, ü, ç)
Extra symbols (£, €, ©)
So engineers said:
“We still store data in bytes (8 bits)… why waste 1 bit?”

ASCII was extended from 7 bits to 8 bits
8 bits → 2⁸ = 256 possible values
Range: 0 – 255
The original ASCII stayed the same:
0–127 → Standard ASCII
128–255 → Extra characters

### Example Mappings
| Character | Decimal | Binary   |
| --------- | ------- | -------- |
| `A`       | 65      | 01000001 |
| `a`       | 97      | 01100001 |
| `é`       | 233     | 11101001 |
| `£`       | 163     | 10100011 |

### Important Reality Check ⚠️
There is no single Extended ASCII.
Different systems used different mappings for values 128–255.
Examples:
ISO-8859-1 (Western Europe)
ISO-8859-5 (Cyrillic)
Windows-1252 (Windows default)
Mac Roman (old macOS)
Same number, different character on different systems.
`File saved in Windows-1252
Opened in ISO-8859-1
→ Text breaks`

## Unicode — The Big Idea
Before Unicode:
- ASCII → English only
- Extended ASCII → small regional fixes
- Different systems = different mappings
- Same number ≠ same character
Computers needed ONE universal table for ALL characters:
- All languages
- Symbols
- Emojis
- Math, arrows, currency, etc.

### Unicode’s Big Idea
Unicode says:
“Every character in the world gets a unique number.”
That number is called a Code Point.
### Unicode Code Points
Written as: U+XXXX
Example:
| Character | Code Point |
| --------- | ---------- |
| `A`       | U+0041     |
| `a`       | U+0061     |
| `é`       | U+00E9     |

### Code Points vs Encoding
#### Code Point = What
Abstract number assigned to a character
Example:
😀 = U+1F600
#### Encoding = How
How that number is stored as bytes
Example encodings:
UTF-8
UTF-16
UTF-32
These above are some Encoding example which decide that to how many bytes a code point will be convert.
Analogy 🧠
Unicode = dictionary
Code point = word ID
Encoding = how you write that ID on paper

### UTF-16 vs UTF-8 vs UTF-32
#### UTF-32
Fixed length: 4 bytes always
One number = one character
Simple but memory-heavy

#### UTF-8
Variable length: 1–4 bytes
ASCII compatible
Used in files, web, network

#### UTF-16
Variable length: 2 or 4 bytes

###  UTF-8 — Why Variable Bytes Exist
Why not store every character in 4 bytes?
Answer:
- Wastes space
- Most text is ASCII
- ASCII fits in 1 byte
UTF-8 is designed to:
- Be ASCII compatible
- Save space
- Still support all Unicode characters

<!-- study it correctly -->
<!-- ### UTF-8 Rules (Core Logic)
UTF-8 uses 1 to 4 bytes
| Bytes   | Code Point Range    |
| ------- | ------------------  |
| 1 byte  | U+0000 to U+007F    |
| 2 bytes | U+0080 to U+07FF    |
| 3 bytes | U+0800 to U+FFFF    |
| 4 bytes | U+10000+            |

### How UTF-8 Knows Byte Length
UTF-8 uses leading bits:
First Byte	Meaning
0xxxxxxx	1 byte
110xxxxx	2 bytes
1110xxxx	3 bytes
11110xxx	4 bytes
So the decoder looks at the first byte and instantly knows:
“How many bytes belong to this character” -->