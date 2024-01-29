---
tags:
  - programming
  - csharp
title: CSharp Arrays
date: 2024-01-28 14:15:56 -0600
---

In C# [[array|Array]] have a fixed size and they need to be declared during creation, their size cannot be changed later  
This is a [[csharp-classes|class]] called Array and when we create a new array we are creating an instance of that class

[Array Class (System) | Microsoft Learn](https://docs.microsoft.com/en-us/dotnet/api/system.array?view=net-5.0)

### Declaring and Initializing Array

[c# - All possible array initialization syntaxes - Stack Overflow](https://stackoverflow.com/questions/5678216/all-possible-array-initialization-syntaxes)

````csharp
int[] numbers = new int[3];
numbers[0] = 1;
numbers[1] = 2;
numbers[2] = 3;

// Alternate Initilization Syntax
int[] numbers2 = new int[] { 1, 2, 3 };
````

When we do not assign a value to element in a array its value is initialized to the default of that datatype

* If it’s a int/ numbers array the default will be 0s
* Boolean will be initialized to false

### Rectangular Array

````csharp
int[,] matrix = new int[3, 4]
{
    {1,2,3,4},
    {5,6,7,8},
    {9,10,11,12}
};
Console.WriteLine(matrix[1, 3]);
````

### Jagged Array

[Jagged Arrays - C# Programming Guide | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/arrays/jagged-arrays)

````csharp
// Jagged Array (Array of Arrays)
int[][] jagged = new int[3][];
jagged[0] = new int[4];
jagged[0] = new int[5];
jagged[0] = new int[3];

Console.WriteLine(jagged[1][3]);

int[][] jaggedArray2 = new int[3][]
{
    new int[5] { 1, 3, 5, 7, 9 },
    new int[4] { 0, 2, 4, 6 },
    new int[2] { 11, 22 }
};
````
