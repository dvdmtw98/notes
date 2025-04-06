---
title: Windows Files
tags:
  - os
  - windows
  - configuration
  - forensics
date: 2025-03-30 22:12:43 -0500
updated: 2025-03-30 22:34:11 -0500
---

### Host File 
`C:\Windows\System32\drivers\etc\hosts` 

### SAM Database 
`C:\Windows\System32\config\SAM`

### Windows Dictionary
`%AppData%\Microsoft\Spelling\neutral\default.dic`

### Start Menu Items

#### Current User
- `shell:programs` & `shell:start menu`  
- `C:\Users\<YourUsername>\AppData\Roaming\Microsoft\Windows\Start Menu\Programs`

#### System-wide (All Users)
- `shell:common programs` & `shell:common start menu`  
- `C:\ProgramData\Microsoft\Windows\Start Menu\Programs`

### Applications Folder
Virtual Folder that contains all installed applications  

- `shell:appsfolder`  
- `C:\Users\<YourUsername>\AppData\Local\Microsoft\Windows\Applications`

### Send To Menu
- `shell:sendto`    
- `C:\Users\YourUsername\AppData\Roaming\Microsoft\Windows\SendTo`  

### Taskbar Shortcuts

- `%AppData%\Microsoft\Internet Explorer\Quick Launch\User Pinned\TaskBar`
- `C:\Users\Default\AppData\Roaming\Microsoft\Internet Explorer\Quick Launch\User Pinned\TaskBar`

### Startup Program Locations

#### Current User
- `shell:startup`
- `C:\ProgramData\Microsoft\Windows\Start Menu\Programs`  
- `Computer\HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run`

#### System-wide (All Users)
- `shell:common startup`  
- `C:\Users\David\AppData\Roaming\Microsoft\Windows\Start Menu\Programs`  
- `Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Run`
