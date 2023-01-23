---
title: Linux Namespaces
---

Provides processes with there own view  
Namespace allows to limit what an process can see  
We cannot use/affect what we cannot see

There are multiple types of namespaces  
An process will belong to a single namespace of each type

Namespaces are created with the `clone()` syscall with some additional parameters  
Namespaces are visible as pseudo-files : `/proc/<pid>/ns`  
When last process in a namespace exists it is destroyed. This can be prevented by bind mounting the pseudo-file

### PID Namespace

Process inside an PID namespace any only see processes that are in the same namespace  
In a namespace there is an PID 1 which if killed destroys the entire namespace  
These namespaces can be nested and hence a process can end up having multiple PID based on the namespace

### Net Namespace

Process inside a given network namespace gets its own network stack (network interface, iptable rules, routing rules)  
We can move an network interface from one namespace to another

### Mnt Namespace

Allows processes to have there own root fs  
Mounts can be private or shared

### UTS Namespace

Allows each process it have its own hostname

### IPC Namespace

Allows to namespace semaphores, Message Queues, Shared Memory without conflict with other instances

### User Namespace

Allows to namespace UID/GID