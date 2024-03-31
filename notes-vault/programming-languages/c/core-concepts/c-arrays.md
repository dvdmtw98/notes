---
tags:
  - programming
  - c
title: C Arrays
date: 2024-01-28 14:15:56 -0600
updated: 2024-03-29 16:49:33 -0500
---

Array is a data structure that allows us to store multiple values of the same type  
The length and data type of the array has to be defined during array declaration  

Accessing specific elements from an array is called **subscripting** or **indexing**  
Expressions of the type `a[i]` are l-values so they can be used in the same way as ordinary variables

```c
#define N 10

for (i = 0; i < N; i++) {
	scanf("%d", &a[i]);
}
```

C does not check bounds when we index an array  
Accessing an index that is out of range is undefined behavior  
The array subscript can be any integer expression even ones with side-effects

The **name of array** in C is an **pointer** to the **memory address** to the **first element** of the array  
Accessing a value using its address of the pointer is called **dereferencing the pointer**

````c
int numbers[] = {2, 3, 5};
int numbers[3];
````

Arithmetic operations (increment & decrement) can be performed on arrays  
If we increment an int pointer by 1 then the address pointed by the pointer will increment by 4 (int is 4 bytes)  
We can **compare** and **subtract** two pointers of the **same type**

````c
#include <stdio.h>

int main(int argc, char const *argv[])
{
    int numbers[5];
    for (int i = 0; i < 5; i++)
    {
        scanf("%d", numbers + i);
    }

    for (int i = 0; i < 5; i++)
    {
        printf("%d ", *(numbers + i));
    }
    return 0;
}
````

Referenced Value can be accessed using any of the following approaches  
The square bracket syntax is just syntactic sugar for the actual operation

````c
int numbers = [10, 20, 30];

printf("%d\n", numbers[0]); // 10
printf("%d\n", *(numbers + 0)); // 10
printf("%d\n", 0[numbers]); // 10
printf("%d\n", *(0 + numbers)); // 10
````

When passing array as an formal argument to a function it can be denoted as `int arr[]` or `int *arr` they both mean the same thing

An multi dimensional array is stored **contiguously** in memory looks **exactly the same** as a **single dimension array**

````c
int array1[3][2] = {{0, 1}, {2, 3}, {4, 5}};
int array2[6] = { 0, 1, 2, 3, 4, 5 };
0 1 2 3 4 5 // Memory Representation

printf("%d\n", *(*(arr + 0) + 1)); // 1
printf("%d\n", arr[0][1]); // 1
printf("%d\n", 1[arr][0]); // 1
````
