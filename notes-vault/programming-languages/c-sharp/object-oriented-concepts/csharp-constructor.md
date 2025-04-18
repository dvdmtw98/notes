---
title: CSharp Constructor
tags:
  - programming
  - csharp
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

* It is used to initialize the [[csharp-fields|Fields]] in a [[csharp-classes|Class]]. It has the same name as the class and does not have a return type
* If we do not create a default/ parameter less constructor the  C# compiler will automatically create one and initialize all the attributes in the class to its "default value"
* We should always initialize reference type variables as their default value is null so when we use them we might get "Null Exception"
* `Constructor Overloading` is the concept of creating multiple constructors for the class but with difference signature (Difference no. of parameters, different order and different datatype)
* The `this` keyword is used to differentiate between the method parameters and the class fields (If the names are different it can be skipped)
* The `this()` method is used to pass the execution from the current constructor to another constructor (Use sparingly as it makes the flow difficult to understand)

````csharp
using System;
using System.Collections.Generic;

namespace Constructors
{
		public class Order
		{

		}

		public class Customer
		{
			public int Id;
			public string Name;
			public List<Order> Orders;

			public Customer()
			{
				Orders = new List<Order>();
			}

			public Customer(int id) : this()
			{
				this.Id = id;
			}

			public Customer(int id, string name) : this(id)
			{
				this.Name = name;
			}
		}

		class Program
		{
			static void Main(string[] args)
			{
				var person = new Customer(1, "David");
				Console.WriteLine(person.Id);
				Console.WriteLine(person.Name);
			}
		}
}
````

[Static Constructors - C# Programming Guide | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/static-constructors)
