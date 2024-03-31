---
title: C Basic Types
tags:
  - c
  - programming
date: 2024-03-12 18:24:46 -0500
updated: 2024-03-28 17:54:39 -0500
---

### Integer Types

Integers can be `signed` & `unisgned`  
By default they are signed  
In a signed integer the left-most bit is set to 0 when number is positive or 0  

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

### Integer Constants

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

> [!IMPORTANT]
> We cannot print signed hexadecimal and octal numbers  
> For negative numbers `printf` will consider the 1 in the MSB to be part of the number itself causing a vary large number to be printed

### Floating Types

Types: `float`, `double`, `long double`  
Use float when precision is not important. Long Double provides the most precision  
IEEE Standard 754: [[floating-point-numbers| Floating Point Number]] Representation

`float`: Single Precision (binary32), `double`: Double Prevision (binary64)  
Implementation of `long double` is dependent on the compiler and system

**C99**  
Real Types: Types: `float`, `double`, `long double`  
Complex Types: `float _Complex`, `double _Complex`, `long double _Complex`

### Floating Constants

Float constants are stored by default as `double`  
To force it to be `float` use `F` for `long double` we use `L`  
For scientific notation `e` is used to denote the exponent (`5.7e1`)

| Type        | Reading             | Printing         |
| :---------- | :------------------ | :--------------- |
| Float       | `%f`, `%e`, `%g`    | `%f`, `%e`, `%g` |
| Double      | `%lf`, `%le`, `%lg` | `%f`, `%e`, `%g` |
| Long Double | `%Lf`, `%Le`, `%Lg` | `%f`, `%e`, `%g` |

**C99**  
Hexadecimal floats use `p` to represent the exponent  
The exponent is denoted in decimal even though its an power of 2  
e.g. 0x1.Bp3 = $1.6875 × 2^3$ = 13.5 (Decimal)  
B is represented in binary before its binary value is calculated

### Character Types

The `char` type in C is essentially a integer type

Integer values can be stored in `char` datatype  
The character corresponding to the code point will be displayed when printed  
The character displayed can be different based on character set used by the system

```c
char ch;
int i;

i = 'a';        /* i is now 97 */
ch = 65;        /* ch is now 'A' */
ch = ch + 1;    /* ch is now 'B' */
ch++;           /* ch is now 'C' */
```

Comparison operations can be used on `char` just like an `int`  
The integer value of the character is used for the comparison

```c
if ('a' <= ch && ch <= 'z') {
	ch = ch - 'a' + 'A';
}
```

`char` can be `signed` (-128 to 127) or `unsigned` (0 to 255)  
C does not enforce the type for ordinary char  
Compiler can implement ordinary char as signed or unsigned  
Use the `signed` and `unsigned` keywords to enforce the required type

`scanf` does not skip white-space when reading characters  

```c
/* skips white space, then reads ch */
scanf(" %c", &ch);
```

`getchar()` and `putchar()` are character specific `scanf` and `printf`  

#### Escape Sequence

`\xHH`: Hexadecimal Escape Characters  
`\OO`: Octal Escape Characters

```c
#include <stdio.h>

int main() {
    printf("Hello,\\nWorld!");                // Hello,\nWorld!
    printf("\x48\x65\x6C\x6C\x6F");           // Hello
    return 0;
}
```

### Type Conversion

#### Implicit Conversion
Operands in a expression don't have the same type (Usual Arithmetic Conversion)  
Type of expression on right cannot be assigned to type of expression on left  
Type of argument in function does not match type of parameter  
Type of expression in return statement does not match functions return type

Converted to narrowest type that can accommodate both the values  
A type is said to be narrower than another if it requires fewer bytes  
The narrower type is converted to the type of the other operand (Promotion)  
Integers are promoted to a unsigned type before promoting to a bigger size 

When signed operand is combined with an unsigned operand the result is unsigned  
The conversion is performed by adding or subtracting a multiple of `MAX + 1`  

#### Explicit Conversion
`cast` is considered to as a unary operator  
Has higher precedence than binary operators

> [!INFO]
> If we assign an larger int to an smaller unsinged int the extra bits are discarded  
> If the variable is signed type then the result is implementation dependent  
> If a large float is stored into a integer type or smaller float type the result is undefined behavior

### Type Definitions
Used to create custom datatypes  
By convention the 1st letter of the name should be capital

```c
typedef int Bool;
Bool flag;              /* same as int flag; */
```

**C99**  
The header `<stdint.h>` contains definitions for integers of fixed sizes  
There is no float equivalent so floats processions and range can vary by platform

### `sizeof` Operator
Returns the memory in bytes required to store a datatype  
Returns a value of type `size_t` which is always an unsigned integer type  

`sizeof` is an unary operator and has higher precedence than binary operators  
It can be used without the parenthesis but precedence can cause problems when used to find the size of an expression  

**C89**: Result of `sizeof` should be cast to `unsigned long` (largest int  type)  
**C99**: The value is automatically cast by `printf` if `z` is added before the unsigned int format specifier 

```c
printf("Size of int: %lu\n", (unsigned long) sizeof(int));
printf("Size of int: %zu\n", sizeof(int)); /* C99 only */
```
