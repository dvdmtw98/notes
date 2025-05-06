---
title: Git
tags:
  - git
  - devops
  - index
date: 2024-01-28 14:15:56 -0600
updated: 2025-05-05 20:40:36 -0500
---

### Table of Content

* [[git-config-command|Git Config Command]]
* [[git-diff-command|Git Diff Command]]
* [[git-add-command|Git Add Command]]
* [[git-rm-command|Git Rm Command]]
* [[git-commit-command|Git Commit Command]]
* [[git-log-command|Git Log Command]]
* [[git-checkout-command|Git Checkout Command]]
* [[git-branch-command|Git Branch Command]]
* [[git-merge-command|Git Merge Command]]
* [[git-rebase-command|Git Rebase Command]]
* [[git-clone-command|Git Clone Command]]
* [[git-remote-command|Git Remote Command]]
* [[git-push-command|Git Push Command]]
* [[git-pull-command|Git Pull Command]]
* [[git-stash-command|Git Stash Command]]
* [[git-tag-command|Git Tag Command]]
* [[git-revert-and-reset-command|Git Revert & Reset Command]]

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

[A Hacker's Guide to Git | Wildly Inaccurate](https://wildlyinaccurate.com/a-hackers-guide-to-git/)  

[Version Control (Git) · Missing Semester](https://missing.csail.mit.edu/2020/version-control)
