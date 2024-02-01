---
tags:
  - programming
  - csharp
title: CSharp Methods
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-31 10:34:29 -0600
---

### Params Modifier

* The params modifier is used when a method takes a variable number of inputs. It is similar to the spread/ ellipsis operator in other programming languages
* The type of the value passed must be a single dimensional [[csharp-arrays|Array]] (Else will result in compile time error)
* No parameter can be use after using params in method declaration and it can only be used once in a method declaration

````csharp
class Program
{
    public static int Method1(params int[] inputArray)
    {
        var sum = 0;
        foreach (var number in inputArray)
        {
            sum += number;
        }

        return sum;
    }

    static void Main(string[] args)
    {
        var result = Method1(1, 2, 6, 3);
        var result2 = Method1(new int[] { 1, 2, 6, 3, 9 });

        Console.WriteLine(result);
        Console.WriteLine(result2);
    }
}
````

### Ref Modifier

The ref modifier is used to pass a value type parameter to an method as a reference type parameter (This should be avoided as much as possible its seen as a code smell)

````csharp
class Program
{
    public static void Method2(ref int num1)
    {
        num1 = num1 + 42;
        Console.WriteLine(num1);
    }

    static void Main(string[] args)
    {
        int num1 = 10;
        Method2(ref num1);
        Console.WriteLine(num1);
    }
}
````

### Out Modifier

* It is similar to the ref modifier it passes a value type parameter as a reference type parameter
* The one difference is that the parameter that is passed to the method does not need to be initialized
* When using out the parameters can be accessed outside without using the return keyword (similar to reference type)
* This should also be **avoided** as much as possible has its seen as a code smell (There are some inbuilt methods that make use of the out modifier)

````csharp
class Program
{
    public static void Method3(out int num2)
    {
        num2 = 42;
        Console.WriteLine(num2);
    }

    static void Main(string[] args)
    {
		int num2;
        Method3(out num2);
        Console.WriteLine(num2);
    }
}
````

[Methods - C# Programming Guide | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/methods)  

[params keyword for parameter arrays - C# reference | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/params)
