---
tags: [programming, python]
---

* It is used to initialize the values of the instance attributes of the [class](Python%20Classes.md)
* In Python the concept of constructor overloading/ multiple constructors is not present but similar functionality can be implemented by using [class methods](Python%20Methods.md)
* The `cls()` method call the constructor of the class which will create a new instance of the class
* The `__init__` method can not have a return value (It was cause an Error)

````python
class Animal:
    def __init__(self, species, color, name) -> None:
        self.species = species
        self.color = color
        self.name = name

    @classmethod
    def create_animal(cls, input_string):
        species, color, name = input_string.split("-")
        return cls(species, color, name)

if __name__ == '__main__':
    a1 = Animal("Cat", "White", "Cloud")
    print(a1.name)

    a2 = Animal.create_animal("Dog-Black-Spark")
    print(a2.name)
````

### \_*new*\_ Attribute

* The `__new__` attribute is used to create a instance of a class
* When we create a new instance of a class the `__new__` method is called first followed by `__init__` where the instance attributes are initialized
* It is very uncommon use case where we need to overwrite the default implementation of this method (It can be modified to implement Singleton concept)

---

**<u>References</u>**:

* [Python: **new** magic method explained - Lintel Technologies Blog](https://howto.lintel.in/python-__new__-magic-method-explained/)
