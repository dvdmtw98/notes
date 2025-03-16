---
title: Python
tags:
  - index
  - programming
  - python
date: 2024-01-28 14:15:56 -0600
updated: 2024-05-10 08:59:25 -0500
---

### Table of Content

1. **Theoretical Concepts**
	* [[association-aggregation-and-composition|Association, Aggregation and Composition]]
	* [[reference-type-vs-value-type|Reference Type vs. Value Type]]
	* [[program-memory-management|Memory Management]]
		* [[python-memory-management|Python Memory Management]]
		* [[stack-and-heap-memory|Stack and Heap Memory]]
1. **Core Concepts**
	* [[bitwise-operator|Bitwise Operator]]
	* [[python-strings|Python Strings]]
		* [[python-string-formatting|Python String Formatting]]
	* [[python-control-flow-and-loops|Python Control Flow & Loops]]
	* [[python-functions|Python Functions]]
	* [[python-collections|Python Collections]]
	* [[python-comprehension|Python Comprehension]]
		* [[python-generators|Python Generators]]
	* [[python-exception-handling|Python Exception Handling]]
	* [[python-file-operations|Python File Operations]]
2. **Object Oriented Concepts**
	* [[python-classes|Python Classes]]
	* [[python-constructor|Python Constructor]]
	* [[python-methods|Python Methods]]
	* [[attributes|Attributes]]
	* [[python-property|Python Properties]]
	* [[python-access-modifiers|Python Access Modifiers]]
	* [[python-inheritance|Python Inheritance]]
	* [[python-method-overriding|Python Method Overriding]]
	* [[python-abstract-class-and-method|Python Abstract Class & Method]]
3. **Advanced Concepts**
	- [[python-metaclasses|Python Metaclasses]]
	- [[python-variable-scopes|Python Variable Scopes]]
	- [[python-async-programming|Python Async Programming]]

### Best Practices & Coding Conventions

* Variables should be declared in Snake Case
* Constants should be declared in All Caps
* Classes should be declared using Pascal Case
* When using triple quote string we should use double quotes

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
