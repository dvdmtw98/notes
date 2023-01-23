---
title: GCD - Euclids Algorithm
---

### Method 1

Find the GCD (12, 33)

Largest Number = A  
Perform A % B  
Q = Quotient, R = Remainder  
Shift values in B and R left by 1  
If B = 0 then A = GCD

| Q   | A   | B   | R   |
| --- | --- | --- | --- |
| 2   | 33  | 12  | 9   |
| 1   | 12  | 9   | 3   |
| 3   | 9   | 3   | 0   |
|     | 3   | 0   |     |

### Method 2

Find the GCD (50, 12)

GCD(a, b) = GCD(b, a mod b)  
GCD(50, 12) = GCD(12, 50 mod 12) = GCD(12, 2)  
GCD(12, 2) = GCD(2, 12 mod 2) = GCD(2, 0)  
GCD(50, 12) = 2