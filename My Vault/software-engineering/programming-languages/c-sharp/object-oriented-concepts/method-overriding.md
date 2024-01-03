---
tags:
- programming
- csharp
title: Method Overriding
---

* When the method that is defined in the parent [class](csharp-classes.md) is redefined by the [method](csharp-methods.md) of the child class we say that the method has been overriding
* For method overriding the methods should have the exact `same signature` (Method name, No. of Parameters and Parameter Type)
* For making a method overridable in the child class the parent class method needs to be marked with the `virtual` or `abstract` keyword and the new method that will  be declared in the child class should be defined with the `override` keyword

````csharp
using System;
using System.Collections.Generic;

namespace MethodOverriding
{
		public class Canvas
		{
			public void DrawShapes(List<Shape> shapes)
			{
				foreach (var shape in shapes)
				{
					shape.Draw();
				}
			}
		}

		public class Circle : Shape
		{
			public override void Draw()
			{
				Console.WriteLine("Drawing Circle");
			}
		}

		public class Rectangle : Shape
		{
			// Overridden Method
			public override void Draw()
			{
				Console.WriteLine("Drawing Rectangle");
			}
		}

		public class Shape
		{
			public int Width { get; set; }
			public int Height { get; set; }

			// Parent class Method
			public virtual void Draw()
			{
				Console.WriteLine("Parent Draw Method");
			}
		}		

		class Program
		{
			static void Main(string[] args)
			{
				List<Shape> shapes = new List<Shape>();
				shapes.Add(new Circle());
				shapes.Add(new Rectangle());

				Canvas canvas = new Canvas();
				canvas.DrawShapes(shapes);
			}
		}
}
````