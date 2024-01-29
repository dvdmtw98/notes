---
tags:
  - os
  - linux
  - command
title: lsof Command
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 21:43:05 -0600
---

#### View Open Files

````shell
# Processes working on a file
lsof <filename>

# Files Open by a process
lsof -p <pid>

# View files currently open by a User
lsof -u <username>
````

#### View Port Information

````shell
lsof -i :<port>
lsof -i <protocol>
````

#### PID of Process

````shell
pidof <process-name>
````

**Flags**  
`-p`: Port  
`-u`: Username  
`-i`: Listen to IP Sockets  
`-n`: Disable DNS Lookup  
`-P`: Show Port Number
