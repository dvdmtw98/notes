---
title: xargs Command
---

Reads items from the standard input, delimited by space or newline, and executes the command for each data (argument)  
Allows to perform operations similar to a for loop

````shell
seq 5 | xargs -n 1 echo "Hello"
# Hello 1  
# Hello 2  
# Hello 3  
# Hello 4  
# Hello 5

seq 5 | xargs -I{} -n 1 echo "This is {} Hello"
# This is 1 Hello  
# This is 2 Hello  
# This is 3 Hello  
# This is 4 Hello  
# This is 5 Hello

printf "1n2n3n" | xargs -i touch {}.txt
````

When using `-I` the string to be replace has to be specified

**<u>Flags</u>**:  
-i, -I, --replace:  Replace Token  
-d : Delimiter  
-n 2 : Use 2 input tokens per execution  
-P 2 : Run 2 processes at a time

> [!CAUTION]
> `--replace`, `-n` and `-L` (Max Line) commands are mutually exclusive. The option that is used last in the pipeline will only be processed