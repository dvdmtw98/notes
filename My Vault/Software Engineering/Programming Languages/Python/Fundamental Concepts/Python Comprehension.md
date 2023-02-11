---
title: Python Comprehension
tags: [programming, python]
---

### List Comprehension

When we want to filter out values from an exiting list we place the if block towards the end of the comprehension

````python
sentence = 'the rocket came back from mars'
vowels = [i for i in sentence if i in 'aeiou']
# ['e', 'o', 'e', 'a', 'e', 'a', 'o', 'a']
````

When we have to use the `else` condition in the comprehension we have to use the ternary operator syntax which places the condition before the for loop

````python
original_prices = [1.25, -9.45, 10.22, 3.78, -5.92, 1.16]
prices = [i if i > 0 else 0 for i in original_prices]
# [1.25, 0, 10.22, 3.78, 0, 1.16]
````

### Set and Dictionary Comprehension

* If we replace the `[]` in list comprehension with `{}` we get set comprehension. Set comprehension does not guarantee the order of elements
* Dictionary comprehension is similar to set comprehension with the additional requirement of having to pass a key-value pair

````python
quote = "life, uh, finds a way"
unique_vowels = {i for i in quote if i in 'aeiou'}
# {'a', 'e', 'u', 'i'}

squares = {i: i * i for i in range(10)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81}
````

---

**<u>References</u>**:

* [When to Use a List Comprehension in Python – Real Python](https://realpython.com/list-comprehension-python/#using-set-and-dictionary-comprehensions)