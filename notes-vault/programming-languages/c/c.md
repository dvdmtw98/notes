---
tags:
  - programming
  - c
  - index
title: C
date: 2024-01-28 14:15:56 -0600
updated: 2024-03-23 10:55:44 -0500
---

### Table of Content

* **Theoretical Concepts**
	* [[compiling-linking|Compiling and Linking]]
	* [[directives|Directives]]
	* [[floating-point-numbers|Floating Point Numbers]]
* **Core Concepts**
	* [[c-fundamentals|C Fundamentals]]
	* [[c-arithmetic-operators|C Arithmetic Operators]]
	* [[c-selection-statements|C Selection Statements]]
	* [[c-loops|C Loops]]
	* [[c-basic-types|C Basic Types]]
	* [[c-arrays|C Arrays]]
	* [[c-functions|C Functions]]
	* [[c-pointers|C Pointers]]
	* [[c-strings|C Strings]]
	* [[c-structs|C Structs]]
	* [[c-modules|C Modules]]

### Common Commands

```bash
# Compile C Program
gcc -O -Wall -W -pedantic -std=c99 -o pun.o pun.c

# Create Object Files (-c)
gcc -Wall -Wextra -std=c11 -c modulename.c

# Link multiple Object files
gcc filename.o filename2.o -o executable.o
```

| Flag      | Description                                                             |
| :-------- | :---------------------------------------------------------------------- |
| -Wall     | Show warnings when potential errors are detected                        |
| -W        | Procedures additional error messages beyond -Wall                       |
| -pedantic | Shows warnings when code does not follow the C standard                 |
| -ansi     | Disables features of GCC that aren't in standard C (Not used with -std) |
| -std=c89  | Specify which version of C should be used to check the program          |
| -O2       | Compiler optimization levels (0 -3)                                     |

### Expression and Statement

**Expression**  
Something which evaluates to a value  
Example: `1+2/x`  
They always return a value    
Expressions can be in statements

**Statement**  
A line of code that does something  
Example: `GOTO 100`  
They do not return a value (They are of type `void`)    
Statements cannot be used in expressions

**VS Code C Formatting**: [Clang-Format Style Options](https://clang.llvm.org/docs/ClangFormatStyleOptions.html#configuring-style-with-clang-format)  
[dvdmtw98: Solutions for exercises from "C Programming: A Modern Approach"](https://github.com/dvdmtw98/c-programming-a-modern-approach)

### Miscellaneous Points

#### Arrays
Name of arrays in C stores the base address of the array

#### Library Files
To include the **Math library** (libm.a) in a program we need to specify the `-lm` flag  
`.a` (Archive) are static library files and are **embedded** into our code `.so` (Shared Object) are dynamic library files and are only **referenced** by our program
