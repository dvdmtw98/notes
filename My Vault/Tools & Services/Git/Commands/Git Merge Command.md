---
title: Git Merge Command
---

When merge is performed there are three states that are involved: our latest changes, their latest changes and the base node  
The base node is the first common ancestor for both the branches (The point at which the code diverged)  
Git finds the base node and compares our code and their code with it and based on the comparison shows the conflicts that need to be fixed manually  

````bash
git merge <branch-name>

git merge --continue
# Won't prompt for Merge Message
git merge --continue --no-edit

# Abort an merge
git merge --abort
````

 > [!IMPORTANT]
 > We need to be on the target branch when we are trying to merge another branch

---

* [Resolving Git Conflicts from the Command Line](https://www.grandcircus.co/blog/resolving-git-conflicts/)
* [git - How do I finish the merge after resolving my merge conflicts? - Stack Overflow](https://stackoverflow.com/questions/2474097/how-do-i-finish-the-merge-after-resolving-my-merge-conflicts)