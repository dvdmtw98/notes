---
title: Git Branch Command
---

````bash
# Lists branches with remote details
git branch -vv
git branch -a -vv

# Create a new branch
git branch <branch-name>

# Set upstream for current branch
git branch -u <remote>/<branch-name>

# Rename the current branch
git branch -M <name>

# delete Branch Locally
git branch -d localBranchName

# Delete Branch Remotely
git push -d origin remoteBranchName

# Update Local List of Remote Branchs
git remote update origin --prune
````

[Is there a way to put multiple projects in a git repository? - Stack Overflow](https://stackoverflow.com/questions/14679614/is-there-a-way-to-put-multiple-projects-in-a-git-repository)

### [Git Checkout Command](Git%20Checkout%20Command.md)

````bash
# Checkout and create a new branch
git checkout -b new-branch-name

# Go to an different branch
git checkout branch-name

# Go to the last used branch
git checkout -
````

[How To Set Upstream Branch on Git | What is a Git Upstream Branch? | Git Set Upstream Branch without Push – Junos Notes](https://www.junosnotes.com/git/how-to-set-upstream-branch-on-git/)