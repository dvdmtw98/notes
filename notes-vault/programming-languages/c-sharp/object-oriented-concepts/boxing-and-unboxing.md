---
tags:
  - programming
  - csharp
title: Boxing and Unboxing
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

**Boxing**: The process of converting a value type instance to a reference type instance (This causes the value to be stored on Heap)

**Unboxing:** The process of converting a reference type instance to a value type instance

````csharp
// Boxing
int num = 10;
object obj = num;

// Unboxing
object obj = 10;
int num = (int)obj;
````

 > [!info]
 > * Performing Boxing and Unboxing has a small performance hit associated
 > * If a method takes a reference type value as input and we pass instance type value then boxing will occur (This should be avoided whenever possible)
 