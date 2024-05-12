---
title: Floating Point Numbers
tags:
  - programming
  - software
  - computer
date: 2024-03-19 18:13:56 -0500
updated: 2024-05-05 11:51:51 -0500
---

The general name for the Decimal Point is **Radix Point**  
Computers store the sign, exponent and mantissa of a floating-point number  
Mantissa is also called Fraction  

### Biasing
It is the process of offsetting numbers in a series by a fixed value

Assume we have 4 bits to store the exponent of a floating-point number  
Using 4 bits we can represent 16 unique values  
Exponents can be positive and negative so effectively we can represent exponents ranging from -8 to 7  
Next we select the largest number from the series (in our case 8) and add it to all the numbers in the series  
This will give us a new series with numbers ranging from 0 to 15  
Using the new series negative exponents can also be stored as a positive value  

| Range         | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  | 11  | 12  | 13  | 14  | 15  | 16  |
| :------------ | :-- | :-- | :-- | :-- | :-- | :-- | :-- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Signed  Range | -8  | -7  | -6  | -5  | -4  | -3  | -2  | -1  | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   |
| With Bias     | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  | 11  | 12  | 13  | 14  | 15  |

Assume we have 10 bits to store floating point numbers  
1 bit for sign, 4 bits for exponent and 5 bits for mantissa  

| Floating Number | Scientific Notation    | Sign | Exponent | Mantissa |
| :-------------- | :--------------------- | :--- | :------- | :------- |
| $(0.0101)_{2}$  | $0.101 \times 2^{-1}$  | 0    | 0111     | 10100    |
| $(101.101)_{2}$ | $1.01101 \times 2^{2}$ | 0    | 1010     | 01101    |

### Normalization
The process of representing a floating-point number in scientific notation  
$(101.011)_{2} = 0.101011 \times 2^{3}$  
$(101.011)_{2} = 101011 \times 2^{-3}$  

#### Explicit Normalization
Move radix point to the LHS of the most significant 1 in the bit sequence
$(101.011)_{2} = 0.101011 \times 2^{3}$  
**Formula**: $(-1)^S \times 0.M \times 2^{E-Bias}$

$(5.625)_{10} = (101.101)_{2} = 0.101101 \times 2^{3} = 0\;1011\;10110$  
The last 1  is dropped since the machine does not have space to store it  
Converting to Decimal: $(101.1)_2 = (5.5)_{10}$  

#### Implicit Normalization
Move radix point to the RHS of the most significant 1 in the bit sequence  
$(101.011)_{2} = 1.01011 \times 2^{2}$  
**Formula**: $(-1)^S \times 1.M \times 2^{E-Bias}$

Implicit nomination allows to stores values with higher precision  
$(5.625)_{10} =(101.101)_{2} = 1.01101 \times 2^{2} = 0\;1010\;01101$  
Converting to Decimal: $(101.101)_2 = (5.625)_{10}$  

### IEEE 754 Standard

| Name      | Common Name         | Significant bits | Exponent bits | Exponent Bias |
| :-------- | :------------------ | :--------------- | :------------ | :------------ |
| binary16  | Half Precision      | 11               | 5             | 15            |
| binary32  | Single Precision    | 24               | 8             | 127           |
| binary64  | Double Precision    | 53               | 11            | 1023          |
| binary128 | Quadruple Precision | 113              | 15            | 16383         |
| binary256 | Octuple Precision   | 237              | 19            | 262143        |

Significant Bits: Sign + Mantissa  
Programming languages implement Single and Double Precision Floats

When 5 bits are reserved for exponent we have 32 unique combinations (0-31)  
If we consider signed numbers as well then the range becomes -16 to 15  
In the IEEE 754 standard the exponent pattern all 0s and all 1s are reserved  
So the range of the exponent effectively becomes -14 to 15

| Exponent                | Mantissa   | Represents           |                                          |
| :---------------------- | :--------- | :------------------- | :--------------------------------------- |
| All 0s                  | All 0s     | $\pm\;0$             |                                          |
| All 1s                  | All 0s     | $\pm\;\infty$        |                                          |
| $1 \leq E \leq 2^{E-2}$ | Any value  | Implicit Normal Form | $(-1)^S \times 1.M \times 2^{E-Bias}$    |
| All 0s                  | $M\neq0$   | Fractional Form      | $(-1)^s \times 0.M \times 2^{-(Bias-1)}$ |
| All 1s                  | $M \neq 0$ | NaN                  | Exception Handling                       |

### Precision

Decimal Precision: $S \times \log_{10}(2)$  
Single Precision Floats: $24 \times \log_{10}(2) = 7.22\;digits$  
Double Precision Floats: $53 \times \log_{10}(2) = 15.95\;digits$  

[What is the difference between float and double? - Stack Overflow](https://stackoverflow.com/questions/2386772/what-is-the-difference-between-float-and-double)
