---
title: C Functions
---

For creating an function we first need to **declare** the function (Function Prototype) and then **implement** the function (Function Definition)  
Function Prototype is option but is the recommended way of declaring functions

````c
#include <stdio.h>

// Function Prototype
void printName(char[]);

int main()
{
    printName("David");
}

// Function Defination
void printName(char name[])
{
    printf("Hello my name is %s\n", name);
}
````

 > [!NOTE]
 > * Function can **only return a single parameter**
 > * When writing large programs **Function Prototypes** are written in **Header files**

We can return multiple values by:

* Declaring a struct to encapsulate the parameters to be returned
* Using pointers passed as inputs to function to store the results

````c
#include <stdio.h>

void sum(int, int, int *);

int main(int argc, char const *argv[])
{
    int result;
    sum(5, 15, &result);
    printf("%d\n", result);
}

void sum(int num1, int num2, int *result)
{
    *result = num1 + num2;
}
````

Functions can be represented as pointers as and can be passed to functions

````c
#include <stdio.h>

int sum(int, int);
int prod(int, int);
void super_func(int (*)(int, int), int, int);

int main(int argc, char const *argv[])
{
	// Passing address of function as function
    super_func(&sum, 3, 4);

	// Assigning address of function to pointer
    int (*func)(int, int) = &prod; 
    int result = (*func)(2, 6);
    printf("%d\n", result);

    return 0;
}

int sum(int x, int y)
{
    return x + y;
}

int prod(int x, int y)
{
    return x * y;
}

void super_func(int (*operation)(int, int), int x, int y)
{
    printf("%d\n", operation(x, y));
}
````