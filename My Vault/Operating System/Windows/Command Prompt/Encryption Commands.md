---
tags: [os, windows, command]
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
