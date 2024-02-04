---
tags:
  - security
  - math
title: Eulers Totient Function
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

ɸ(n) = Count of positive integers greater than 0 and less than 'n' that are [[co-prime-numbers|relatively prime]] to n  
i.e. the numbers whose GCD with n is 1

ɸ(5) = {1, 2, 3, 4} = 4  
ɸ(6) = {1, 5} = 2

ɸ(n) = n - 1 (When 'n' is prime)  
ɸ(n) = ɸ(a \* b) = ɸ(a) \* ɸ(b) = (a - 1) * (b - 1) when a & b are prime numbers  
ɸ(n) = $n (1 - \frac{1}{p_1}) (1 - \frac{1}{p_2})$ … (where $p_1, p_2$, … are distinct prime factors of n)

Prime factors : Factors of an number that are themselves prime

ɸ(6) = ɸ(2) * ɸ(3) = (2 -1) * (3 - 1) = 2

ɸ(1000)  
n = 1000 = $2^3 \ast 5^3$  
ɸ(1000) = $1000 (1 - \frac{1}{2}) (1 - \frac{1}{5})$  
ɸ(1000) = 400
