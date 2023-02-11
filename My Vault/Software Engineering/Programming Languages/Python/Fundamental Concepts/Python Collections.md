---
title: Python Collections
tags: [programming, python]
---

Any object in python that can return one element at a time is referred to as a iterable.  List, Tuple, Set and Dictionary are all considered as iterables

### List

When iterating over a list and need access to the index the `enumerate()` function should be used whenever possible as its faster and efficient than other approaches  
For iterating over multiple lists at the same time the `zip()` method can be used. Two lists can be converted into a dictionary using the zip method as well

````python
names = ['Alice', 'Bob', 'Charlie']
ages = [24, 50, 18]

for i, (name, age) in enumerate(zip(names, ages)):
	print(i, name, age)
	
# 0 Alice 24
# 1 Bob 50
# 2 Charlie 18
````

### Tuple

Tuples are immutable versions of lists they are used when we don't want the values in the iterable to be changed. They are slightly faster than lists.  
For declaring an tuple the () are not necessary the , is what makes it a tuple. When we return multiple values from a function we are actually returning a tuple.

### Dictionary

Used to store key-value data. The keys in dictionary can only use immutable datatypes
As of Python 3.7 dictionaries are considered as a ordered collection (Insertion order is maintained)

### Set

It is an list that can only store unique values. They are unordered collection. The elements in a set are immutable  
For creating a set in we cannot add elements `frozenset()` can be used  
Various set operations like union, intersection, difference are also available in Python