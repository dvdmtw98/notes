---
title: Copy Commands
tags:
  - os
  - linux
  - command
date: 2024-01-28 14:15:56 -0600
updated: 2025-10-26 14:46:03 +0530
---

`mv` and `cp` can both be used to replace a file.  
Both functions are **not atomic across filesystems and mount points**.

Atomic means programs never see an in-between version of the file.  
`mv` is **atomic** when used on the **same filesystem.**  
It uses `rename` under the hood which performs an atomic replace.  

`cp` performs in-place overwrite when the destination file exists.  
It truncates the destination file and writes the new content.  
If `cp` is called when the file is open in another program the program will think it is still reading from the old file (inode does not change).  

### SCP

````shell
scp <local-file> <username>@<ip-address>:<remote-location>
````

`-C`: Compress  
`-v`: Verbose

### Rsync

````shell
rsync -rPavh <folder-name> username@ip-address:<destination>
````

If destination `username` is skipped `rsync` uses the same username as source.  

> [!IMPORTANT] Leading Slashes in Path  
> If source directory uses a leading slash then its **content** gets copied to target. When used without slash then the **entire directory** is copied over.

`-r`: Recursive copy directories  
`-P`: Show progress (`--progress`) & enable partial copy (`--partial`)  
`-a`: Ensures permissions, ownership, and metadata are preserved)  
`-v`: Verbose Output  
`-h`: Human readable sizes  

`--delete`: Delete files in destination that are not in present in source (Mirror Source). Used rarely (Can be dangerous)  
Check man page for the other types of supported `--delete` options.  
