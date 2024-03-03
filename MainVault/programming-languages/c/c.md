---
tags:
  - programming
  - c
  - index
title: C
date: 2024-01-28 14:15:56 -0600
updated: 2024-03-02 18:20:55 -0600
---

### Table of Content

* **Theoretical Concepts**
	* [[compiling-linking|Compiling and Linking]]
	* [[directives|Directives]]
* **Core Concepts**
	* [[c-fundamentals|C Fundamentals]]
	* [[c-arithmetic-operators|C Arithmetic Operators]]
	* [[c-selection-statements|C Selection Statements]]
	* [[c-functions|C Functions]]
	* [[c-pointers|C Pointers]]
	* [[c-arrays|C Arrays]]
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

**VS Code Formatting**: [Clang-Format Style Options](https://clang.llvm.org/docs/ClangFormatStyleOptions.html#configuring-style-with-clang-format)  
[dvdmtw98: Solutions for exercises from "C Programming: A Modern Approach"](https://github.com/dvdmtw98/c-programming-a-modern-approach)
### Best Practices

* Variable names, Function names, Struct and Typedef names should use snake case
* When creating a function we must define an function prototype (Generally in header file) and then declare the function
* When creating header files the guard clauses should be always included. By convention the guard name should be same as filename and in all caps with dot replaced with underscore

### Miscellaneous Points

#### Arrays
Name of arrays in C stores the base address of the array

#### Library Files
To include the **Math library** (libm.a) in a program we need to specify the `-lm` flag  
`.a` (Archive) are static library files and are **embedded** into our code `.so` (Shared Object) are dynamic library files and are only **referenced** by our program

#### Loops
Break statement used inside a nested loop will remove is out of all the loops

````c
int sum = 0
for(int i = 0, j = n; i <= n && j >= 0; i++, j --)
{
	sum += i;
	printf("%d\n", j);
}
printf("Sum : %d\n", sum);
````

#### Functions
In C there is **no concept** of **reference type** variables (can achieve similar effect using pointers). To return multiple values from function we can use **pointers**. 
   
#### Datatypes
Datatypes like uint_16 (Fixed Size variables) are used when we want to make our code portable and occupy the same space on all systems. Types like int can have different space requirement depending on system
