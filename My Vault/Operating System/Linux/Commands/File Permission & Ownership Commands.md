### File Permissions

[Linux permissions: SUID, SGID, and sticky bit | Enable Sysadmin](https://www.redhat.com/sysadmin/suid-sgid-sticky-bit)

When an file is created there is an default permission that is applied to them. This default permission can be viewed and changed using the `umask` command

````shell
chmod ug+rw <filename> # Add permissions
chmod ug=rw <filename> # Set Exact

chmod 764 <filename>
````

**<u>Flags</u>**:  
4 : Read, 2 : Write, 1 : Execute  
u : User, g : Group, o : Others, a : All  
-R : Recursively change permissions

<u>Permissions for Directory</u>  
r : List Directory contents  
w : Rename, Create or Remove files  
x : Search (Enter the Directory)

### Special Permissions

<u>Special Bits</u>  
Set UID/GID Bit (Run file as owner with owner permissions)  
In Permissions represented by 4000 (SUID), 2000 (SGID) & 6000 (Both)  
The "x" bit is replaced with "s" if this is set  
SUID : Run file with permissions of file owner  
SGID : Run file with permissions of the group owner

<u>Sticky Bit</u>  
Sticky Bit (Only file owner can rename and delete file in the folder)  
This permission works at the directory level  
It is represented by "t" in place of the execute "x" bit in others section (rw-rw-rwt)  
In permission represented by 1000

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
