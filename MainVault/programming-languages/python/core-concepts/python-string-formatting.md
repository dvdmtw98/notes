---
tags:
  - programming
  - python
title: Python String Formatting
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-31 10:39:59 -0600
---

### % Method (Old Method)

The %s and %r can both be used as placeholders for string. %s uses `str()` for conversion while %r uses `repr()` for conversion  
Floating points numbers can be formatted using the %5.2f syntax. The 5 here represents the minimum number of characters to be present in the string the .2 refers to the number of digits after the decimal point

````python
first_name = 'David'
last_name = 'Varghese'

print('Hello my name is %s %s' %(first_name, last_name))
# Hello my name is David
````

### format() Method (New Method)

`{}` is used as placeholder for the location where the variable needs to be substituted  
We can additionally also specify the minimum string length, padding, number system and alignment of the variable using this method

````python
name = 'David'

print('{:=^13}'.format(name)) 
# ====David====
````

### F-Strings (String Interpolation)

We specify the variable that needs to be used along with its formatting inside the {} placeholder these strings always start with f  
All the formatting that can be performed on the string using the format() method can be used in f-strings as well

For using `{}` in the string it needs to be doubled `{{}}`

````python
name = 'David'

print(f'{name:=^13}')
> ====David====

# Debug Strings (3.8+)
print(f'My name is {name=}')
> My name is name='David'

# Format Specifiers
pi = 3.1415
print(f'{pi=:.2f})
> pi=3.14
````

[Python String Formatting Best Practices – Real Python](https://realpython.com/python-string-formatting/)  

[Common string operations - Python 3.12.1 documentation](https://docs.python.org/3/library/string.html#string-formatting)  

[PyFormat: Using % and .format() for great good!](https://pyformat.info)
