---
title: Git Log Command
tags: [git, devops]
---

````bash
# Shows all the commits
git log

# View the commit history in a specific range
git log <commid-id-1>...<commit-id-2> 		

# Short version of log
git log --oneline

# View commits that only involved change in specific file
git log <filename> 							

# View Logs in Graph Form
git log --all --graph --decorate 			
git log --all --graph --decorate --oneline
````