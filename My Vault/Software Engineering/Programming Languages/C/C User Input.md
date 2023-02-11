---
title: C User Input
tags: [programming, c]
---

````c
#include <stdio.h>

int main()
{
	int number;
	printf("Enter a number : ");
	scanf("%d", &number);

	char name[40];
	printf("Enter name : ");
	fgets("%s", 40, stdin);
	
	return 0;
}
````

**`&name`** : Address in memory pointed by variable name

When reading arrays using **`scanf()`** we don't have to specify the & sign as the array name points to a memory address (Start of the array/ Address of 0th element)  
The **`%s`** is an special format specifier as we can print entire string without looping over each character one by one

When reading strings from the user `fgets()` function is preferred and allows to even read string that have spaces in them