---
tags:
  - programming
  - csharp
title: Arithmetic Operators
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

````csharp
int num1 = 1;
int num2 = num1++;
Console.WriteLine("num1 = {0}, num2 = {1}", num1, num2);
// num1 = 2, num2 = 1

int num3 = 1;
int num4 = ++num3;
Console.WriteLine("num3 = {0}, num4 = {1}", num3, num4);
// num3 = 2, num4 = 2
````

**Postfix Increment** : Use Current Value then Increment Value  
**Prefix Increment** : Increment Current Value then Use Value

 > [!info]
 > * When performing division operation if both the inputs are integer the result is also an integer
 > * One of the values need to float or type cased to float to get the desired output
 