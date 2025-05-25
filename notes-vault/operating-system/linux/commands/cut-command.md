---
title: cut Command
tags:
  - os
  - linux
  - command
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28
---

````shell
cut -d ' ' -f 2-5 <filename>

cut -d ' ' -f 2,6 --complement <filename>

# Select upto 3rd characters then from 7th till end
cut -c -3,7- <filename>
````

**Flags**  
`-d`: Delimiter  
`-f`: Fields  
`--complement`: Opposite of Selected  
`-s`: Ignore lines without delimiter  
--output-delimiter='string'  
`-c`: Character
