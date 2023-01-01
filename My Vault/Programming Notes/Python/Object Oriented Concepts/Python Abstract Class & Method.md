* In the parent [class](Python%20Classes.md) if we do not implement the logic for a [method](Python%20Methods.md) (As the method should be [overridden](Python%20Method%20Overriding.md) in the child classes) then we make use of the abstract class
* When we mark a method as abstract then the class that contains it also needs to be converted into a abstract class (Abstract class can have non abstract members)
* When inheriting an abstract class the derived class must implement all the abstract members
* Abstract classes cannot be instantiated
* In Python Abstract class is created using the `abc` (Abstract Base Class) module

````python
from abc import ABC, abstractmethod

# Abstract Class
class Shape(ABC):
    @abstractmethod
    def draw(self):
        pass

    def copy(self):
        print("Copying Shape to Clipboard")

class Circle(Shape):
    def draw(self):
        print("Drawing Circle")

class Main():
    circle = Circle()
    circle.draw()
    circle.copy()
````

---

**<u>References</u>**:

* [class - Is it possible to make abstract classes in Python? - Stack Overflow](https://stackoverflow.com/questions/13646245/is-it-possible-to-make-abstract-classes-in-python)
