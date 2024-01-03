---
tags:
- git
- devops
title: Git Commit Command
---

````bash
git commit -m "Message"
````

Commit all the files that are already **tracked** by git without adding them to staging area
Untracked files will not committed to the repo

````bash
git commit --amend -m "New commit message"
git commit -am "Message"
````

The `--amend` is an command that is used to fix mistakes that was made in the last commit  
This can be used to add new files and changes to the commit message as well

````bash
git commit --amend --no-edit
````

Add new files to the last commit without changing the commit message

 > [!important]
 > * `--amend` commands should only be only used in local copy of repo
 > * `--allow-empty` flag can be used to make a commit without any changes