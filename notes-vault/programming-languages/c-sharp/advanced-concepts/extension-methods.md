---
title: Extension Methods
tags:
  - programming
  - csharp
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

Allows to add methods to a class without changing its source code or creating a new class without inheriting it  
The extension methods need to be of **static type** and should belong in a **static Class**

The Class name by convention should be Datatype being extended followed by the Extensions word  
The first Argument to the Extension Method has to be `this <classToExtend> <name>`

````csharp
namespace ExtensionMethods
{
	public class Program
	{
		public static void Main(string[] args)
		{
			var post = "This is a very long post need to shorten it";
			var shortenedString = post.Shorten(5);
		}
	}

	public static class StringExtensions
	{
		public static string Shorten(this String inputString, int numOfWords)
		{
			var words = inputString.Split(" ");
			return string.Join(" ", words.Take(numOfWords)) + "...";
		}
	}
}
````
