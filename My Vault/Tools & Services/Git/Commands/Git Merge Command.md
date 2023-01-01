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

When we merge an branch it performs a fast forward i.e. Moves the MASTER pointer to the same point as the merged branch

---

* [Resolving Git Conflicts from the Command Line](https://www.grandcircus.co/blog/resolving-git-conflicts/)
* [git - How do I finish the merge after resolving my merge conflicts? - Stack Overflow](https://stackoverflow.com/questions/2474097/how-do-i-finish-the-merge-after-resolving-my-merge-conflicts)
