---
title: Primitive Roots
---

Find relatively prime number for 7  
7 = 1, 2, 3, 4, 5, 6  
GCD(x, 7) = 1 (7 with any number whose GCD is 1 are relatively prime numbers)

A number a such that a raised to relatively prime numbers mod 7 should return relatively prime number  
$a^{1-6} \mod 7$ = 1, 2, 3, 4, 5, 6

| a   | $a^1 \mod 7$ | $a^2 \mod 7$ | $a^3 \mod 7$ | $a^4 \mod 7$ | $a^5 \mod 7$ | $a^6 \mod 7$ | Primitive Root |
| --- |:------------:|:------------:|:------------:|:------------:|:------------:|:------------:|:--------------:|
| 1   |      1       |      1       |      1       |      1       |      1       |      1       |       N        |
| 2   |      2       |      4       |      1       |      2       |      4       |      1       |       N        |
| 3   |      3       |      2       |      6       |      4       |      5       |      1       |       Y        |
| 4   |      4       |      2       |      1       |      4       |      2       |      1       |       N        |
| 5   |      5       |      4       |      6       |      3       |      2       |      1       |       Y        |
| 6   |      6       |      1       |      6       |      1       |      6       |      1       |       N        |

Here 3, 5 are the primitive roots of 7  
If we get mod value as 1 then the sequence is going to repeat again