---
title: C Functions
tags:
  - programming
  - c
date: 2024-01-28 14:15:56 -0600
updated: 2024-09-15 17:34:40 -0500
---

### Function Definition

```c
#include <stdbool.h> /* C99 only */
#include <stdio.h>

/* Function Definition */
bool is_prime(int n) {
    int divisor;

    if (n <= 1)
        return false;
        
    for (divisor = 2; divisor * divisor <= n; divisor++)
        if (n % divisor == 0)
            return false;

    return true;
}

int main(void) {
    int n;

    printf("Enter a number: ");
    scanf("%d", &n);

    if (is_prime(n))
        printf("Prime\n");
    else
        printf("Not prime\n");

    return 0;
}
```

A function cannot return a array (No other restriction on return value)  
**C89** if return type is ignored it is assumed to be `int`. In **C99** this is illegal  
Functions can only return a single value

**C89** all variable declarations should come first in a function (Similar to `main()`)  
`void` is used as parameter when the function has zero parameters

`printf()` has a return value which is usually ignored    
To explicitly show that we are not using the return value of a function we can cast the value to `void`  

```c
(void) printf("Hi, Mom!\n");
```

#### Old Syntax (Obsolete)

```c
double average(a, b)
double a, b;
{
	return (a + b) / 2;
}
```

This syntax is supported in C89 and C99 but is strongly discouraged  
This syntax does not have the same level of error checking as in normal syntax  
This syntax was used by K&R C

If function prototype is not present C will not check if the no. of arguments are correct, it will also not check if the types are correct  
It will perform the default argument promotion  

### Function Declarations

The C compiler will not error if a function call is encountered before the function definition (Definition provided after `main()` function)  
The compiler will assume the datatype of the variables  
When the function definition is encountered and the assumption is incorrect only then does the compiler throw a error  

Function declarations have to be written before the `main()` function  
They provide the compiler with a glimpse of the datatypes used by the function  
Function Declarations is also called **Function Prototypes**  

```c
#include <stdio.h>

/* DECLARATION */
double average(double a, double b);

int main(void) {
	double x, y, z;
	
	printf("Enter three numbers: ");
	scanf("%lf%lf%lf", &x, &y, &z);
	
	printf("Average of %g and %g: %g\n", x, y, average(x, y));
	printf("Average of %g and %g: %g\n", y, z, average(y, z));
	printf("Average of %g and %g: %g\n", x, z, average(x, z));
	
	return 0;
}

/* DEFINITION */
double average(double a, double b) {
	return (a + b) / 2;
}
```

Parameter names can be omitted from function prototypes but is not recommended 

This is done as means of programming defensively  
If a macro has the same name as the prototype parameter name the parameter name will be replaced by the macro

```c
double average(double, double);
```

In large programs Function Prototypes are written in Header files

In **C99** calling a function for which the compiler has not yet seen the declaration or definition will result in an error

```c
/* No parameter info - Valid - Not recommended */
double average();
```

It is valid to create prototypes without information about the parameters but is not recommended. This was how it was originally defined in K&R C  
The approach the we use was first introduced in C89

### Function Arguments

Arguments are expressions that appear in function calls  
Parameters are dummy names that represent values to be supplied to a function  
Arguments in C are **pass by value**  

#### Type Conversion

Arguments are converted to the type of the parameter, provided the compiler has seen the function prototype or definition prior to the function call.  
If the compiler has not seen the function, default conversion is performed. `float` is converted to `double`. Integers are also promoted (`short` and `char` will be converted to `int`)

#### One-Dimensional Array

When 1D arrays are used as parameters its length can be omitted  
Even if we specify the size the size value is ignored by the compiler  
If the array length is required it has to be passed as a separate parameter

The `sizeof(a) / sizeof(a[0])` trick produces incorrect results  
This is because we are passing the pointer to the first element instead of the array  
When passing array as a argument we do not use the `[]` after the name  

```c
#include <stdio.h>

#define LEN 100

int sum_array(int[], int);

int main(void) {
	int b[LEN], total;
	
	total = sum_array(b, LEN);
	printf("%d\n", total);

	return 0;
}

int sum_array(int a[], int n) {
	int i, sum = 0;
	
	for (i = 0; i < n; i++)
		sum += a[i];
	
	return sum;
}
```

Function is allowed to modify the elements of an array parameter, this change is reflected in the corresponding array argument.

#### Multi-Dimensional Array

For multi-dimensional arrays only the length of the first dimension can be omitted  
Arrays are stored using row-major order and the index of the inner arrays is required to calculate the address to access the element

```c
#define LEN 10

int sum_two_dimensional_array(int a[][LEN], int n) {
	int i, j, sum = 0;
	
	for (i = 0; i < n; i++)
		for (j = 0; j < LEN; j++)
			sum += a[i][j];
			
	return sum;
}
```

We can work around this limitation using arrays of pointers  
In C99, VLA also provides a elegant way to get around this issue

#### Variable Length Array (VLA)

Using VLAs we are explicitly state the length of the array parameters  
The order of the arguments are important. The length has to be declared before the array declaration. The reverse order will result in an compiler error.

```c
int sum_array(int n, int a[n]) {}
```

The prototype for a function that uses VLA can be declared in multiple ways:

```c
int sum_array(int n, int a[n]); /* Version 1 */
int sum_array(int n, int a[*]); /* Version 2a */
int sum_array(int, int [*]); /* Version 2b */

int sum_array(int n, int a[]); /* Version 3a */
int sum_array(int, int []); /* Version 3b */
```

Version 3 is not recommended as it does not show the relation between the array and its length  

```c
int sum_two_dimensional_array(int n, int m, int a[n][m]) {
	int i, j, sum = 0;
	
	for (i = 0; i < n; i++)
		for (j = 0; j < m; j++)
			sum += a[i][j];
	
	return sum;
}
```

```c
int sum_two_dimensional_array(int n, int m, int a[n][m]);
int sum_two_dimensional_array(int n, int m, int a[*][*]);
int sum_two_dimensional_array(int n, int m, int a[][m]);
int sum_two_dimensional_array(int n, int m, int a[][*]);
```

### `static` Keyword

The `static` keyword is used to indicate to the user the minimum size of the array  
The use of the keyword does not have any effect on the program  

```c
int sum_array(int a[static 3], int n) {}
```

It is merely an "hint" the compiler can use to generate efficient code by prefetching the elements required from memory in advance  
Using arrays smaller than the specified size results in undefined behavior  

In multi-dimensional arrays `static` can only be used with the first dimension  

### Compound Literal

It is a feature added in C99  
Makes it possible to create names arrays **on the fly**.  
They are used as parameters to functions  

```c
/* Without Compound Literal */
int b[] = {3, 0, 3, 4, 1};
total = sum_array(b, 5);

/*With Compound Literal */
total = sum_array((int []){3, 0, 3, 4, 1}, 5);
```

Compound Literals follow same rules like initializers  
Designators can be used with with compound literals  

```c
// Array of size 10 with remaning elements as 0
total = sum_array((int [10]){8, 6}, 5);

total = sum_array((int []){2 * i, i + j, j * k}, 3);
```

Compound Literals are l-values so they can be modified  
They can be made read-only by using `const`  

```c
total = sum_array((const int []){3, 0, 3, 4, 1}, 5);
```

### `return` Statement

Non-void functions must use `return` to specify the value returned by the function  
The type of the return expression is implicitly converted to match the return type of the function  

Void function with `return` do not have an expression will result in error in **C99**  
In **C89** this will result in undefined behavior  

If a non-void function reaches the end of the body (no return statement is executed) the behavior of the function is unexpected  

### `exit` Statement

The `exit` statement is part of `stdlib.h`  
`exit(EXIT_SUCCESS)` and `exit(0)` is used to represent normal program termination  
`exit(EXIT_FAILURE)` and `exit(1)` is used to represent abnormal termination
