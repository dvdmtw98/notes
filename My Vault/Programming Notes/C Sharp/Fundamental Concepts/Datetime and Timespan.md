### Datetime

The DateTime objects in C# are immutable they cannot be modified once they are created  
When we don’t specify the time it defaults to 12:00:00 AM

[Custom date and time format strings | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings)

````csharp
DateTime date1 = new DateTime(2015, 1, 1);

var now = DateTime.Now;
Console.WriteLine(now.Year);
Console.WriteLine(now.Day);

var today = DateTime.Today;
var tomorrow = today.AddDays(1);
var yesterday = today.AddDays(-1);

Console.WriteLine(now.ToLongDateString()); // 3 October, 2021
Console.WriteLine(now.ToShortDateString()); // 10/3/2021
Console.WriteLine(now.ToLongTimeString()); // 7:03:16 PM
Console.WriteLine(now.ToShortTimeString()); // 7:03 PM

Console.WriteLine(now.ToString("yyyy-MM-dd HH:mm")); // 2021-10-03 19:03
````

### Timespan

It is an immutable datatype similar to DateTime  
The difference between two DateTime objects is always a TimeSpan

The Total methods will return the value of the time span object in the selected units.

The Parse Method can be used to convert a String to a TimeSpan Object

````csharp
var timeSpan1 = new TimeSpan(1, 0, 0);

// Alternate approach to initialize (Can only be used for a single field)
var timeSpan2 = TimeSpan.FromHours(1);

Console.WriteLine("Minutes: {0}", timeSpan2.Minutes); // 0
Console.WriteLine("Total Minutes: {0}", timeSpan2.TotalMinutes);

Console.WriteLine("Add TimeSpan: {0}", timeSpan1.Add(TimeSpan.FromMinutes(4)));
var newTimeSpan = TimeSpan.Parse("01:02:03");
````
