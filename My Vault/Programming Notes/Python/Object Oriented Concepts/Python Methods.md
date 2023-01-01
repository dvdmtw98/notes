### Instance Method

* They are methods that are tied to the instance of an [class](Python%20Classes.md)
* They take `self` as their first parameter (Self refers to the current instance of the class)
* They can modify all the attributes of the instance of the class
* They are called using the instance name : `instance_name.function_name()`

### Class Method

* They are methods that are tied to the class (Not to a instance)
* They take `cls` as their first parameter (Cls refers to the class in which the function is declared)
* Class Methods have to be decorated using the `@classmethod` decorator
* They can modify the class attributes
* They are called using the class name : `class_name.function_name()`
* Class Methods are generally used to declare alternate constructors in a class as Python does **not support constructor overloading**

### Static Methods

* They are methods that are not tied to the class or instance of the class
* They do not take any special parameters are arguments
* Static Methods need to be decorated using the `@staticmethod` decorator
* They can access the class attributes using the class name by this approach is not recommended
* They are called using the class name : `class_name.function_name()`
* When we don't have to access the class attributes and instance attributes we should used the static method

````python
class Employee:

    num_of_emps = 0
    raise_amt = 1.04

    def __init__(self, first, last, pay):
        self.first = first
        self.last = last
        self.email = first + '.' + last + '@email.com'
        self.pay = pay

        Employee.num_of_emps += 1

    def fullname(self):
        return '{} {}'.format(self.first, self.last)

    def apply_raise(self):
        self.pay = int(self.pay * self.raise_amt)

    @classmethod
    def set_raise_amt(cls, amount):
        cls.raise_amt = amount

    @classmethod
    def from_string(cls, emp_str):
        first, last, pay = emp_str.split('-')
        return cls(first, last, pay)

    @staticmethod
    def is_workday(day):
        if day.weekday() == 5 or day.weekday() == 6:
            return False
        return True

if __name__ == '__main__':
	emp_1 = Employee('Corey', 'Schafer', 50000)
	emp_2 = Employee('Test', 'Employee', 60000)

	Employee.set_raise_amt(1.05)

	print(Employee.raise_amt)
	print(emp_1.raise_amt)
	print(emp_2.raise_amt)

	emp_str_1 = 'John-Doe-70000'
	new_emp_1 = Employee.from_string(emp_str_1)

	print(new_emp_1.email)
	print(new_emp_1.pay)

	import datetime
	my_date = datetime.date(2016, 7, 11)

	print(Employee.is_workday(my_date))
````
