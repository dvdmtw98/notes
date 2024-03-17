---
tags:
  - git
  - devops
title: Git Rm Command
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

**Tracked files** are files that were in the last snapshot, as well as any newly staged files; they can be unmodified, modified, or staged  
Tracked files are files that Git knows about

````bash
# Remove a Tracked File
git rm --cached <file-name> 

# Untrack all files in Repo
git rm -r --cached .
````
