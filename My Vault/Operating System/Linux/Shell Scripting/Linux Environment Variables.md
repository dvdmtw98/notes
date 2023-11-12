---
tags: [os, linux, bash, programming]
---

/etc/profile (System wide configuration)  
/etc/environment (Stores $PATH variable)

**<u>Set Environment Variables</u>**  
set tech='Python'  
export tech='Python'  
unset tech

Exported variables are available to subprocesses created by the current shell  
Set is generally used to declare a local variable to be used by the shell

<u>Print Environment Variables</u>
  
printenv  
env

All the exported variables can be viewed by using "export -p"  
When we make an variable with export that variable is made available in subprocesses as well

````shell
name=John
export nname=Jane

echo name $(echo nname) # John Jane
$(echo name) echo nname # Error as name cannot be found
````
