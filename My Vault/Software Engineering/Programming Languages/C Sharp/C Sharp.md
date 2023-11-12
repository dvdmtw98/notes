---
tags: [programming, csharp, index]
---

### Table of Content

1. **Theoretical Concepts**
	* [.NET Framework Introduction](Theoretical%20Concepts/Dotnet%20Framework%20Intoduction.md)
	* [CLR (Common Language Runtime)](Theoretical%20Concepts/CLR%20%28Common%20Language%20Runtime%29.md)
	* [.NET Implementations](Theoretical%20Concepts/Dotnet%20Implementations.md)
	* [Architecture of .NET Application](Theoretical%20Concepts/Architecture%20of%20.NET%20Application.md)
	* [Reference Type vs. Value Type](../../Software%20Concepts/Reference%20Type%20vs.%20Value%20Type.md)
	* [Association, Aggregation and Composition](../../Software%20Concepts/Association,%20Aggregation%20and%20Composition.md)
	* [Dependency Injection](Dependency%20Injection.md)
2. **Fundamental Concepts**
	* [Primitives Datatype](Fundamental%20Concepts/Primitives%20Datatype.md)
	* [Casting Datatype](Fundamental%20Concepts/Casting%20Datatype.md)
	* [Arithmetic Operators](Fundamental%20Concepts/Arithmetic%20Operators.md)
	* [CSharp Arrays](Fundamental%20Concepts/CSharp%20Arrays.md)
	* [Lists (Dynamic Arrays)](Fundamental%20Concepts/Lists%20%28Dynamic%20Arrays%29.md)
	* [Strings](Fundamental%20Concepts/Strings.md)
	* [Enums](Fundamental%20Concepts/Enums.md)
	* [CSharp User Input](Fundamental%20Concepts/CSharp%20User%20Input.md)
	* [Control Flow Statements](Fundamental%20Concepts/Control%20Flow%20Statements.md)
	* [Iteration Statements](Fundamental%20Concepts/Iteration%20Statements.md)
	* [Datetime and Timespan](Fundamental%20Concepts/Datetime%20and%20Timespan.md)
	* [File & Directory Operations](Fundamental%20Concepts/File%20&%20Directory%20Operations.md)
3. **Object Oriented Concepts**
	* [CSharp Classes](Object%20Oriented%20Concepts/CSharp%20Classes.md)
	* [CSharp Constructor](Object%20Oriented%20Concepts/CSharp%20Constructor.md)
	* [CSharp Methods](Object%20Oriented%20Concepts/CSharp%20Methods.md)
	* [Fields](Object%20Oriented%20Concepts/Fields.md)
	* [Access Modifiers](Object%20Oriented%20Concepts/Access%20Modifiers.md)
	* [Properties](Object%20Oriented%20Concepts/Properties.md)
	* [CSharp Indexers](Object%20Oriented%20Concepts/CSharp%20Indexers.md)
	* [CSharp Inheritance](Object%20Oriented%20Concepts/CSharp%20Inheritance.md)
	* [Composition](Object%20Oriented%20Concepts/Composition.md)
	* [Upcasting and Downcasting](Object%20Oriented%20Concepts/Upcasting%20and%20Downcasting.md)
	* [Boxing and Unboxing](Object%20Oriented%20Concepts/Boxing%20and%20Unboxing.md)
	* [Method Overriding](Object%20Oriented%20Concepts/Method%20Overriding.md)
	* [Abstract & Sealed Class](Object%20Oriented%20Concepts/Abstract%20&%20Sealed%20Class.md)
	* [Interface](Object%20Oriented%20Concepts/Interface.md)
	* [Structs](Object%20Oriented%20Concepts/Structs.md)
4. **Advanced Concepts**
	* [Generics](Advanced%20Concepts/CSharp%20Generics.md)
	* [Lambda Expression](Advanced%20Concepts/CSharp%20Lambda%20Expression.md)
	* [Extension Methods](Advanced%20Concepts/Extension%20Methods.md)

---

### Common Commands

````powershell
dotnet --info 

# View all templates 
dotnet new

# Create new console template 
dotnet new console [--framework net5.0] [-o <project-name>]

# Run code in dev mode 
dotnet run
````

[Create a .NET class library using Visual Studio Code - .NET | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/core/tutorials/library-with-visual-studio-code)

---

### Best Practices and Coding Convention

* For Local variables, Method parameters use Camel Case
* For Constants, Method names, Class Names, Public Class Fields and Properties use Pascal Case
* Class Fields that are private should be written in Camel Case with a leading underscore (e.g. `_firstName`)
* Interface names should start with capital "I" and be in Pascal Case (ITaxCalculator)
* When creating Generic types the name should start with "T" followed by name in Pascal Case (TKey, TValue)
* Only one class should below to an file and the filename should be came as the class name
* Avoid using Ref and Out Method Modifiers as they are seen as code smell and makes the flow difficult to understand
* Auto-implemented properties should be placed at the top of the class followed by the Constructor and then Properties
* Avoid using Protected and Protected Internal Access Modifiers whenever possible
* Should avoid Boxing and Unboxing of fields whenever possible

---

### Miscellaneous Points

1. <u>New Keyword</u>  
   The new keyword is used to allocate memory for an instance of an object

2. <u>C# Objects</u>  
   All objects in C# have a `ToString()` method which makes it easy to convert any datatype to string (This method is inherited from the Object Class which is the base class for all objects)

3. <u>Object Initialization</u>  
   During object initialization all reference type objects are set to null. If need to pass a reference type object to a class always initialize it using a Constructor to avoid Null Exception

4. <u>Var Datatype</u>  
   The var datatype cannot be used to declare fields in the class scope (Class Fields). If used the variable has to be initialized and declared on the same line

5. <u>Named and Optimal Arguments</u>  
   Named arguments can be used when we don't know the order of arguments to be passed to the method

````csharp
// Named Arguments 
PrintOrderDetails(productName: "Red Mug", sellerName: "Gift Shop", orderNum: 31);

// Optional Arguments 
public void ExampleMethod(int required, string optionalstr = "default string", int optionalint = 10) {}
````

6. <u>Predicate Functions</u>  
   Functions that return a Boolean result is called as predicate function

---

[Programming Languages](../Programming%20Languages.md)
