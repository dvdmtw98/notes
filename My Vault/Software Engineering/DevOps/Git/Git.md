---
tags: [git, devops, index]
---

### Table of Content

* [Git Config Command](Commands/Git%20Config%20Command.md)
* [Git Diff Command](Commands/Git%20Diff%20Command.md)
* [Git Add Command](Commands/Git%20Add%20Command.md)
* [Git Rm Command](Commands/Git%20Rm%20Command.md)
* [Git Commit Command](Commands/Git%20Commit%20Command.md)
* [Git Log Command](Commands/Git%20Log%20Command.md)
* [Git Checkout Command](Commands/Git%20Checkout%20Command.md)
* [Git Branch Command](Commands/Git%20Branch%20Command.md)
* [Git Merge Command](Commands/Git%20Merge%20Command.md)
* [Git Rebase Command](Commands/Git%20Rebase%20Command.md)
* [Git Clone Command](Commands/Git%20Clone%20Command.md)
* [Git Remote Command](Commands/Git%20Remote%20Command.md)
* [Git Push Command](Commands/Git%20Push%20Command.md)
* [Git Pull Command](Commands/Git%20Pull%20Command.md)
* [Git Stash Command](Commands/Git%20Stash%20Command.md)
* [Git Tag Command](Commands/Git%20Tag%20Command.md)
* [Git Revert & Reset Command](Commands/Git%20Revert%20&%20Reset%20Command.md)

---

### Miscellaneous Commands

````bash
# View usage of a command
git help <command> 			

# View the status of files in a repo
git status

# View who was responsible for an change
git blame <filename>

# View the changes that occurred in the commit
git show <commit-id>
````

Head (Reference to the snapshot that we are currently looking)

---

### Internal Structure

Git Repo consist of three types of objects: Blobs, Trees and Commits  
Blobs: Object IDs (OID) that contain the file content  
Tress: OID that points to other blobs or trees. It is recursive structure. It includes the modes and type of the object  
Commit: It is an OID that contains the commit related information

````bash
# Returns OID/ Hash of Object
git rev-parse HEAD:file-name

# Returns content of the object
git cat-file -p OID
git cat-file -p HEAD:file-name

# Returns the SHA Hash of a object
git hash-object -w file-name
````

These details are stored inside the object directory  
The Git database is a very complex key value store

---

### References

* [A Hacker's Guide to Git | Wildly Inaccurate](https://wildlyinaccurate.com/a-hackers-guide-to-git/)
* [Version Control (Git) · the missing semester of your cs education](https://missing.csail.mit.edu/2020/version-control/)

---

[DevOps](../DevOps.md)
