---
tags:
- os
- linux
- command
title: seq Command
---

````shell
seq <start> <step> <end>
seq -s '+' 10 | bc
seq -f '%03g' 2 10
````

**<u>Flags</u>**:  
-s : Separator  
-w : Equal Width (Appends 0 in left)  
-f : Printf Style Format String