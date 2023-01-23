---
title: Python Method Overriding
---

When when the child [class](Python%20Classes.md) overrides the [method](Python%20Methods.md) of the parent class we can say that the child method has overridden the method of the parent class

````python
class Parent():
	def __init__(self):
		self.value = "Inside Parent"

	def show(self):
		print(self.value)
		

class Child(Parent):
	def __init__(self):
		self.value = "Inside Child"

	def show(self):
		print(self.value)
		
		
if __name__ == '__main__:
	obj1 = Parent()
	obj2 = Child()

	obj1.show()
	obj2.show()
````

---

**<u>References</u>**:

* [Method Overriding in Python - GeeksforGeeks](https://www.geeksforgeeks.org/method-overriding-in-python/)