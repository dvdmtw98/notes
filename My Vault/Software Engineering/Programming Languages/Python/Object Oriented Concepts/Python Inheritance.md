---
tags: [programming, python]
---

* Python supports all the four types of inheritance : Single, Multiple, Hierarchical and Multilevel
* If during multiple inheritance there are two [classes](Python%20Classes.md) that have the same [method](Python%20Methods.md) then from method from the class that is inherited first by the child will only be available
* Private attributes from the parent class cannot be accessed in the child class
* When an method in the parent class is redefined in the child class it is called as [Method Overriding](Python%20Method%20Overriding.md)

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

The [constructor](Python%20Constructor.md)/ methods of the parent class can be accessed using the `super()` keyword

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

---

**<u>References</u>**:

* [Inheritance in Python with Types and Examples - Python Geeks](https://pythongeeks.org/inheritance-in-python/)
* [Python super()](https://www.programiz.com/python-programming/methods/built-in/super)
