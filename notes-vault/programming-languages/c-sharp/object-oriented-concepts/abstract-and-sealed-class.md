---
title: Abstract & Sealed Class
tags:
  - programming
  - csharp
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

* In the parent class if we do not implement the logic for a [[csharp-methods|method]] (As the method should be [[method-overriding|overriden]] in the child classes) then we make use of the abstract class
* When we mark a method as abstract then the class that contains it also needs to be converted into a abstract class (Abstract class can have non abstract members)
* When inheriting an abstract class the derived class "must implement all" the abstract members
* Abstract classes cannot be instantiated

````csharp
using System;

namespace AbstractClass
{
		public class Circle : Shape
		{
			public override void Draw()
			{
				Console.WriteLine("Drawing Circle");
			}
		}

		public abstract class Shape
		{
			public int Width { get; set; }
			public int Height { get; set; }

			// Abstract Method Declaration
			public abstract void Draw();

			public void Copy()
			{
				Console.WriteLine("Copying Shape to Clipboard");
			}
		}

		class Program
		{
			static void Main(string[] args)
			{
				Circle circle = new Circle();
				circle.Draw();
			}
		}
}
````

### Sealed Classes & Members

* Sealed [[csharp-classes|Classes]] are the opposite of Abstract Members
* When applied to a class that class cannot be derived from and when applied to a method the method cannot be overridden
* Sealed Keyword is supposed to provide a slight speed improvement because of run-time optimization
* Sealed Keyword in not commonly used and should not be used unless there are some very specific reason for using it
