---
tags:
- git
- devops
title: Git Push Command
---

````bash
# Push to specifc Branches
git push <remote-name> <branch-name>

# Below two commands are equivalent
git push <remote-name> <local-branch>:<remote-branch>
git push <remote-name> HEAD

# Check the upstream for a branch
git push --set-upstream <remote-name> <branch-name>

# Push tags to remote repo
git push <repo-name> --tags

# Force push the local copy onto the remote copy
git push -f <repo-name> <branch-name>
````

 > [!important]
 > * The `-f` and `--force` flag overwrite the remote code with the local copy of the code
 > * If there are remote changes that are not present in our code they are going to be lost
 > * The `-u` flag or `--set-upstream` only needs to be used once. It sets the upstream for the current branch