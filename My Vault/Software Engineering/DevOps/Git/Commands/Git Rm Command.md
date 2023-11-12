---
tags: [git, devops]
---

**Tracked files** are files that were in the last snapshot, as well as any newly staged files; they can be unmodified, modified, or staged  
Tracked files are files that Git knows about

````bash
# Remove a Tracked File
git rm --cached <file-name> 

# Untrack all files in Repo
git rm -r --cached .
````
