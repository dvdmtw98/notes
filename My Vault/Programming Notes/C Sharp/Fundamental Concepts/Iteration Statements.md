### Foreach Loop

````csharp
var numbers = new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
foreach (int num in numbers)
{
    if (num % 2 == 0)
    {
        Console.WriteLine(num);
    }
}
````

If we don’t have to iterate over all the items in the list we should make use of the normal for loop  
Foreach loop cannot be used to remove values from an Enumerable

### Do-While Loop

A do while loop is always executed at least once even if the condition is false this happens because the condition is checked after the loop is executed
