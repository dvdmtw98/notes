---
title: Modular Exponentiation
tags:
  - security
  - math
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/bg0P_3UiG5I?si=vEOEQ3fn7fr6h3J9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Example 1

$23^3 \mod 30$  
This equation can also be represented as $-7^3 \mod 30$  
= $-7^2 \ast -7 \mod 30$  
= $-133 \mod 30$  
= $17 \mod 30$  
= 17

### Example 2

When the difference between the numbers is very large we can find the modulus values for the factors of the power and then multiply them all together

$88^7 \mod 187$

= $88^1 \mod 187 = 88$  
= $88^2 \mod 187 = 7744 \mod 187 = 77$  
= $88^4 \mod 187 = 5929 \mod 187 = 132$

= $88^7 \mod 187 = 88^4 \ast 88^2 \ast 88^1 \mod 187 = 894432 \mod 187$  
= 11
