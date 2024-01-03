---
tags:
- programming
- python
title: Python Classes
---

The [attributes](attributes.md)/ [properties](property.md) in a class can be of two types : Class attributes and Instance attributes (Static not supported)  
The [methods](python-methods.md) in a class can be of three types : Instance Methods, Class Methods and Static Methods

````python type="person.py"
class Person:
    def introduce(self):
        print(f"My name is {self.first_name} {self.last_name}")

if __name__ == '__main__':
	p1 = Person()
	# Create Instance Attributes
    p1.first_name = "David"
    p1.last_name = "Varghese"

    p1.introduce()
    print(vars(p1))     
    # {'first_name': 'David', 'last_name': 'Varghese'}     
````

#### \_*dict*\_ Attribute

* Every object in Python has a `__dict__` attribute that stores all the writable attributes for that object (For each instance of the object a new one is created)
* This special attribute can be accessed using the `vars()` method as well (Recommended)
* We can add new attributes directly into the class using the this dictionary object

#### \_*slots*\_ Attribute

* If we know in advance all the attributes that are going to be present in our class we can make use of `__slots__` attribute to declare them
* It is a tuple that holds the all the attributes of the class (It is common across all the instance of the class)
* It provides memory savings over the dictionary object that is created for all the instance of the class (When `__slots__` is used `__dict__` attribute is not created)
* Attributes declared using slots also have `__set__` and `__get__` descriptor automatically created
* It also provides speed improvement in accessing the instance attributes as the time complexity to access an element in list in worst case O(1) compared to O(n) for dictionary

---

**<u>References</u>**:

* [Understand **slots** in Python. A simple way to improve your Python… | by Xiaoxu Gao | Towards Data Science](https://towardsdatascience.com/understand-slots-in-python-e3081ef5196d)
* [Python classes: **slots**, slots, and object layout - YouTube](https://www.youtube.com/watch?v=Iwf17zsDAnY)