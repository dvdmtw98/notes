---
tags:
  - os
  - linux
  - command
title: Linux File Permissions
date: 2024-01-28 14:15:56 -0600
updated: 2025-05-10 17:10:33 -0500
---

### Permissions

The read, write and execute permissions are used to control access on Linux.  
For each filesystem object the permission is applied to 3 scopes—object owner, object group, and everyone else—in that order.  
The permissions are showing in Linux using the permission string.  
We can view this information using commands like `ls` and `tree`.   
The 1st bit in the permission string denotes the object type: `-` (file), `d` (directory).  
The remaining 9 bits are split 3x3 to represent the permissions for each scope.  

![[linux-permissions.png|520]]
_Linux file permissions_

When a object is created a default permission is applied. This default permission can be viewed and changed using the `umask` command.

Permissions can be changed using the `chmod` command. The permissions can be configured using the symbolic method or the numeric method.

````shell
# Symbolic Method
chmod ug+rw <filename>
chmod ug=rw <filename>

# Numeric Method
chmod 764 <filename>
````

**Flags**  
`4`: Read, `2`: Write, `1`: Execute  
`r`: Read, `w`: Write, `x`: Execute  
`u`: User, `g`: Group, `o`: Others, `a`: All  
`-R`: Recursively change permissions

<u>Permissions for Directory</u>  
`r`: List Directory contents  
`w`: Rename, Create or Remove files  
`x`: Search (Enter the Directory)

### Special Permissions

#### Special Bits
Set UID/GID Bit (Run file as owner with owner permissions)  
In Permissions represented by 4000 (SUID), 2000 (SGID) & 6000 (Both)  
The "x" bit is replaced with "s" if this is set  
SUID : Run file with permissions of file owner  
SGID : Run file with permissions of the group owner

#### Sticky Bit
Sticky Bit (Only file owner can rename and delete file in the folder)  
This permission works at the directory level  
It is represented by "t" in place of the execute "x" bit in others section (rw-rw-rwt)  
In permission represented by 1000

[Linux permissions: SUID, SGID, and sticky bit | Enable Sysadmin](https://www.redhat.com/sysadmin/suid-sgid-sticky-bit)

[Identifying File types in Linux - Linux Tutorials - Learn Linux Configuration](https://linuxconfig.org/identifying-file-types-in-linux)

### Ownership Commands

````shell
# Change Owner
chown <username> <filename>
chown <username>:<group-name> <filename>

# Change Group
chgrp <group-name> <filename>
groups <username> # Returns groups that contain the user
````
