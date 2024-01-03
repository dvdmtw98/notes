---
tags:
- programming
- csharp
title: Lists (Dynamic Arrays)
---

* Lists are similar to [CSharp Arrays](csharp-arrays.md) but they have dynamic size (Useful when we don’t know the space required beforehand)
* List is a [Generics](../advanced-concepts/csharp-generics.md) type. All generic type uses `<...>` in its declaration
* Most of the times in newer code Lists are used instead of Arrays

````csharp
List<int> primeNumbers = new List<int>();

// Methods
primeNumbers.Add(10);
Console.WriteLine(primeNumbers.Count);
primeNumbers.IndexOf(4);
primeNumbers.LastIndexOf(3);
primeNumbers.Remove(4);
````

The `System.Collections.Generic` namespace needs to be imported for using Lists and other generic datatype