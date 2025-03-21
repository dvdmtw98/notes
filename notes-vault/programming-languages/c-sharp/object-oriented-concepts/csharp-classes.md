---
title: CSharp Classes
tags:
  - programming
  - csharp
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-31 10:34:10 -0600
---

Class member can be of two type:  
* **Instance** : Accessed from a Object
* **Static** : Accessed from a Class

Static members are used to implement logic that is common/ shared across all the instance of the class (There is only one copy of the member in memory)

### Alternate Object Initialization Syntax

* When we use this approach the default [[csharp-constructor|constructor]] of the class is first called and the then the attributes passed by the users are set
* Its useful as it reduces the number of constructors that need to be written. With this approach we only need to write constructors for attributes that absolutely need to be initialized (reference type attributes)

````csharp
Person p1 = new Person { firstName = "David", lastName = "Varghese" };
p1.Introduce();
````
