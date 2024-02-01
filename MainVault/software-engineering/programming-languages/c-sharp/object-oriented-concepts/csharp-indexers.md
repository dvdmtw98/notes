---
tags:
  - programming
  - csharp
title: CSharp Indexers
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-31 10:34:21 -0600
---

* Allows an instance of an [[csharp-classes|Class]] or [[structs|Structs]] to be indexed just like an array
* Indexers do not have a name and are created using the `this[]` keyword and has similar syntax to properties

````csharp
using System;
using System.Collections.Generic;

namespace Indexer
{
    public class HttpCookie
    {
        private readonly Dictionary<string, string> _dictionary;
        public DateTime Expiry { get; set; }

        public HttpCookie()
        {
            _dictionary = new Dictionary<string, string>();
        }

        public string this[string key]
        {
            get { return _dictionary[key]; }
            set { _dictionary[key] = value; }
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            var cookie = new HttpCookie();
            cookie["name"] = "David";
            Console.WriteLine(cookie["name"]);
        }
    }
}
````

### Enumerable

The `GetEnumerate()` method is used to return an read-only copy of an Collection that can be used to iterate over objects without having to expose the actual collection

````csharp
public class Workflow
{
    private readonly IList<IActivity> _workflow;

    public Workflow()
    {
        _workflow = new List<IActivity>();
    }

    public void Add(IActivity activity)
    {
        _workflow.Add(activity);
    }
		
    public IEnumerable<IActivity> GetActivities()
    {
        return _workflow;
    }
}
````

[Indexers - C# Programming Guide | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/indexers/)  

[Indexers in C#](https://www.c-sharpcorner.com/uploadfile/puranindia/indexers-in-C-Sharp/)  

[C# | Get an enumerator that iterates through the List - GeeksforGeeks](https://www.geeksforgeeks.org/c-sharp-get-an-enumerator-that-iterates-through-the-list/)
