---
tags:
  - programming
  - csharp
title: Lists (Dynamic Arrays)
date: 2024-01-28 14:15:56 -0600
---

* Lists are similar to [[csharp-arrays|CSharp Arrays]] but they have dynamic size (Useful when we don’t know the space required beforehand)
* List is a [[csharp-generics|Generics]] type. All generic type uses `<...>` in its declaration
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
