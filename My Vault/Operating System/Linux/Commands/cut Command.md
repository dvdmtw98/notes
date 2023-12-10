---
tags: [os, linux, command]
---

````shell
cut -d ' ' -f 2-5 <filename>

cut -d ' ' -f 2,6 --complement <filename>

# Select upto 3rd characters then from 7th till end
cut -c -3,7- <filename>
````

**<u>Flags</u>**:  
-d : Delimiter  
-f : Fields  
--complement : Opposite of Selected  
-s : Ignore lines without delimiter  
--output-delimiter='string'  
-c : Character
