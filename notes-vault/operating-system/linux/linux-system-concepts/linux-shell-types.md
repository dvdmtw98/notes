---
title: Linux Shell Types
tags:
  - linux
  - command
  - shell
date: 2024-12-22 16:00:00 -0600
updated: 2024-12-22 16:50:27 -0600
---

Terminal uses an **interactive non-login** shell  
SSH uses an **interactive login** shell  
Running a script uses **non-interactive non-login** shell

```bash
# i: Interative Shell
# l: Login Shell (Not always present)
echo $-

# -: Login Shell (Not always present)
echo $0
```

#### Interactive Login Shell

The user is expected to provide the input (interact)  
Used when a new session is started using console or SSH  

The input and output are both connected to the terminal and will be visible to user  
This type of shell uses the `.zprofile` and `.zshenv` file

#### Interactive Non-Login Shell

The user is expected to provide the input (interact)  
Used when a new terminal is opened or a new shell is spawned  
This type of shell uses the `.zshrc` and `.zshenv` file

#### Non-Interactive Login Shell

Very rarely used  
It is non-interactive (no user input) and loads config to setup environment  
Can be used by automated scripts  

The output of non-interactive shells are not normally shown to user  
This type of shell uses the `.zprofile` and `.zshenv` file

#### Non-Interactive Non-Login Shell

This type of shell is commonly used to run automated scripts (`cron`, `-c`)  
User cannot interact with the shell and no config to setup environment is used  

The output of non-interactive shells are not normally shown to user  
This type of shell uses the `.zshenv` file