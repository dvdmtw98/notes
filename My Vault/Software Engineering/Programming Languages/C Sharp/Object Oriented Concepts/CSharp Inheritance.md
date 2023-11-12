---
tags: [programming, csharp]
---

* In C# we can only inherit from only one parent class (If the parent object is deleted the child object can still exist)
* The `Object Class` is the parent class of all classes in C# and is automatically inherited
* Inheritance establishes an "Is-A" type of relation between [Classes](CSharp%20Classes.md)

````csharp
namespace Inheritance
{
		public class PresentationObject
		{
			public int Width { get; set; }
			public int Height { get; set; }

			public void Copy()
			{
				Console.WriteLine("Object copied to Clipboard");
			}

			public void Duplicate()
			{
				Console.WriteLine("Objected has been duplicated");
			}
		}

		public class Text : PresentationObject
		{
			public int getSize { get; set; }
			public int getFont { get; set; }

			public void GetAttribute(string value)
			{
				Console.WriteLine("{0} has been copied to clipboard", value);
			}
		}

		class Program
		{
			static void Main(string[] args)
			{
				var text = new Text();
				text.Copy();
			}
		}
}
````

### Accessing Base Class Constructor/ Methods

* Base class [Constructors](CSharp%20Constructor.md) are always executed first. Base class constructors are not inherited by the child class
* To pass values to the constructor of the base class we make use of the `base()` function
* The methods of the Base class can be accessed using `base.MethodName()`

````csharp
using System;

namespace Constructors
{
    public class Vechicle
    {
        private readonly string _registerationNumber;

        public Vechicle(string registerationNumber)
        {
            _registerationNumber = registerationNumber;
            Console.WriteLine($"Inside Vechicle Constructor : {registerationNumber}");
        }
    }

    public class Car : Vechicle
    {
        public Car(string registerationNumber) : base(registerationNumber)
        {
            Console.WriteLine($"Inside Car Constructor : {registerationNumber}");
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            var car1 = new Car("ABC123");
        }
    }
}
````
