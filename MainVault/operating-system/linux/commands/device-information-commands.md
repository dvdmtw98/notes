---
tags:
  - os
  - linux
  - command
title: Device Information Commands
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 21:38:22 -0600
---

### Disk Usage

````shell
# Space occupied by file
du -hc ./Download/*

# File System Usage
df -hT
````

**Flags**  
`-s`: Summarize  
`-a`: All files (Not just directories)  
`-h`: Human Readable  
`-c`: Total Size  
`-T`: Show File System Type

### CPU & Memory Usage

````shell
# Memory Usage
free -h

# Returns CPU information
lscpu
````
