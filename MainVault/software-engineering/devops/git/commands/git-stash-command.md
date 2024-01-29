---
tags:
  - git
  - devops
title: Git Stash Command
date: 2024-01-28 14:15:56 -0600
---

````bash
# Stash the changes made temporarily
git stash 					
git stash save <name>
# Stash Untracked files as well
git stash -u

git stash list
# Show the files in Stash
git stash show <num>
# View the changes in the stashed files
git stash show -p <num>

# Push to stash with Message
git stash push -m "Message" 
git stash pop
# Pop a specific commit from stash
git stash apply <num>

# Drop a Stash
git stash drop <num>
# Drop the Entire Stash
git stash clear
````
