---
title: Copy Commands
tags:
  - os
  - linux
  - command
date: 2024-01-28 14:15:56 -0600
updated: 2025-05-21 18:45:12 -0500
---

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
