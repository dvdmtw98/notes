---
title: Git Configuration
tags:
  - git
  - devops
  - authentication
date: 2024-01-28 14:15:56 -0600
updated: 2025-05-11 20:13:12 -0500
---

Git uses a hierarchical configuration system.  
There are three primary levels: system, global, and local.  
Each level override the configuration from the previous level.  

**System-Level Configuration**  
System level applies to repositories of all users across the system.  
Linux: `/etc/gitconfig`  
Windows: `C:\Program Files\Git\etc\gitconfig`  

**Global-Level Configuration**  
Global level applies to repositories of the current user.  
Linux: `~/.gitconfig` or `~/.config/git/config`  
Windows: `C:\Users\<username>\.gitconfig`  

**Local-Level Configuration**  
Linux and Windows: `<repository>/.git/config`

```bash
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
```

### Credential Store

`store`: Save credentials to a file (`.git-credentials`)  
`cache`: Save credentials in cache till timeout  
`wincred`: Save in Windows Credential Store  
`manager`: Save in Git Credential Manager (Won't work on old versions)

```
git config --global credential.helper store
git config --global credential.helper 'cache --timeout=3600'
git config --global credential.helper wincred

# Normalize Line endings to LF (Can cause issues)
git config --global core.autocrlf true

# Repo level configuration
git config core.autocrlf true
git add --renormalize .
```

[Storing Git Credentials with Git Credential Helper \| Medium](https://techexpertise.medium.com/storing-git-credentials-with-git-credential-helper-33d22a6b5ce7)  
[Git Credential Storage Documentation](https://git-scm.com/book/en/v2/Git-Tools-Credential-Storage)
