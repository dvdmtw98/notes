---
title: C
---

### Table of Content

1. **Fundamental Concepts**
	* [C User Input](C%20User%20Input.md)
	* [C Functions](C%20Functions.md)
	* [C Pointers](C%20Pointers.md)
	* [C Arrays](C%20Arrays.md)
	* [C Strings](C%20Strings.md)
	* [C Structs](C%20Structs.md)
	* [C Modules](C%20Modules.md)

---

### Common Commands

````bash
# Create Object Files (-c)
gcc -Wall -Wextra -std=c11 -c modulename.c

# Link multiple Object files
gcc filename.o filename2.o -o executable.o
````

`-O2` : Compiler Optimization Levels (0-3) 

---

### Best Practices and Coding Conventions

* Variable names, Function names, Struct and Typedef names should use lowercase/ snake case
* When creating a function we must define an function prototype (Generally in header file) and then declare the function
* When creating header files the guard clauses should be always included. By convention the guard name should be same as filename and in all caps with dot replaced with underscore

---

### Miscellaneous Points

1. <u>Arrays</u>  
   Name of arrays in C stores the base address of the array

2. <u>Include Statements</u>  
   The include statements that are used in C are called as "Preprocessor Directives". They are macros that copies the content of the source file of the header into our code before compilation

3. <u>Library Files</u>  
   To include the **Math library** (libm.a) in a program we need to specify the `-lm` flag  
   `.a` (Archive) are static library files and are **embedded** into our code `.so` (Shared Object) are dynamic library files and are only **referenced** by our program

4. <u>Switch Statement</u>  
   Cannot be used for string and other reference type variables

5. <u>Loops</u>  
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

6. <u>Functions</u>  
   In C there is **no concept** of **reference type** variables (can achieve similar effect using pointers). To return multiple values from function we can use **pointers**. 
7. <u>Datatypes</u>  
   Datatypes like uint_16 (Fixed Size variables) are used when we want to make our code portable and occupy the same space on all systems. Types like int can have different space requirement depending on system