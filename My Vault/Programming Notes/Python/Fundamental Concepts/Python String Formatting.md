### % Method (Old Method)

* The %s and %r can both be used as placeholders for string. %s uses `str()` for conversion while %r uses `repr()` for conversion.
* %d is used to represent integer and %x is used to represent hexadecimal numbers using this method.
* Floating points numbers can be formatted using the %5.2f syntax. The 5 here represents the minimum number of characters to be present in the string the .2 refers to the number of digits after the decimal point.

````python
first_name = 'David'
last_name = 'Varghese'

print('Hello my name is %s %s' %(first_name, last_name))
# Hello my name is David
````

### format() Method (New Method)

* The template `{}` is used as placeholder for the location where the variable needs to be substituted
* We can additionally also specify the minimum string length, padding, number system and alignment of the variable using this method

````python
name = 'David'

print('{:=^13}'.format(name)) 
# ====David====
````

### String Interpolation/ f-Strings

* We specify the variable that needs to be used along with its formatting inside the {} placeholder these strings always start with f
* All the formatting that can be performed on the string using the format() method can be used in f-strings as well

````python
name = 'David'

print(f'{name:=^13}')
# ====David====
````

---

**<u>References</u>**:

* [Python String Formatting Best Practices – Real Python](https://realpython.com/python-string-formatting/)
* [string — Common string operations — Python 3.10.2 documentation](https://docs.python.org/3/library/string.html#string-formatting)
* [PyFormat: Using % and .format() for great good!](https://pyformat.info/)
