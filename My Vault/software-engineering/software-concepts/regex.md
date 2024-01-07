---
tags:
- programming
title: Regex
---

Regex by default tried to find the largest match possible (Greedy)

### Common Tokens

`.` : Any character leaving newline  
`\w` : Word Character ( a-z, A-Z, 0-9, \_ )  
`\s` : Space Characters (Space, Tabs, Newlines)  
`\u25b6` : Match an Unicode character

### Anchors

They match invisible character that can occur before and after characters (^, $)  
`\b` : Word (\w) Boundary  
This character occurs between a "word character and a non word character" or "word character and start/ end of string"

### Character Set

`[]` : Character Set (List of character to matched)  
`[1-7]` : Match characters that fall between 1 and 7  
`^` : Inside character set is used to negate the characters

### Quantifiers

`*` : 0 or More  
`+` : 1 or more  
`?` :  Above 2 followed by ? Lazy Match (Finds the smallest match)  
`?` : 0 or 1

### Groups

`(r|s|rs)` : Groups (Match different combinations & stores/ captures match)  
`(?:r|s|rs)` : Non Capturing group  
`(?<name>)` : Named Capture group

`(\w)\w+\1` : Reference an capture group that is already declared  
`\k<name>` : Backreference using name of Capture Group

### Lookaround

`(?=...)` : Lookahead (They are not considered part of the capture)  
`(?!...)` : Negated Lookahead

`(?<=...)` : Lookbehind  
`(?<!...)` : Negated Lookbehind

### Conditional Match

The `?(1)` here refers to the first capture group  
There is an alternative PCRE syntax for the same but it is not supported in python

`(consition)?(?(1)true|false)` : If else logic in regex

---

**<u>References</u>**

* [What is a word boundary in regex? - Stack Overflow](https://stackoverflow.com/questions/1324676/what-is-a-word-boundary-in-regex)
* [Regular Expressions (Regex) Tutorial: How to Match Any Pattern of Text - YouTube](https://www.youtube.com/watch?v=sa-TUpSx1JA)
* [Regex Essentials - Advanced Expressions (Part 2) - YouTube](https://www.youtube.com/watch?v=GTUlkkNhvok)

---

[Software Concepts](software-concepts.md)
