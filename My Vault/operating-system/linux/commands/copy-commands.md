---
tags:
- os
- linux
- command
title: Copy Commands
---

### scp Command

````shell
scp <local-file> <username>@<ip-address>:<remote-location>
````

**<u>Flags</u>**:  
-C : Compress  
-v : Verbose

### rsync Command

````shell
rsync -avr <folder-name> username@ip-address:<destination>
````

**<u>Flags</u>**:  
a: Archive (Ensures that symbolic links, devices, attributes, permissions, ownerships, etc. are preserved)  
-r: Recursive copy folders  
-v: Verbose Output  
-z: Compress  
-P: Show Progress  
-n/ --dry-run: Perform an trial run  
--delete: Delete files in destination that are not in present in source (Mirror Source) - Used rarely (Can be dangerous)