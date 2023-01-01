* They are anonymous [methods](../Object%20Oriented%20Concepts/CSharp%20Methods.md) they have `no name, no access modifiers` and `no return values`
* Lambda functions have access to all the attributes that are passed to it and the variables that are defined/ accessible in the function in which the lambda expression is created
* When the lambda expression takes no parameter we use (), when it takes a single parameter the parenthesis can be skipped and when there are multiple parameters they need to wrapped in parenthesis
* They are mostly commonly used with methods that require `predicate function` as a argument

````csharp
class Program
{
	static void Main(string[] args)
	{	

		Func<int, int> square = number => number * number;
		Console.WriteLine(square(5));

		int factor = 5;
		Func<int, int> multipler = number => number * factor;
		Console.WriteLine(multipler(10));

		// Predicate Function Usecase
		var list = new List<int>(new int[] { 1, 2, 3, 4, 5 });
		var filteredList = list.Where<int>(elem => elem >= 3);
		foreach (var item in filteredList)
		{
			Console.WriteLine(item);
		}
	}
}
````
