---
title: Git Rm Command
tags:
  - git
  - devops
date: 2024-01-28 14:15:56 -0600
updated: 2024-12-15 22:10:09 -0600
---

**Tracked files** are files that were in the last snapshot, as well as any newly staged files; they can be unmodified, modified, or staged  
To stop tracking a file we have to remove it from the cache using remove

````bash
# Remove a Tracked File
git rm --cached <file-name> 

# Untrack all files in Repo
git rm -r --cached .
````
