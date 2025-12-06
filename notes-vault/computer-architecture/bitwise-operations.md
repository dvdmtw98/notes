---
title: Bitwise Operations
tags:
  - programming
  - low-level
  - software
date: 2025-11-30 19:42:01 +0530
updated: 2025-11-30 20:19:50 +0530
---

Arithmetic operators are performed on a WORD.  
A word is the largest junk of data the system can process at a time.  
The result of a normal arithmetic operation can influence other bits in a word.  
E.g. During addition the carry bit can influence the value of its adjacent bits.  

### Bitwise Operators
A bitwise operation is also performed on a word however, the operation performed will not have any effect on other bits in the word.  
E.g. During a bitwise and operation the value of each bit is independent of the adjacent/other bits that make up the word.  

Bitwise AND (&)  
Bitwise OR (|)  
Bitwise XOR (^)  
Bitwise NOT (!)  
Left Shift (<<)  
Right Shift (>>)  

All memory operations work at the byte level.  
That is why the smallest datatype in programming languages is 1 byte.  

### Bitwise Functions

#### Set
To set a bit we need a mask with 1 at the location that has to be set.  
We have to OR the mask to produce the required result.  

```c
void set(uint8_t *word, uint8_t n) {
	*word = *word | (1u << n);
}
```

#### Clear
To clear a bit we need a mask with 0 at the location that has to be set.  
The mask can be negated (NOT) to generate the required mask.  
We have to AND the mask to produce the required result.  
In C, NOT is denoted using the ~ symbol.   

```c
void clear(uint8_t *word, uint8_t n) {
	*word = *word & ~(1u << n);
}
```

#### Toggle
To toggle a bit we need a mask with 1 at the location that has to be set.  
We have to XOR the mask to produce the required result.  

```c
void toggle(uint8_t *word, uint8_t n) {
	*word = *word ^ (1u << n);
}
```

#### Read
To read a bit the LSB needs of byte needs to be set to the bit to be read.  
We have to AND the mask with 1 to reset/clear the remaining places in the byte.  

```c
uint8_t read(uint8_t *word, uint8_t n) {
    return (*word >> n) & 1;
}
```

### Bit Packing
The process of storing multiple values in a byte is called **bit packing**.  
This technique is heavily used when storage is extremely limited.  
It is also used in applications that require bit level manipulation (compression, encryption, encoding, etc.)  

In read world applications the bitwise functions described above are rarely used, instead the operations are performed directly with hardcoded masks just like normally arithmetic operations.  
It is quite common to use hexadecimal to represent in the masks.  