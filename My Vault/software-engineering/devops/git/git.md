---
tags:
- git
- devops
- index
title: Git
---

### Table of Content

* [Git Config Command](commands/git-config-command.md)
* [Git Diff Command](commands/git-diff-command.md)
* [Git Add Command](commands/git-add-command.md)
* [Git Rm Command](commands/git-rm-command.md)
* [Git Commit Command](commands/git-commit-command.md)
* [Git Log Command](commands/git-log-command.md)
* [Git Checkout Command](commands/git-checkout-command.md)
* [Git Branch Command](commands/git-branch-command.md)
* [Git Merge Command](commands/git-merge-command.md)
* [Git Rebase Command](commands/git-rebase-command.md)
* [Git Clone Command](commands/git-clone-command.md)
* [Git Remote Command](commands/git-remote-command.md)
* [Git Push Command](commands/git-push-command.md)
* [Git Pull Command](commands/git-pull-command.md)
* [Git Stash Command](commands/git-stash-command.md)
* [Git Tag Command](commands/git-tag-command.md)
* [Git Revert & Reset Command](commands/git-revert-and-reset-command.md)

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

[DevOps](../devops.md)