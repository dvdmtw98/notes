---
tags:
- programming
- concept
title: Big-O Notation
---

Allows us to measure the scalability (Speed + Memory) of a solution  
Big O notation measures the worst case complexity

**<u>Asymptotic Notations</u>**  
O (Upper Bound)  
Ω (Lower Bound)  
Θ (Tight Bound)

---

### Time Complexity

Constant Time: O(1) - No Loops  
Logarithmic Time: O(log(n)) - Searching Algorithms/ Remove half the elements  
Linear Time: O(n) - Loop  
Log Linear Time: O(nlog(n)) - Sorting Algorithm  
Quadric Time: O($n^2$) - Nested Loop  
Exponential Time: O($2^n$) - Recursive Function  
Factorial Time: O(n!) - Loop for each element

**<u>Examples</u>**  
Subset of Set: O($2^n$)  
Permutations of String: O(n!)  
Search: O(log(n))  
Sorting: O(nlog(n))  
Iterating over MxN matrix: O(mn)

### Space Complexity

When calculating space complexity we are talking about the extra space required by algorithm (Input size is not considered) 

O(1) : Primitives  
O(n) : Strings, Reference Type

[Big-O Algorithm Complexity Cheat Sheet (Know Thy Complexities!) @ericdrowell](https://www.bigocheatsheet.com/)

---

[Software Engineering](../software-engineering.md)