---
tags:
  - git
  - devops
title: Git Config Command
date: 2024-01-28 14:15:56 -0600
updated: 2024-12-15 22:13:04 -0600
---

````bash
# List global git configurations
git config --global --list
git config user.name

# Set username and Email Id
git config --global user.name username 	
git config --global user.email email

# List the Repo specific configuration
git config --local --list 				 

# Create global alias for commands
git config --global alias.<alias-name> "<command>"

# Credential Settings
# store: Save creds to an file (.git-credentials)
# cache: Save creds in cache for sometime
# wincred: Save in Windows Credential Store
# manager: Save in Git Credential Manager (Won't work on old versions)
git config --global credential.helper store
git config --global credential.helper 'cache --timeout=3600'
git config --global credential.helper wincred

# Normalize Line endings to LF (Can cause issues)
git config --global core.autocrlf true
# Repo level configuration
git config core.autocrlf true
git add --renormalize .
````

The System config is located in the **`~/etc/gitconfig`** file  
The git global configuration are stored in the following file **`~/.gitconfig`**  
The local configurations we saved in the **`.git/config`** file inside the repo

[Storing Git Credentials with Git Credential Helper | by Seralahthan | Medium](https://techexpertise.medium.com/storing-git-credentials-with-git-credential-helper-33d22a6b5ce7)  
[Git - Credential Storage](https://git-scm.com/book/en/v2/Git-Tools-Credential-Storage)
