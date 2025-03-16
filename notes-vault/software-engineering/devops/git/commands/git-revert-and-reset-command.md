---
title: Git Revert & Reset Command
tags:
  - git
  - devops
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

### Revert Command

````bash
git revert commit-id 			# Delete an commit by adding a new commit that undoes the changes
````

### Reset Command

````bash
# Delete multiple commit and go back in time
# The files from the deleted commits will show as upstaged
git reset --mixed <commit-id> 

# Delete commits and the changes to the files
git reset --hard <commit-id>

# Delete commits and modified files show up as staged files
git reset --soft <commit-id>

# Remove files from staging area
git reset HEAD <filename>
````
