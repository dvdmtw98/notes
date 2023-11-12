---
tags: [programming, csharp]
---

The `Convert class` provides methods which can be used to convert datatypes. The target datatype needs to be specified in the equivalent .NET datatype  
Each [Primitives Datatype](Primitives%20Datatype.md) has an Parse and TryParse method as well which can be used to cast

````csharp
string number = "1";
int newNumber1 = Convert.Int32(number);
int newNumber2 = int.Parse(number);

Console.WriteLine("{0} {1}", newNumber1, newNumber2);
````

### Value Overflow

In C# there is no overflow checking. If we exceed the capacity of the datatype the value will wrap around  
If we need to check for such overflow in the code we can make use of the "checked" block which will raise an exception if an overflow occurs

````csharp
byte number = 255;

checked
{
	number = (byte)(number + 1);
}

Console.WriteLine(number);
````

---

**<u>References</u>**:

* [c# - What's the main difference between int.Parse() and Convert.ToInt32 - Stack Overflow](https://stackoverflow.com/questions/199470/whats-the-main-difference-between-int-parse-and-convert-toint32)
