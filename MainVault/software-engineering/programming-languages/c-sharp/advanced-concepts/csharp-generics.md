---
tags:
  - programming
  - csharp
title: CSharp Generics
date: 2024-01-28 14:15:56 -0600
---

Generics is an feature that allows us to define placeholder datatypes for [[csharp-classes|Classes]], [[csharp-methods|Methods]], [[interface|Interfaces]], etc. which will be replaced by a specific datatype at compile time  
It allows to write class or method that can work with any datatype (Code Reuse)  
Generics can be declared at the Class Level or at the Method Level. A non generic class can contain generic methods  
We can implement constraints on the generic datatype as well using the "where" keyword. This can be specified at the class or method level

````csharp
using System;

namespace Generics
{
	public class Nullable<T> where T : struct
	{
		private Object _value;

		public Nullable() { }

		public Nullable(T value)
		{
			_value = value;
		}

		public bool HasValue
		{
			get { return _value != null; }
		}

		public T GetValueOrDefault()
		{
			if (HasValue)
				return (T)_value;

			return default(T);
		}
	}

	public class DiscountCalculator<TProduct> where TProduct : Product
	{
		public void CalculateDiscount(TProduct product)
		{
			Console.WriteLine(product.Price);
		}
	}

	public class Product
	{
		public int Price { get; set; }
		public int Name { get; set; }
	}

	public class Utilities
	{
		public int Max(int a, int b)
		{
			return a > b ? a : b;
		}

		public T Max<T>(T a, T b) where T : IComparable
		{
			return a.CompareTo(b) > 0 ? a : b;
		}

		public void DoSomething<T>(T value) where T : new()
		{
			var obj = new T();
		}
	}

	class Program
	{
		static void Main(string[] args)
		{
			var utils = new Utilities();
			Console.WriteLine(utils.Max<int>(4, 8));

			var product = new Product();
			var discount = new DiscountCalculator<Product>();
			discount.CalculateDiscount(product);

			var nullable = new Nullable<int>(5);
			Console.WriteLine(nullable.HasValue);
			Console.WriteLine(nullable.GetValueOrDefault());
		}
	}
}
````

[C# - Generics](https://www.tutorialspoint.com/csharp/csharp_generics.htm)  
[Constraints on type parameters - C# Programming Guide | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/generics/constraints-on-type-parameters)
