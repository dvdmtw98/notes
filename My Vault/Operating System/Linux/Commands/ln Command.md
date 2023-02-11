---
title: ln Command
tags: [os, linux, command]
---

### Soft Link

Similar to Shortcuts on Windows. The shortcut and the file are going to have different inode value

````shell
ln -s <source-file> <target-file>
````

### Hard Link

Alias for the same file. The hard link and the inode are going to have the same values. Hard links for directory can't be created

````shell
ln <source-file> <target-file>
````