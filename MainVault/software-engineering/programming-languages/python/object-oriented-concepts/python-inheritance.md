---
tags:
  - programming
  - python
title: Python Inheritance
date: 2024-01-28 14:15:56 -0600
---

* Python supports all the four types of inheritance : Single, Multiple, Hierarchical and Multilevel
* If during multiple inheritance there are two [[python-classes|classes]] that have the same [[python-methods|method]] then from method from the class that is inherited first by the child will only be available
* Private attributes from the parent class cannot be accessed in the child class
* When an method in the parent class is redefined in the child class it is called as [[python-method-overriding|Method Overriding]]

````python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

	def print_name(self):
		print(f"Person Name : {self.name}")

class Professor(Person):
    def isProfessor(self):
        return f"{self.name} is a Professor"

	def print_name(self):
		print(f"Professor Name : {self.name}")

if __name__ == '__main__':
	sir = Professor("John", 30)
	print(sir.isProfessor())
````

### Accessing Base Class Constructor/ Methods

The [[python-constructor|constructor]]/ methods of the parent class can be accessed using the `super()` keyword

````python
class Vechicle:
    def __init__(self, registeration_number) -> None:
        self.registeration_number = registeration_number
        print("Inside Vechicle Constructor")

    def vechile_type(self, company):
        print(f"Vechile type : {company}")

class Car(Vechicle):
    def __init__(self, registeration_number) -> None:
        super().__init__(registeration_number)
        print("Inside Car Constructor")

    def new_car_type(self, species, color):
        super().vechile_type(species)
        print(f"Color : {color}")

if __name__ == '__main__':
    c1 = Car("ABC123")
    c1.new_car_type("Audi", "Black")
````

When super() of an method/ property is called Python looks up the Class MRO (Method Resolution Order) and calls the method/ property that is next in the list  
Helpful in understanding the order in which the method/ property will be called when using multiple inheritance

[Inheritance in Python with Types and Examples - Python Geeks](https://pythongeeks.org/inheritance-in-python/)  
[Python super()](https://www.programiz.com/python-programming/methods/built-in/super)
