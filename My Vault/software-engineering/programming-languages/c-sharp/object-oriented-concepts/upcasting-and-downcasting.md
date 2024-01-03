---
tags:
- programming
- csharp
title: Upcasting and Downcasting
---

**Upcasting**: Creating a base (Parent) [class](csharp-classes.md) reference from a subclass (Child) reference.   Upcasting is performed explicitly (No need of casting)

**Downcasting**: Creating a subclass (Child) class reference from a base (Parent) class reference

### Is and As Keyword

The "Is" keyword is used to check if an object is of a particular type  
The "As" keyword is used to convert from one type to another in a safe way without raising any Exception. If casting is not possible it will return null

[Up-casting and Down-casting in C# Inheritance - Interview Sansar](https://www.interviewsansar.com/up-casting-and-down-casting-in-csharp-interview-qa/)

````csharp
using System;

namespace UpcastingDowncasting
{
		public class Text : Shape
		{
			public int FontSize { get; set; }
			public string FontText { get; set; }
		}

		public class Shape
		{
			public int Width { get; set; }
			public int Height { get; set; }
			public int X { get; set; }
			public int Y { get; set; }

			public void Draw()
			{
				Console.WriteLine("Draw from the Shape Class");
			}
		}

		class Program
		{
			static void Main(string[] args)
			{
				// Upcasting
				Text text = new Text();
				Shape shape = text;

				text.Width = 200;
				shape.Width = 100;
				Console.WriteLine(shape.Width);

				// Downcasting
				Shape shape1 = new Text();
				Text text1 = (Text)shape1;
				Console.WriteLine(text1.FontSize);

				// Check type of variable
				if (text1 is Text)
					Console.WriteLine("Object Type : Text");

				// Try to Cast
				Text text2 = shape1 as Text;
				if (text2 != null)
					Console.WriteLine("Conversion Successful");
			}
		}
}
````

 > [!note]
 > When we perform upcasting and/ or downcasting both references are still pointing to the same object just the view of the object changes