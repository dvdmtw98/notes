---
tags: [programming, python]
---

### Python Bytecode

Python code is compiled to bytecode which is then read by the Python interpreter  
The bytecode generated is platform independent and is understandable by PVM (Python Virtual Machine). PVM is platform dependent

Whenever we import an module into our file and run it the `__pycache__` folder is created which will contain `.pyc` (bytecode) files

### Variable Scopes

> [!IMPORTANT]
> - Variable value **lookup** happens at **runtime**
> - The **lookup location** is decided at **compile** time

```python
x = "global x"

def level_two(v):
    print(v)
    if v:
        x = "local x"
    return x
```

At compile time it is decided that `level_two()` will return the local value of x. The compiler does not consider that there can be cases where local x will not be defined. When the code is executed for truthy values of v we get the expected result for for falsy values we get an error.

```python
x = "global x"

def level_three():
    def inner(y):
        return x, y, z
        
    z = "outer z"

    return inner("y arg")
```

This code will not throw error at compile time. Python decides that the value of z is present in the local scope of `level_three()`. When the code is run indeed when `inner()` is called the value of z is defined.

To the compiler the order of the statements do not matter for determining the scope

### Closures

A function along with its environment together is called a closure (Most programming languages)  

In Python closure is generally used to refer to the environment of a function. The environment of a function can be accessed by using `function_name.__closure__`. This attribute keeps track of the functions environment along with which value to use.

The value for global variables are looked up in the `__globals__` dictionary. If there are no local variables used by the function closure is set to None.

`nonlocal x` will cause any assigned to x in the current local scope to modify x in an outside scope. Similarly `global x` when used in the current local scope will modify the global value of x.

### References

- [Functions within functions, closures, and variable scopes in Python - YouTube](https://www.youtube.com/watch?v=jXugs4B3lwU)
