---
tags: [programming, python]
---

* A property in Python in an [attribute](Attributes.md) which has an getter, setter and deleter method (Not necessary to implement all three methods)
* They are used to encapsulate the attributes in the class. It is the pythonic way to declare getters and setters
* A property can be created using the `@property` decorator (recommended) or `property()` method

````python
class Person:
		__name = ""

    @property
    def name(self):
        return self.__name

    @name.setter
    def name(self, name):
        self.__name = name

    @name.deleter
    def name(self):
        del self.__name

class Dog:
	__name = ""

    def get_name(self):
        return self.__name

    def set_name(self, name):
        self.__name = name

    def del_name(self):
        del self.__name

		name = property(get_name, set_name, del_name)

if __name__ == '__main__':
	p1 = Person()
	p1.name = "David"   # Calls the Setter Method
	print(p1.name)      # Calls the Getter Method
	del p1.name         # Deleltes the instance of the Attribute

	d1 = Dog()
	d1.name = "Chip"
````

 > [!note]
 > Any object the implements `__get__()`, `__set__()` or `__delete__()`  (Descriptor Protocol) is called as descriptor
 > 
 > There are two types of descriptors:
 > * **Data Descriptors** : Objects that implement `__set__()` and `__delete__()`
 > * **Non Data Descriptors** : Objects that implement `__get__()`
