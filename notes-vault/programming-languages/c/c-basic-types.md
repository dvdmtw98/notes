---
title: C Basic Types
tags:
  - c
  - programming
date: 2024-03-12 18:24:46 -0500
updated: 2024-03-12 20:58:33 -0500
---

### Integer Types

Integers can be `signed` & `unisgned`  
In a signed integer the left-most bit is set to 0 when number is positive or 0  
By default integers are signed  

Largest signed 16-bit number: $2^{15} - 1 = 32,767$  
Largest unsigned 16-bit number: $2^{16} - 1 = 65,535$

Integer Sizes: `short int`, `int`, `long int`  
Order of specifiers don't matter: `unsigned long int` same as `long unsigned int`  
Word `int` can be omitted when `long` or `short` are used  

`int` is normally 32-bits long but can be 16-bits on older CPUs  
`<limits.h>` can be referenced to find the macro that defines the upper and lower bounds

**C99**  
New integer: `long long int`  
Has to be at minimum 64-bit long  
Supports implementation defined extended integers (Compiler could add 128-bit integer)

| Type                       | Datatypes                                                                                                     |
| :------------------------- | :------------------------------------------------------------------------------------------------------------ |
| Standard Signed Integers   | `short int`, `int`, `long int`, `long long int`, `signed char`                                                |
| Standard Unsigned Integers | `unsigned short int`, `unsigned int`, `unsigned long int`, `unsigned long long int`, `unsigned char`, `_Bool` |

### Integer Constant Types

Constants can be represented in decimal, Octal or Hexadecimal  
Decimal cannot start with `0`  
Octal starts with `0`  
Hex starts with `0x`  
Add 3 types can be mixed together in a expression  

For decimal constants storage the compiler will use the following order:  
`int` -> `long int` -> `unsigned long int`  
For octal and hexadecimal constant storage the compiler will use the following order:  
`int` -> `unsigned int` -> `long int` -> `unsigned long int`  

To force it to be treated as `long int` we can use `L`  
To force it to treated as `unsigned` we can use `U`

**C99**  
For decimal constants storage the compiler will use the following order:  
`int` -> `long int` -> `long long int`  
For octal and hexadecimal constant storage the compiler will use the following order:  
`int` -> `unsigned int` -> `long int` -> `unsigned long int`  -> `long long int` -> `unsigned long long int`  

To force it to be treated as `long long int` we can use `LL`  

**Integer Overflow**  
Signed Integer overflow result undefined  
Unsigned Integer overflow will cause the number to wrap-around


| Type                             | Datatype               | Format Specifier |
| :------------------------------- | :--------------------- | :--------------- |
| Signed Integer                   | int                    | %d               |
| Unsigned Integer (Decimal)       | unsigned int           | %u               |
| Unsigned Integer (Octal)         | unsigned int           | %o               |
| Unsigned Integer (Hexadecimal)   | unsigned int           | %x               |
| Signed Short                     | short                  | %hd              |
| Unsigned Short (Decimal)         | unsigned short         | %hu              |
| Signed Long Int                  | long int               | %ld              |
| Unsigned Long Int (Decimal)      | unsigned long int      | %lu              |
| Signed Long Long Int             | long long int          | %lld             |
| Unsigned Long Long Int (Decimal) | unsigned long long int | %llu             |

### Floating Types

Types: `float`, `double`, `long double`  
Use float when precision is not important. Long Double provides the most precision
