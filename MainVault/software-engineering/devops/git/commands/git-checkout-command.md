---
tags:
  - git
  - devops
title: Git Checkout Command
date: 2024-01-28 14:15:56 -0600
---

Checkout command allows us to create and switch to different [[git-branch-command|branch]]  
It can be used to view old versions of the repository  
It can also be used to restore files from old snapshot

**Checkout** is used to **change the location** of the **HEAD** pointer

````bash
# Checkout the project at an earlier stage
git checkout <commit-id>

# View version of the file represented by HEAD
# Uncommitted changes will be lost
git checkout <filename>

# Similar to above command but it is with respect to a specific commit
# It has the effect similar to restoring old version of file
git checkout <commit-id> <filename> 

# Sync local branch with the upstream version of the same branch
git checkout --track <upstream-repo>/<branch-name>
````

 > [!info]
 > The `--track` command will also create a new branch with the same name as the upstream branch on the local system
 