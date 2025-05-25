---
title: seq Command
tags:
  - os
  - linux
  - command
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 21:50:33 -0600
---

````shell
seq <start> <step> <end>
seq -s '+' 10 | bc
seq -f '%03g' 2 10
````

**Flags**  
`-s`: Separator  
`-w`: Equal Width (Appends 0 in left)  
`-f`: Printf Style Format String
