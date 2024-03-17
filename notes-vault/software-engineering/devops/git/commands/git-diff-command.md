---
tags:
  - git
  - devops
title: Git Diff Command
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

````bash
# Difference between the local file and previous commit
git diff filename

# Difference in local file with respect to the specified commit
git diff <commit-id> <filename> 	

# View change from commit 1 to commit 2
git diff <commit-id-1> <commit-id-2> <filename> 

# All the changes in the current project
git diff 		

# All the words that where changes in the project
git diff --word-diff

# View changes in the files in staging area
git diff --cached
````
