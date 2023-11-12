---
tags: [os, windows, command]
---

### Symbolic Links

* Works with both files and directories
* Can be mapped to files and directories on different drives, network volumes, etc.
* They can work with relative paths as well

### Soft Links (Junction)

* Can be only made for Directories
* The target directory needs to be on the same computer (different volume is allowed)
* The paths needs to be absolute paths

### Hard Links

* Can be only made for files
* Can be only used to point on files on the same volume (Drive with same letter)
* If the hard linked file changes location the hard link automatically updates
* Hard links look exactly the same as the file (Need to be careful to not delete the wrong file)

````batch
:: Hard Links
mklink /H 

:: Junctions
mklink /J 

:: Symbolic Link
mklink /D <Link> <Target> 
````

 > [!info]
 > - /D is not required when making symbolic link for a file
 > - `<Link>` : The new file/ folder (should not already exist)
 > - `<Target>` : The actual file/ folder location
