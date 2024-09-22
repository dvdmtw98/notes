---
tags:
  - programming
  - c
title: C Arrays
date: 2024-01-28 14:15:56 -0600
updated: 2024-09-15 16:44:25 -0500
---

Array is a data structure that allows us to store multiple values of the same type  
The length and data type of the array has to be defined during array declaration  
Use `memcpy(a, b, sizeof(a))` to copy large arrays  

### Array Subscripting

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

### Array Initialization

```c
int a[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

/* Array of all zeros */
int a[10] = {0};
```

If the initializer is shorter than the array the remaining elements of array are made 0  
It is illegal for the initializer to be longer than the array  
When an initializer is used the length of an array can be omitted  

**C99**  
Introduced designators that allows us to initialize certain elements in the array  
The elements that are not initialized are assigned the value 0  

```c
int a[15] = {[2] = 29, [9] = 7, [14] = 48};

/* Valid array initialization */
int c[10] = {5, 1, 9, [4] = 3, 7, 2, [8] = 6};
```

Designators have to be an integer constant  
If designator is used with an array with the length omitted the largest designator is considered to be the length of the array  

The expression `sizeof(a) / sizeof(a[0])` can be used to find length of a array  

```c
int a[] = {4, 9, 1, 8, [0] = 5, 7};
```

Initializer and designators can be mixed together  
An array element can be redeclared multiple times during initialization  
The designator `[0]` will reinitialize the 0th element. The value 7 will reinitialize the 1st element from the value 9. 

### Multidimensional Array

Defined using the syntax `int a[5][9]` - 5 row and 9 columns  
Declaring it as `a[5, 9]` is wrong and will result in a linear array with length of 9  

While multidimensional array is represented as a table in memory the rows are stored as continuous chunks  
C stores Multidimensional arrays are stored in row-major order i.e. rows reside next to each other in memory

[Column-major vs row-major arrays: Does it matter? – The Craft of Coding](https://craftofcoding.wordpress.com/2017/02/03/column-major-vs-row-major-arrays-does-it-matter/)

```c
/* Multidimensional array initializer */
int m[5][9] = {
	{1, 1, 1, 1, 1, 0, 1, 1, 1},
	{0, 1, 0, 1, 0, 1, 0, 1, 0},
	{0, 1, 0, 1, 1, 0, 0, 1, 0},
	{1, 1, 0, 1, 0, 0, 0, 1, 0},
	{1, 1, 0, 1, 0, 0, 1, 1, 1}
};
```

The inner braces are optional can be omitted but some compiler will show warning.  

> [!INFO] ND Array Initialization
> A single value cannot be used to initialize all the elements of a ND array like in 1D array. Nested for loops have to be used to initialize all the elements individually.
> 
> ```c
> char matrix[ROW][COLUMN];
> 
> for (row = 0; row < ROW; row++) {
>    for (column = 0; column < COLUMN; column++) {
> 	   matrix[row][column] = '.';
>    }
> }
> ```

```c
// Reading string into Array
char message[80] = {0};

for (iter1 = 0; (letter = getchar()) != '\n'; iter1++) {
	message[iter1] = letter;
}
```

### Variable-Length Array (VLA)

Feature added in **C99**  
The length of the array is compiled at runtime  

VLAs can be multidimensional    
VLAs cannot have initializers  

---

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
