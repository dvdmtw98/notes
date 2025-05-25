---
title: dd Command
tags:
  - os
  - linux
  - command
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28
---

````shell
# Make a 1GB File
dd if=/dev/zero of=zero bs=1M count=1024

# Write ISO to Drive
dd if=<iso-file> of=<drive-path>
````

File Size = Block Size * Count

**Flags**  
`if`: Input File  
`of`: Output File  
`bs`: Block Size  
`count`: Output File Size  
`status=progress`: Show progress bar
