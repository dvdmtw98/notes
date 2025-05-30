---
title: Git Pull Command
tags:
  - git
  - devops
date: 2024-01-28 14:15:56 -0600
updated: 2025-05-05 20:44:11 -0500
---

````bash
# Download remote changes
git fetch <remote-name>
git fetch <remote-name> <remote-branch>:<local-branch>

# Add fetched changes into the local repo
git merge

git pull origin master

# Pulls code from repo and append local changes on top of remote
git pull --rebase
````

The actual command  pushing code to remote repo is `git push <remote-name> <local-branch>:<remote-branch>`  
Since we mostly merge branches with same names we only need to specify the branch name once

Git pull is shorthand for `git fetch; git merge`  
The pull command should only be used after locally worked on feature is complete and the changes have been merged (Else will cause merge conflicts)
