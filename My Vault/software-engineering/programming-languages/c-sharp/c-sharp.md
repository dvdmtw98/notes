---
tags:
- programming
- csharp
- index
title: C Sharp
---

### Table of Content

1. **Theoretical Concepts**
	* [.NET Framework Introduction](theoretical-concepts/dotnet-framework-intoduction.md)
	* [CLR (Common Language Runtime)](theoretical-concepts/clr-common-language-runtime.md)
	* [.NET Implementations](theoretical-concepts/dotnet-implementations.md)
	* [Architecture of .NET Application](theoretical-concepts/architecture-of-net-application.md)
	* [Reference Type vs. Value Type](../../software-concepts/reference-type-vs-value-type.md)
	* [Association, Aggregation and Composition](../../software-concepts/association-aggregation-and-composition.md)
	* [Dependency Injection](dependency-injection.md)
2. **Fundamental Concepts**
	* [Primitives Datatype](fundamental-concepts/primitives-datatype.md)
	* [Casting Datatype](fundamental-concepts/casting-datatype.md)
	* [Arithmetic Operators](fundamental-concepts/arithmetic-operators.md)
	* [CSharp Arrays](fundamental-concepts/csharp-arrays.md)
	* [Lists (Dynamic Arrays)](fundamental-concepts/lists-dynamic-arrays.md)
	* [Strings](fundamental-concepts/strings.md)
	* [Enums](fundamental-concepts/enums.md)
	* [CSharp User Input](fundamental-concepts/csharp-user-input.md)
	* [Control Flow Statements](fundamental-concepts/control-flow-statements.md)
	* [Iteration Statements](fundamental-concepts/iteration-statements.md)
	* [Datetime and Timespan](fundamental-concepts/datetime-and-timespan.md)
	* [File & Directory Operations](fundamental-concepts/file-and-directory-operations.md)
3. **Object Oriented Concepts**
	* [CSharp Classes](object-oriented-concepts/csharp-classes.md)
	* [CSharp Constructor](object-oriented-concepts/csharp-constructor.md)
	* [CSharp Methods](object-oriented-concepts/csharp-methods.md)
	* [Fields](object-oriented-concepts/fields.md)
	* [Access Modifiers](object-oriented-concepts/access-modifiers.md)
	* [Properties](object-oriented-concepts/properties.md)
	* [CSharp Indexers](object-oriented-concepts/csharp-indexers.md)
	* [CSharp Inheritance](object-oriented-concepts/csharp-inheritance.md)
	* [Composition](object-oriented-concepts/composition.md)
	* [Upcasting and Downcasting](object-oriented-concepts/upcasting-and-downcasting.md)
	* [Boxing and Unboxing](object-oriented-concepts/boxing-and-unboxing.md)
	* [Method Overriding](object-oriented-concepts/method-overriding.md)
	* [Abstract & Sealed Class](object-oriented-concepts/abstract-and-sealed-class.md)
	* [Interface](object-oriented-concepts/interface.md)
	* [Structs](object-oriented-concepts/structs.md)
4. **Advanced Concepts**
	* [Generics](advanced-concepts/csharp-generics.md)
	* [Lambda Expression](advanced-concepts/csharp-lambda-expression.md)
	* [Extension Methods](advanced-concepts/extension-methods.md)

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

[Programming Languages](../programming-languages.md)