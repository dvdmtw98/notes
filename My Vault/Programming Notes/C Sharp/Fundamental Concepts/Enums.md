---
title: Enums
---

An Enum is an object that is used to group together multiple similar constants  
A Enum is internally stored as a Integer. It can be changed to Byte if required  
It is an User Defined Value Type Datatype

### Declaring Enum

* Enum being a new object type needs to be defined at the Namespace level
* We can declare Enums without specifying any value as well, in this case the 1st element will have the value 0

````csharp
public enum ShippingMethod
{
    Regular = 1,
    Registered = 2,
    Express = 3
}
````

### Using Enum

* Since internally Enums are integers by type casting the Enum value to int we can get the integer value
* By using the Enum name as cast we can convert a integer to its respective Enum type as well

````csharp
var method = ShippingMethod.Express; // var resolves to ShippingMethod
System.Console.WriteLine(method); // Express
System.Console.WriteLine((int)method); // 3

int shipping = 2;
System.Console.WriteLine((ShippingMethod)shipping); // Registered
````