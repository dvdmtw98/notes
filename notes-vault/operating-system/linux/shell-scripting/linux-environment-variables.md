---
title: Linux Environment Variables
tags:
  - os
  - linux
  - bash
  - programming
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 22:05:05 -0600
---

/etc/profile (System wide configuration)  
/etc/environment (Stores $PATH variable)

**Set Environment Variables**  
set tech='Python'  
export tech='Python'  
unset tech

Exported variables are available to subprocesses created by the current shell  
Set is generally used to declare a local variable to be used by the shell

**Print Environment Variables**  
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
