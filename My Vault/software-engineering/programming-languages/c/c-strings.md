---
tags:
- programming
- c
title: C Strings
---

If we create an char array using `char *` the resulting string is read only string called as string literal  
String literals can be reinitialized  
Character arrays cannot be reinitialized  
All string have to end with `'\0'` (Null character)

````c
char *name = "David"; // String Literal
char name1[] = "David";
char name2[] = {"D", "a", "v", "i", "d", "\0"};
````

When reading and writing string we can use the %s format specifier it allows to print string without looping over each character.  
Internally C iterates over each element of the string until Null character is reached

For working with strings we should use the `fgets()` and `fputs()` & `puts()` function  
They allow us to work with strings that have spaces in them as well