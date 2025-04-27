---
tags:
  - os
  - linux
  - command
title: ln Command
date: 2024-01-28 14:15:56 -0600
updated: 2025-04-25 12:01:53 -0500
---

### Symbolic Link (Symlink)

Can be created for files and directories.  
The symlink and the actual file/directory will have different inode value.

#### Create Link

Actual Directory (Source): `/original/path/target`  
Symbolic Link (Target): `~/mylink`

````shell
# Create a symbolic link
ln -s /original/path/target ~/mylink
````

The command will **fail** if the target already exists. The target is always a file (link).  
Depending on source it will be behave like file/directory.  
Moving the source will break the link. Broken links are not automatically cleared.  

#### Finding Links

```bash
# Find all symbolic links in a directory
find ~/.config -type l -ls

# Find broken symbolic links in a directory
find ~/.config -type l ! -exec test -e {} \; -print

# Delete broken symbolic links in a directory (Dangerous)
find ~/.config -type l ! -exec test -e {} \; -delete
```

The `-maxdepth` option can be used to limit the search depth.

#### Delete Links

```bash
# Delete symbolic link
unlink ~/mylink
```

The `rm` command can also be used to delete links.  
If the `-r` option is used by mistake all the files in the actual directory will be deleted.

```bash
# Fix broken symbolic link
ln -sf /new/path/target ~/mylink
```

The `-sf` flag deletes the existing link file and creates a new one.

### Hard Link

Alias for the same file.  
The hard link and the actual file share the same inode value.  
Hard links for directory can't be created.

```shell
ln ~/file1 ~/file2
```

As both of the names point to the same data on disk neither is a link.  
Either one can be deleted with effecting the underlying data.
