---
tags: [programming, csharp]
---

For working with Files we need to import the `System.IO` namespace

### File and FileInfo Class

Provides methods for creating, copying, moving, deleting and editing files.  
FileInfo provides Instance methods while File provides static methods  
When a lot of operations need to be performed the recommendation is to use FileInfo class.  
A permission check is performed by C# for security reasons this is only performed once when using the Instance Method

### Directory and DirectoryInfo Class

Similar to File and FileInfo but used for working with directories

### Path Class

Provides methods that allow us to work with string that contains information about a file path or directory path

 > [!info]
 > * The `using` statement in C# is similar to the "with" Context Manager in Python
 > * It is used to call the Dispose() method explicitly which when a resource is not needed anymore

---

**<u>References</u>**:

* [using statement - C# Reference | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/using-statement)
