---
title: Windows Tweaks
tags:
  - os
  - windows
date: 2024-01-28 14:15:56 -0600
updated: 2025-03-30 22:27:56 -0500
---

### Windows Services to Disable

Connected User Experiences and Telemetry  
SysMain (Previous called PreFetch)

Task Scheduler -> Microsoft -> Windows -> App Experiences (Disable all 4 Tasks)  
Task Scheduler -> Microsoft -> Windows -> Customer Experience Improvement Program (Disable both the tasks)

### Enable S3 Sleep

Modern PCs use S0 sleep (Which sometimes drains battery when its in sleep mode)

```powershell
powercfg /a

reg add HKLM\System\CurrentControlSet\Control\Power /v PlatformAoAcOverride /t REG_DWORD /d 0 /f
```

The `powercfg` command should show that S3 sleep is supported on device
On some devices in the BIOS there will be option to enable this feature
