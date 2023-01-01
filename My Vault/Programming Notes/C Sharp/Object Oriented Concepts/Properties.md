* It is a class method that encapsulates a getter and setter for accessing the class fields
* When can define just a getter or just a setter if required
* A property without a getter is a read-only and one without a setter is write-only
* The setter is passed an `implicit field` called `value` which holds the value passed by the user that needs to be stored in the field

### Auto-Properties

* When we just want to set and get the value of fields (not perform any validation) we can use auto-implemented properties to write even lesser code
* The field declared using auto-implemented properties is always private (Internally a private backing field is created for holding the values)
* When using auto-implemented properties both the set and the get method have to be defined (The Setter can be made private to prevent usage)
* Auto-implemented properties should be placed at the top of the class followed by the [Constructor](CSharp%20Constructor.md) and then Properties (Convention)

In place of `private set;` the `init;` keyword can also be used to define a Property that can only be set at initialization and then only read

````csharp
namespace Properties
{
		public class Person
		{
			public string Name { get; set; }
			// By making set private we prevent the field 
			// from being modified by the user
			public DateTime Birthdate { get; private set; }

			public Person(DateTime birthdate)
			{
				Birthdate = birthdate;
			}

			public int Age
			{
				get
				{
					var timeDifference = DateTime.Today - Birthdate;
					var years = timeDifference.Days / 365;
					return years;
				}
			}
		}

		class Program
		{
			static void Main(string[] args)
			{
				var person = new Person(new DateTime(1998, 6, 18));
				// Calls Getter of the Age Property
				Console.WriteLine(person.Age);
			}
		}
}
````

---

**<u>References</u>**:

* [Properties - C# Programming Guide | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/properties)
* [Set Default Value to Property in C#](https://www.tutorialsteacher.com/articles/set-default-value-to-property-in-csharp)
