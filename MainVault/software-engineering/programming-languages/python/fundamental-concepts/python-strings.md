---
tags:
  - programming
  - python
title: Python Strings
date: 2024-01-28 14:15:56 -0600
---

In Python string can be declared using both single and double quotes (No difference)  
They are immutable in nature (They cannot be modified)  
Multiplying a string is a valid operation in Python (Repeats the string n times)  
**String Slicing** can be used to get substring from a string  

#### Triple Quoted Strings

In triple quotes string an `\` can be used at the start to get rid of the initial newline character
`textwrap.dedent()` can be used to get rid of indentation from such strings as well

```python
import textwrap

str1 = """\
	Hello
	Hello
	World
"""

str2 = textwrap.dedent("""\
	Hello
	Hello
	World
""")
```

#### Escape Sequences

`\a` : Bell Character  
`\r` : Carriage Return (cursor will go to start if line)  
`\b` : Move cursor back

```python
print("Hello\rHa")
> Hallo

print("Hello\ba")
> Hella
```

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/4Y4VrKa1lVs?si=L4_dguDbJtR-furP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[String Slicing in Python - GeeksforGeeks](https://www.geeksforgeeks.org/string-slicing-in-python/)   
