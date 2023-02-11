---
title: Git Tag Command
tags: [git, devops]
---

Tags are ref's (like HEAD) that point to specific points in Git history  
Tagging is generally used to capture a point in history that is used for a marked version release

````bash
# Create new tag
git tag <tag-name>
git tag <tag-name> -a -m "Message"

git tag
# Show detail about the tag
git show <tag-name> 					
````

 > [!info]
 > Annotated tags, tags made with the `-a` flag are stored as full objects in git i.e. they store extra metadata like the taggers name, email id, etc.