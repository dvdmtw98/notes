---
title: Python Functions
tags:
  - programming
  - python
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

If we add a [[python-strings|string]] in a function using triple quotes (Docstring) then we can access this string by calling `function_name.__doc__` 

### Anonymous Functions (Lambda Function)

An lambda function is similar to a normal function except it is confined to one line and does not have a name

````python
# Lambda can be assigned to a variable as well but it shouldn't be used
new_sum = lambda x,y: x + y
new_sum(1, 3)
````

### Arguments (\*args) & Keyword Arguments (\*\*kwargs)

If we need to pass a varying amount of arguments to a function then instead of creating a function for each of them we can make use of `*args` and `**kwargs`

````python
def my_addition_function(*args):
    return sum(args)

def my_fruit_function(**kwargs):
    if 'fruit' in kwargs:
        print(f"My favorite fruit is {kwargs['fruit']}")
    else:
        print("I don't like fruit")

my_addition_function(40,60,20) # 60
my_fruit_function(fruit='pineapple') # My favorite fruit is pineapple
````

[Lambda Functions with Practical Examples in Python | by Susan Maina](https://towardsdatascience.com/lambda-functions-with-practical-examples-in-python-45934f3653a8)
