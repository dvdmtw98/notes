---
tags:
  - os
  - windows
  - command
title: Symbolic Links
date: 2024-01-28 14:15:56 -0600
updated: 2024-05-31 23:36:20 -0500
---

### Symbolic Links

* Works with both files and directories
* Can be mapped to files and directories on different drives, network volumes, etc.
* They can work with relative paths as well

```batch
:: Symbolic Link
mklink /D <Link> <Target> 

:: View all Symbolic Links and Junctions in a Directory
DIR /AL /S <Location>
```

`/D` is not required when making symbolic link for a file  
`<Link>` : The target link (should not already exist)  
`<Target>` : The actual file/folder to link

`rmdir` and `del` commands can be used to remove Symbolic Links. This command should to run on the target location (the Symbolic Link)

[View a list of symbolic links on system? - Super User](https://superuser.com/questions/496092/view-a-list-of-symbolic-links-on-system)

### Soft Links (Junction)

* Can be only made for Directories
* The target directory needs to be on the same computer (different volume is allowed)
* The paths needs to be absolute paths

```batch
:: Junctions
mklink /J 
```

### Hard Links

* Can be only made for files
* Can be only used to point on files on the same volume (Drive with same letter)
* If the hard linked file changes location the hard link automatically updates
* Hard links look exactly the same as the file (Need to be careful to not delete the wrong file)

```batch
:: Hard Links
mklink /H
```
