Strings are immutable once they are created they cannot be changed  
The functions that are used to modify string all return a new string (String is immutable)
String methods can be chained one after the other

### String Formatting

* String can be concatenated using the "+" operator but this can get messy very quickly
* Instead we can make use of `String.Format()` to format a string as required
* **String Interpolation** can also be used for formatting string. Iet is created by adding `$` before the string

````csharp
string firstName = "John";
string lastName = "Smith";

string myName = firstName + " " + lastName;
string alsoMyName = string.Format("{0} {1}", firstName, lastName);
string alsoMyName2 = $"{firstName} {lastName}";

Console.WriteLine(myName);
Console.WriteLine(alsoMyName);
````

[Standard numeric format strings | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings)

### Verbatim Strings

* They are string that output the value as it is special characters are not considered
* They are similar to raw strings/ triple quote [strings](../../Python/Fundamental%20Concepts/Python%20Strings.md) in Python

````csharp
string path = "C:\\Users\\David\\Downloads\\sample.txt";
string pathVerbatim = @"C:\Users\David\Downloads\sample.txt";

Console.WriteLine(path);
Console.WriteLine(pathVerbatim);
````

### String Builder Class

* It is a [class](../Object%20Oriented%20Concepts/CSharp%20Classes.md) that is used to create Mutable String
* It is defined in the `System.Text` namespace
* It does not provide any of the String Searching [Methods](../Object%20Oriented%20Concepts/CSharp%20Methods.md) but in place of that provides String Manipulation Methods
* We are going to do a lot of manipulation of the data then string builder class should be used as they are faster and more efficient

````csharp
var mutableString = new StringBuilder();

mutableString.Append('*', 10);
mutableString.AppendLine();
mutableString.Append('*', 10);

mutableString.Insert(0, "12345");
mutableString.Remove(0, 3);

Console.WriteLine(mutableString);
Console.WriteLine(mutableString[1]);
````
