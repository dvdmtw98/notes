---
title: Encryption Commands
tags:
  - os
  - windows
  - command
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

The cipher command is not supported on Windows Home edition

````batch
:: Encrypt/ Decrypt Files and Folders
cipher /e <filepath> 
cipher /d <filepath>

:: Folder already has files
cipher /e /s:<filepath> 

:: Make deleted files unrecoverable
cipher /w:<driveletter>: 
````
