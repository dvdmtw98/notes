---
title: Device Information
tags:
  - os
  - linux
  - command
date: 2024-01-28 14:15:56 -0600
updated: 2024-12-12 13:18:29 -0600
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

### Disk Information

```bash
# -t: Detailed Information
sudo lsblk -f
sudo lsblk -t
```
