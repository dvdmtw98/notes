---
tags: [programming, python]
---

### Public Member

* All methods and attributes in python are public by default

### Protected Member

* Attributes and Methods that start with "\_" (underscore) are considered protected
* They should only be accessed inside the [Class](Python%20Classes.md) and within Subclasses

### Private Member

* [Attributes](Attributes.md) and [Methods](Python%20Methods.md) that start with "\_\_" (double underscore) are private
* They should only be accessed within the class and nowhere else
* The names of the private members are mangled in Python but they can still be accessed using `_classname__attribute`

 > [!note]
 > * In Python access modifiers are not enforced which means protected and private members can still be accessed outside of their scope it is up to the developers to respect the access modifiers that have been declared
 > * The protected and private attributes should be only accessed outside the class using getter and setter methods or after turned them into a property using the `@property` decorator or `property()` method

[public, protected, private members in Python](https://www.tutorialsteacher.com/python/public-private-protected-modifiers)
