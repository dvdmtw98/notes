---
tags:
  - programming
  - c
title: C Modules
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

The function prototypes along with Typedefs, Enums that are used by our function are defined in the header files  
We can make a function inaccessible to the end user by not including it in the header file

The header and source code file are generally given the same name  
When we enclose an header file in angle brackets the system is instructed to look in the system include path for those files  
Double quotes tells the compiler to look in your current directory for the source files

````c
#include <stdio.h> # Standard Library
#include "mylibrary.h"
````

Guard clauses are used to prevent the header file from getting declared multiple times when used in multiple parts in our program

````c
#ifndef FILENAME_C
#define FILENAME_C

// Declare Functions, Structs, etc.
void print_string(char name[]);

#endif
````
