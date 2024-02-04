---
tags:
  - programming
title: Regex
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
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

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/sa-TUpSx1JA?si=aVl-kgG0WOrIu_CR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/GTUlkkNhvok?si=w_yqfUPRpm7y0-eB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[What is a word boundary in regex? - Stack Overflow](https://stackoverflow.com/questions/1324676/what-is-a-word-boundary-in-regex)
