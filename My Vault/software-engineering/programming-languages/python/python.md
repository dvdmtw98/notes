---
title: Python
---

### Table of Content

1. **Theoretical Concepts**
	* [Association, Aggregation and Composition](../../software-concepts/association,-aggregation-and-composition.md)
	* [Reference Type vs. Value Type](../../software-concepts/reference-type-vs-value-type.md)
	* [Memory Management (Programming Languages)](../../software-concepts/memory-management-programming-languages.md)
		* [Python Memory Management](theoretical-concepts/python-memory-management.md)
		* [Stack and Heap Memory](../../software-concepts/stack-and-heap-memory.md)
1. **Fundamental Concepts**
	* [Bitwise Operator](fundamental-concepts/bitwise-operator.md)
	* [Python Strings](fundamental-concepts/python-strings.md)
		* [Python String Formatting](fundamental-concepts/python-string-formatting.md)
	* [Python Iteration & Control Flow Statements](fundamental-concepts/python-iteration-and-control-flow-statements.md)
	* [Python Functions](fundamental-concepts/python-functions.md)
	* [Python Collections](fundamental-concepts/python-collections.md)
	* [Python Comprehension](fundamental-concepts/python-comprehension.md)
		* [Python Generators](fundamental-concepts/python-generators.md)
	* [Python Exception Handling](fundamental-concepts/python-exception-handling.md)
	* [Python File Operations](fundamental-concepts/python-file-operations.md)
2. **Object Oriented Concepts**
	* [Python Classes](object-oriented-concepts/python-classes.md)
	* [Python Constructor](object-oriented-concepts/python-constructor.md)
	* [Python Methods](object-oriented-concepts/python-methods.md)
	* [Attributes](object-oriented-concepts/attributes.md)
	* [Property](object-oriented-concepts/property.md)
	* [Python Access Modifiers](object-oriented-concepts/python-access-modifiers.md)
	* [Python Inheritance](object-oriented-concepts/python-inheritance.md)
	* [Python Method Overriding](object-oriented-concepts/python-method-overriding.md)
	* [Python Abstract Class & Method](object-oriented-concepts/python-abstract-class-and-method.md)
3. **Advanced Concepts**
	- [Python Metaclasses](advanced-concepts/python-metaclasses.md)
	- [Python Variable Scopes](advanced-concepts/python-variable-scopes.md)
	- [Python Async Programming](advanced-concepts/python-async-programming.md)

---

### Best Practices & Coding Conventions

* Variables should be declared in Snake Case
* Constants should be declared in All Caps
* Classes should be declared using Pascal Case
* When using triple quote string we should use double quotes

---

### Useful Commands

````powershell
# Creating Virtual Environment
python -m venv <env-name>
<env-name>\Scripts\activate
deactivate

# Deleting Virtual Environment
rmdir <env-name> /s

# Creating Requirements File
pip freeze > requirements.txt

# Deleting Pip Cache
pip cache dir
pip cache purge
pip cache remove <package-name>

# Opens the function docstring
python -m pydoc <function-name>

# Run the code and open REPL
python -i <application-name>
````

---

### Miscellaneous Points

1. The `zfill()` command can be used to add zero's to the start of a string. The total length of the string is passed as parameter.
2. The `ord()` function returns the Unicode representation of the input character. The `chr()` function is used to perform the reverse operation.
3. The `partition()` function is used split a string always into three parts **(Everything before matched term, the matched term, everything after matched term)**. If no match the entire string is returned as first term.
4. The `if __name__ == '__main__'` syntax can be used as an entry point (main function) in Python. When we run a python application a variable called `__name__` is created which will be equal to `__main__` for the main script file
5. As of Python 3.7 dictionaries are treated as a `ordered collection` (Insertion order is maintained)
6. The `dir()` function is an inbuilt function in python which returns the list of valid attributes and methods of a given objects
7. Python does not have static attributes like in other programming languages. Attributes set using the constructor are instance attributes while the one declared in the class body but not in any method are class attributes
8. Python does not support the concept of Method Overloading (Same function name different parameters)
9. `re.match()` is as adding `^` to the match condition
10. Replacing the code of a function from a class during runtime is called as Monkey Patching

---

[Programming Languages](../programming-languages.md)