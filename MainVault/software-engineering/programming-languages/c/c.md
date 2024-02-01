---
tags:
  - programming
  - c
  - index
title: C
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-31 09:33:20 -0600
---

### Table of Content

1. **Fundamental Concepts**
	* [[c-user-input|C User Input]]
	* [[c-functions|C Functions]]
	* [[c-pointers|C Pointers]]
	* [[c-arrays|C Arrays]]
	* [[c-strings|C Strings]]
	* [[c-structs|C Structs]]
	* [[c-modules|C Modules]]

### Common Commands

````bash
# Create Object Files (-c)
gcc -Wall -Wextra -std=c11 -c modulename.c

# Link multiple Object files
gcc filename.o filename2.o -o executable.o
````

`-O2` : Compiler Optimization Levels (0-3) 

### Best Practices and Coding Conventions

* Variable names, Function names, Struct and Typedef names should use lowercase/ snake case
* When creating a function we must define an function prototype (Generally in header file) and then declare the function
* When creating header files the guard clauses should be always included. By convention the guard name should be same as filename and in all caps with dot replaced with underscore

### Miscellaneous Points

#### Arrays
Name of arrays in C stores the base address of the array

#### Include Statements
The include statements that are used in C are called as "Preprocessor Directives"  
They are macros that copies the content of the source file of the header into our code before compilation

#### Library Files
To include the **Math library** (libm.a) in a program we need to specify the `-lm` flag  
`.a` (Archive) are static library files and are **embedded** into our code `.so` (Shared Object) are dynamic library files and are only **referenced** by our program

#### Switch Statement
Cannot be used for string and other reference type variables

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
