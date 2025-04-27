---
tags:
  - os
  - windows
  - command
title: Windows Links
date: 2024-01-28 14:15:56 -0600
updated: 2025-04-25 12:05:01 -0500
---

### Symbolic Link (Symlink)

Works with both files and directories.  
Can be mapped to files and directories on different drives, network volumes, etc.  
They work with relative paths as well.  

#### Create Links

`F:\mylink` : Link (should not already exist)  
`C:\path\real\folder` : The actual file/directory  

```batch
:: Create symbolic link
mklink /D F:\mylink C:\path\real\folder
```

To link directory the `/D` flag has to be used.  

```powershell
# Create symbolic link
New-Item -ItemType SymbolicLink `
	-Path F:\mylink -Value C:\path\real\folder
```

#### View Links

The PowerShell command is same for files and directories.

```batch
:: View all symbolic links in directory
DIR /AL <Location>
```

```powershell
Get-ChildItem -Path "C:\path\to\folder" -Recurse `
	| Where-Object { $_.LinkType -eq 'SymbolicLink' }
```

[View a list of symbolic links on system? - Super User](https://superuser.com/questions/496092/view-a-list-of-symbolic-links-on-system)

```powershell
# List broken symbolic links
Get-ChildItem -Path "C:\path\to\folder" -Recurse | Where-Object {
    $_.LinkType -eq 'SymbolicLink' -and -not (Test-Path $_.Target)
}
```

#### Delete Links

```batch
# Delete file link
del F:\mylink

# Delete directory link
rmdir F:\mylink
```

```powershell
# Works for file and directory
Remove-Item F:\mylink
```

These command should to run on the link file.

### Hard Links

Can only be used for files. It is a alias for file.  
Can only point on files on the same volume (Drive with same letter).  
If a hard linked file is moved the hard link automatically updated.  
Hard links point to the same file. Both are indistinguishable to the OS.

```batch
:: Hard Links
mklink /H C:\new\file C:\original\file
```

### Junction Point

Can only be used for Directories.  
Can only point on folders on the same volume (Drive with same letter).  
The paths needs to be absolute paths.  

```batch
:: Junctions
mklink /J C:\path\link\folder C:\path\real\folder
```
