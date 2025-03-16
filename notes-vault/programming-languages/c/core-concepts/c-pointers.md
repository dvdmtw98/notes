---
title: C Pointers
tags:
  - programming
  - c
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-31 09:33:39 -0600
---

Allows us to pass variables by its reference (address)  
Accessing a value using the address of the pointer is called **dereferencing the pointer**

`*` : Value at Address Operator  
`&` : Address of Operator  
`**` : Pointer to Pointer Operator

````c
int age = 22;
int *ptr = &age; // 0x7ffded0d58c8
int _age = *ptr; // 22
int _new = *(&age); // 22
````

A pointer variable **points** to a **address** in memory  
A pointer to pointer variable stores the **address** of another pointer

````c
int age = 22;
int *ptr = &age;
int **pptr = &ptr;

printf("%d\n", *(*pptr)) // 22
````

Pointers are helpful when we have to return multiple values from a function

### Void Pointer

Called as general purpose pointers and can point to an address of any datatype  
Pointer arithmetic cannot be used on void pointers  
To access the data that is referenced by the void pointer it needs to be type casted  
Direct dereferencing (Accessing the value pointed by pointer) will result in Error

`malloc()` & `calloc()` returns void pointer which allows then to allocate memory for any datatype

### Null Pointer

An pointer that points to an memory address that does not exist/ invalid  
It is equal to the value 0 in the content of pointer (i.e. its not the same as integer 0)
