---
tags:
- programming
- concept
title: Reference Type vs. Value Type
---

In C# all [Primitives Datatype](../programming-languages/c-sharp/fundamental-concepts/primitives-datatype.md) are defined under the hood using [Structs](../programming-languages/c-sharp/object-oriented-concepts/structs.md) while all non-primitive datatype are defined using [Classes](../programming-languages/c-sharp/object-oriented-concepts/csharp-classes.md)

In Python all datatypes are objects hence there are all reference type 

In JavaScript Reference Type Variables (Arrays, Functions & Objects) are stored in Heap and the Primitive types are stored in Stack

| Values Types                                                                                            | Reference Types                                   |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| Memory allocation done automatically                                                                    | Memory allocation done using the new keyword      |
| Immediately removed when variable is out of scope                                                       | Only removed when CLR performs Garbage Collection |
| Defined using Structures                                                                                | Defined using Classes                             |
| Allocated on [Stack](../data-structures-and-algorithms/data-structures/stack.md) (Short Lifespan) | Allocated on Heap (Larger Memory)                 |

### Value Type

* When we make a copy of Value Type variable a new copy of that variable is created. So modifying the value of one does not affect the value of the other
* Even if we have two variables with the same name but in different scope they are going to storing two different values. The variable from one scope is not going to be accessible in the other

### Reference Type

* When we make a copy of an reference type object a new copy of the object is not created rather both the variable will point to the same memory location there the reference type object is stored