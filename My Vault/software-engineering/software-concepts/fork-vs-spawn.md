---
tags:
- programming
- os
title: Fork vs. Spawn
---

### Fork

Creates a duplicate of the parent process  
The variables required by the process is not copied over (it shadows the parents memory i.e. The child references the parents copy)  
The child process uses the parents memory in a read only manner  
When the child updates one of the variables does it also get its own copy (Copy on Write)

If the parent process is very large we can get out of memory errors when the process is forked as the OS needs to guarantee that there is sufficient memory if all the memory of the parent process is made resident for the child process

Supported on POSIX style platforms (Windows not supported)

### Spawn

It creates a brand new process entirely from scratch (No shadowing of the memory of the parent occurs)  
The memory and the variables are build when as and when its required by the child process

Supported on all OSes
