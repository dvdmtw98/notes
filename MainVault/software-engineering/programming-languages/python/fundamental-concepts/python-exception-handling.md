---
tags:
  - programming
  - python
title: Python Exception Handling
date: 2024-01-28 14:15:56 -0600
---

### Syntax Errors

* Syntax errors or parser errors are errors what occur due to mistakes in the syntax of the code.
* At any point in the running state of the code if an Error occurs the program should not try to recover from it but rather exit gracefully

### Logical Errors (Exceptions)

* Exceptions are raised when an external event occurs which in some way changes the normal flow of the program.
* A user defined exception can be created using the `raise` keyword

````python
amount = 2000
try:
    if amount < 2999:
        raise ValueError("Please add money in your Account")
    else:
        print("You are eligible to purchase DSA Self Paced course")
except ValueError as e:
        print(str(e))
````

 > [!NOTE]
 > The try except block can take an optional `finally` block which can be used to perform clean up operators that must be performed under all conditions
 