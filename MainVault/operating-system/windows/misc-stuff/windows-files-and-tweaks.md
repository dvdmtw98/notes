---
tags:
  - os
  - windows
title: Windows Files & Tweaks
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-29 14:38:23 -0600
---

### Important File Locations

**Host File**  
`C:\Windows\System32\drivers\etc\hosts` 

**SAM Database Location**  
`C:\Windows\System32\config\SAM`

### Shell Shortcuts

Shell Shortcut: `shell:startup`  
`C:\ProgramData\Microsoft\Windows\Start Menu\Programs`

Shell Shortcut: `shell:common startup`  
`C:\Users\David\AppData\Roaming\Microsoft\Windows\Start Menu\Programs`

Start Menu Items: `shell:programs` & `shell:common programs`  
Apps Folder: `shell:appsfolder`

Send To Menu: `shell:sendto`  
Fonts Folder: `shell:fonts`

Taskbar Shortcuts: `C:\Users\David\AppData\Roaming\Microsoft\Internet Explorer\Quick Launch\User Pinned\TaskBar`

### Windows Registry Tweaks

**Increase IRPStackSize**  
Could make Internet Faster       `Computer\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\LanmanServer\Parameters`  
New → DWORD (32-bit) → IRPStackSize → Value : 32 (Decimal)

### Windows Services to Disable

Connected User Experiences and Telemetry  
SysMain (Previous called PreFetch)

Task Scheduler -> Microsoft -> Windows -> App Experiences (Disable all 4 Tasks)  
Task Scheduler -> Microsoft -> Windows -> Customer Experience Improvement Program (Disable both the tasks)

### Startup Program Locations

#### User Startup Locations
shell:startup (Run Menu)  
`Computer\HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run`

#### All User Startup Location
shell:common startup (Run Menu)  
`Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Run`

### Enable S3 Sleep

Modern PCs use S0 sleep (Which sometimes drains battery when its in sleep mode)

```powershell
powercfg /a

reg add HKLM\System\CurrentControlSet\Control\Power /v PlatformAoAcOverride /t REG_DWORD /d 0 /f
```

The `powercfg` command should show that S3 sleep is supported on device
On some devices in the BIOS there will be option to enable this feature
