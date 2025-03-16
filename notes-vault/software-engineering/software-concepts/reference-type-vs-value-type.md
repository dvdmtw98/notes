---
title: Reference Type vs. Value Type
tags:
  - programming
  - scripting
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

In C# all [[csharp-primitives-datatype|Primitives Datatype]] are defined under the hood using [[csharp-structs|Structs]] while all non-primitive datatype are defined using [[csharp-classes|Classes]]

In Python all datatypes are objects hence there are all reference type 

In JavaScript Reference Type Variables (Arrays, Functions & Objects) are stored in Heap and the Primitive types are stored in Stack

| Values Types                                                                                      | Reference Types                                   |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| Memory allocation done automatically                                                              | Memory allocation done using the new keyword      |
| Immediately removed when variable is out of scope                                                 | Only removed when CLR performs Garbage Collection |
| Defined using Structures                                                                          | Defined using Classes                             |
| Allocated on [[stack|Stack]] (Short Lifespan) | Allocated on Heap (Larger Memory)                 |

### Value Type

* When we make a copy of Value Type variable a new copy of that variable is created. So modifying the value of one does not affect the value of the other
* Even if we have two variables with the same name but in different scope they are going to storing two different values. The variable from one scope is not going to be accessible in the other

### Reference Type

* When we make a copy of an reference type object a new copy of the object is not created rather both the variable will point to the same memory location there the reference type object is stored
