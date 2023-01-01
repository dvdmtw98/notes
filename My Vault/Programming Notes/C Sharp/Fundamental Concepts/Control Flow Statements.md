### Switch Case

Multiple switch cases can be placed one below the other followed by an expression if all of the switch cases have the same output  
Failing to add break; clause will result in **Compilation Error**

An optional `when` clause can we used in each cause to define an more complex pattern matching condition

````csharp
int num = 12;
switch (num % 2)
{
    case 0:
        System.Console.WriteLine("{0} is a even number", num);
        break;
    case 1:
        System.Console.WriteLine("{0} is a odd number", num);
        break;
    default:
        System.Console.WriteLine("Invalid Input was provided");
        break;
}
````

[Selection statements - C# reference | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/statements/selection-statements)

### Ternary Operator

````csharp
var max = (num1 > num2) ? num1 : num2;
Console.WriteLine(max);
````
