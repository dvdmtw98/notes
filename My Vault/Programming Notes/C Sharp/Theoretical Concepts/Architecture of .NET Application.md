---
title: Architecture of .NET Application
---

At a very high level C# code comprises of [Classes](../Object%20Oriented%20Concepts/CSharp%20Classes.md)  
A namespace is an container for holding related classes  
An assembly is an container for related Namespaces  
A assembly can be a executable file (EXE) or an DLL (Dynamically Linked Library)  
When we compile our application the compiler builds one or more assembly based on how we have partitioned the code

---

### Project vs. Solution

An Project is an set of files that produces an single Assembly (Executable File)  
An Solution is an collection of Projects that each generate its own Assemblies  
Solution helps to keep track of the dependencies of each project  
It also keeps track of the relations between the different project

![Project vs Solution|450](../images/project-vs-solution.png)