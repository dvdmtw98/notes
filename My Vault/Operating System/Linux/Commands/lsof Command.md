---
title: lsof Command
tags: [os, linux, command]
---

<u>View Open Files</u>

````shell
lsof <filename> # Processes working on a file
lsof -p <pid> # Files Open by a process
lsof -u <username> # View files currently open by a User
````

<u>View Port Information</u>

````shell
lsof -i :<port>
lsof -i <protocol>
````

<u>PID of Process</u>

````shell
pidof <process-name>
````

**<u>Flags</u>**:  
-p : Port  
-u : Username  
-i : Listen to IP Sockets  
-n : Disable DNS Lookup  
-P : Show Port Number