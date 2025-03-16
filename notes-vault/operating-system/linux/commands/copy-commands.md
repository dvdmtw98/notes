---
tags:
  - os
  - linux
  - command
title: Copy Commands
date: 2024-01-28 14:15:56 -0600
updated: 2025-03-11 15:31:45 -0500
---

### SCP Command

````shell
scp <local-file> <username>@<ip-address>:<remote-location>
````

`-C`: Compress  
`-v`: Verbose

### Rsync Command

````shell
rsync -avr <folder-name> username@ip-address:<destination>
````

`a`: Archive (Ensures that symbolic links, devices, attributes, permissions, ownerships, etc. are preserved)  
`-r`: Recursive copy folders  
`-v`: Verbose Output  
`-z`: Compress  
`-P`: Show Progress  
`-n`/ `--dry-run`: Perform an trial run  
`--delete`: Delete files in destination that are not in present in source (Mirror Source) - Used rarely (Can be dangerous)
