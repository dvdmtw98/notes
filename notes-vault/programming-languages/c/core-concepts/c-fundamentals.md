---
title: C Fundamentals
tags:
  - programming
  - c
date: 2024-01-28 14:15:56 -0600
updated: 2024-05-05 17:04:00 -0500
---

### Declarations, Identifiers & Statements

The `//` style command was added in C99

Normally all declarations are supposed to be at the start of the function  
In C99 support to have declarations after statements were added

```c
float fahrenheit; // Declaration

printf("Enter temperature (in fahrenheit): ");
scanf("%f", &fahrenheit);

float celsius; // Declaration (Would be invalid in ASNI C)
celsius = (fahrenheit - FREEZING_PT) * SCALE_FACTOR;
```

The name assigned to variables, functions and other entities are called **identifiers**

### Input & Output

```c
#include <stdio.h>

#define FREEZING_PT 32.0f
#define SCALE_FACTOR (5.0f / 9.0f)

int main(void) {
    float fahrenheit, celsius;
    
    printf("Enter temperature (in fahrenheit): ");
    scanf("%f", &fahrenheit);

    celsius = (fahrenheit - FREEZING_PT) * SCALE_FACTOR;
    printf("Temperate (in celsius): %.2f\n", celsius);

    return 0;
}
```

The `f` in **`printf`** and **`scanf`** stands for formatted  
These functions require a format string to specify the type of data to input and output  

#### `printf` Function

C compilers are not required to check if the number of conversion specifiers in a format string watches the number of output items.

```c
printf("%d %d\n", i); /*** WRONG ***/
printf("%d\n", i, j); /*** WRONG ***/
printf("%f %d\n", i, x); /*** WRONG ***/
```

#### Conversion Specification

The characters that start with `%` are called **conversion specification**  
Conversion specifications define how to convert the internal form (binary) of data into its printed form (characters)

General Form: `%m.pX` or `-%m.pX`  
m and p are integers and X is a letter (conversion specification)  
m and p are optional. If p is dropped, the decimal point is also dropped  

Minimum field width (m) specifies how many characters should be printed  
If the number is shorter than the width the output is right justified with space as padding  

The `-` sign is used to left justify the string  
`p` when used with an integer controls the number of digits that will be shown. If the number is smaller than `p` it will be padded with zeros.  

```c
i = 40;
printf("|%5.3d|\n", i);
//|  040|
```

`%e`: Float in Exponential Form  
`%f`: Flat in Fixed decimal form  
`%g`: Float in exponential or fixed-decimal form based on size

#### `scanf` Function

`scanf` is essentially a "pattern-matching" function that tries to match up groups of input characters with conversion specifications  
When providing input the values can be separated by spaces, new lines and tabs

```c
int i, j;
float x, y;
scanf("%d%d%f%f", &i, &j, &x, &y);
```

**Integers**: Searches for digital, plus or minus sign and reads until it reaches a non-digit  
**Float**: Searches for plus or minus sign (optional) followed by a series of digits (possibly containing a period) followed by an exponent (optional). Exponents consist of `e` or `E` followed by a plus or minus sign (optional) and one or more digits.

The call to `scanf` can contain ordinary characters. It will pattern-match the ordinary characters in the format string with the ordinary characters that are provided in the input.

`%d`: Base-10 number  
`%i`: Base-8, Base-10 or Base-16 number

`scanf` has a return value which equals to the numbers of inputs it was able to read  
