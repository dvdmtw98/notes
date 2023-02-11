---
title: cut Command
tags: [os, linux, command]
---

````shell
cut -d ' ' -f 2-5 <filename>
cut -d ' ' -f 2,6 --complement <filename>
cut -c -3,7- <filename> # Select characters till 3 and from 7 till end
````

**<u>Flags</u>**:  
-d : Delimiter  
-f : Fields  
--complement : Opposite of Selected  
-s : Ignore lines without delimiter  
--output-delimiter='string'  
-c : Character