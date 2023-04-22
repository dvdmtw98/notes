---
title: Device Information Commands
tags: [os, linux, command]
---

### Disk Usage

````shell
du -hc ./Download/* # Space occupied by file
df -hT # File System Usage
````

**<u>Flags</u>**:  
-s : Summarize  
-a : All files (Not just directories)  
-h : Human Readable  
-c : Total Size  
-T : Show File System Type

Third party tool to view the disk usage information  
`sudo apt install ncdu`


### CPU & Memory Usage

````shell
free -h # Memory Usage
lscpu # Returns CPU information
````