---
tags:
- programming
- csharp
title: CSharp User Input
---

### Read Method

Even if the user enters multiple characters as input only the 1st character is returned

````csharp
// Returns ASCII value of the entered character
int userInput1 = Console.Read();
System.Console.WriteLine(userInput1);
````

### ReadLine Method

````csharp
// Returns the characters entered till Enter is pressed
string userInput2 = Console.ReadLine();
System.Console.WriteLine(userInput2);
````

### ReadKey Method

When a modifier (Ctrl, Alt and Shift) is not present 0 is returned as result

````csharp
// Returns a ConsoleKeyInfo object of the key pressed by user (Prints it automatically)
ConsoleKeyInfo userInput3 = Console.ReadKey();
System.Console.WriteLine();

// Returns a reprsentation of the key pressed (ConsoleKey)
System.Console.WriteLine(userInput3.Key);

// Returns Unicode representation of Key pressed (Char)
System.Console.WriteLine(userInput3.KeyChar);

// Returns the modifer key pressed if any (ConsoleModifiers)
System.Console.WriteLine(userInput3.Modifiers);
System.Console.WriteLine(userInput3.Modifiers);
````