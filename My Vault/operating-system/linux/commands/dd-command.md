---
tags:
- os
- linux
- command
title: dd Command
---

````shell
dd if=/dev/zero of=zero bs=1M count=1024 # Make a 1GB File
dd if=<iso-file> of=<drive-path> # Write ISO to Drive
````

File Size = Block Size * Count

**<u>Flags</u>**:  
if : Input File  
of : Output File  
bs : Block Size  
count : Output File Size  
status=progress : Show progress bar