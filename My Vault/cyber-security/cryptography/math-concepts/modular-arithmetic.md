---
tags:
- security
- math
title: Modular Arithmetic
---

x ≡ y mod n  
x is congruent to y mod n when x modulo n gives the remainder as y  
This can also be represented as `x = kn + y`

x ≡ y mod n if n divides (x - y)  
This property can be used to verify that the first equation is correct

---

### Properties

Given x ≡ y mod n and a ≡ b mod n  
then (x + a) ≡ (y + b) mod n  

Given x ≡ y mod n and a ≡ b mod n  
then (x - a) ≡ (y - b) mod n  

Given x ≡ y mod n and a ≡ b mod n  
then `(x * a) ≡ (y * b) mod n`  

\[(a mod n) + (b mod n)\] mod n  ≡ (a + b) mod n  
\[(a mod n) - (b mod n)\] mod n ≡ (a - b) mod n  
\[(a mod n) \* (b mod n)\] mod n ≡ (a \* b) mod n  

| Property          | Expression                                                                                          |
| ----------------- | --------------------------------------------------------------------------------------------------- |
| Commutative Laws  | (a + b) mod n = (b + a) mod n<br/>`(a * b) mod n = (b * a) mod n`                                   |
| Associative Laws  | \[(a + b) + c\] mod n = \[a + (b + c)\] mod n<br/>\[(a \* b) \* c\] mod n = \[a \* (b \* c)\] mod n |
| Distributive Laws | \[a \* (b + c)\] mod n = \[(a \* b) + (a \* c) mod n\]                                              |
| Identities        | (0 + a) mod n = a mod n<br/>(1 \* a) mod n = a mod n                                                |
| Additive Laws     | For each a∈Z<sub>n</sub> there exists '-a' such that<br/>a + (-a) ≡ 0 mod n                         |