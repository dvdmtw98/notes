````bash
# View the name of the remote repos
git remote -v
# View remote repo with its tracked branches
git remote show <remote-name> 					

# Connect local repo with remote repo (HTTPS & SSH)
git remote add <remote-name> <repo-url>
git remote set-url <remote-name> <ssh-url>
````

 > [!important]
 > * To configure git with SSH we need to add our public key in the SSH key tab on upstream providers site after that we can add the SSH URL from GitHub into the local repo
 > * The default remote repo can be changed using the `git push --set-upstream <remote-name> <branch-name>`
