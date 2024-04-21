---
tags:
  - programming
  - csharp
  - index
title: C Sharp
date: 2024-01-28 14:15:56 -0600
updated: 2024-04-14 20:21:32 -0500
---

### Table of Content

1. **Theoretical Concepts**
	* [[dotnet-framework-intoduction|.NET Framework Introduction]]
	* [[clr-common-language-runtime|CLR (Common Language Runtime)]]
	* [[dotnet-implementations|.NET Implementations]]
	* [[architecture-of-net-application|Architecture of .NET Application]]
	* [[reference-type-vs-value-type|Reference Type vs. Value Type]]
	* [[association-aggregation-and-composition|Association, Aggregation and Composition]]
	* [[dependency-injection|Dependency Injection]]
2. **Fundamental Concepts**
	* [[csharp-primitives-datatype|C Sharp Primitives Datatype]]
	* [[chsarp-datetime-and-timespan|C Sharp Datetime and Timespan]]
	* [[csharp-casting-datatype|C Sharp Casting Datatype]]
	* [[csharp-arithmetic-operators|C Sharp Arithmetic Operators]]
	* [[csharp-arrays|C Sharp Arrays]]
	* [[csharp-dynamic-arrays|C Sharp Dynamic Arrays]]
	* [[csharp-strings|C Sharp Strings]]
	* [[csharp-enums|C Sharp Enums]]
	* [[csharp-user-input|C Sharp User Input]]
	* [[csharp-control-flow-statements|C Sharp Control Flow Statements]]
	* [[chsarp-iteration-statements|C Sharp Iteration Statements]]
	* [[csharp-file-operations|C Sharp File & Directory Operations]]
3. **Object Oriented Concepts**
	* [[csharp-classes|C Sharp Classes]]
	* [[csharp-constructor|C Sharp Constructor]]
	* [[csharp-methods|C Sharp Methods]]
	* [[fields|Fields]]
	* [[access-modifiers|Access Modifiers]]
	* [[properties|Properties]]
	* [[csharp-indexers|C Sharp Indexers]]
	* [[csharp-inheritance|C Sharp Inheritance]]
	* [[composition|Composition]]
	* [[csharp-upcasting-downcasting|C Sharp Upcasting Downcasting]]
	* [[boxing-and-unboxing|Boxing and Unboxing]]
	* [[method-overriding|Method Overriding]]
	* [[abstract-and-sealed-class|Abstract & Sealed Class]]
	* [[interface|Interface]]
	* [[structs|Structs]]
4. **Advanced Concepts**
	* [[csharp-generics|Generics]]
	* [[csharp-lambda-expression|Lambda Expression]]
	* [[extension-methods|Extension Methods]]

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

### Miscellaneous Points

#### New Keyword
The new keyword is used to allocate memory for an instance of an object

#### C# Objects
All objects in C# have a `ToString()` method which makes it easy to convert any datatype to string (This method is inherited from the Object Class which is the base class for all objects)

#### Object Initialization
During object initialization all reference type objects are set to null. If need to pass a reference type object to a class always initialize it using a Constructor to avoid Null Exception

#### Var Datatype
The var datatype cannot be used to declare fields in the class scope (Class Fields). If used the variable has to be initialized and declared on the same line

#### Named and Optimal Arguments
Named arguments can be used when we don't know the order of arguments to be passed to the method

````csharp
// Named Arguments 
PrintOrderDetails(productName: "Red Mug", sellerName: "Gift Shop", orderNum: 31);

// Optional Arguments 
public void ExampleMethod(int required, string optionalstr = "default string", int optionalint = 10) {}
````

#### Predicate Functions
Functions that return a Boolean result is called as predicate function
