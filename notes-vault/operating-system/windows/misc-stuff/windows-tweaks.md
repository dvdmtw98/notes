---
title: Windows Tweaks
tags:
  - os
  - windows
date: 2024-01-28 14:15:56 -0600
updated: 2026-03-31 09:38:53 +0530
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

### Disable Search Ads

#### Remove Web Results
[Disable Web search suggestions in Windows 11 Start menu](https://www.dedoimedo.com/computers/windows-11-start-menu-web-search.html)

#### Remove MS Store Results
This script disables the MS Store results in start by removing access to `store.db`.

```powershell
$StoreAppsDatabase = "$env:LocalAppData\Packages\Microsoft.WindowsStore_8wekyb3d8bbwe\LocalState\store.db"

# This file doesn't exist in EEA (No Store app suggestions).
if (Test-Path -Path $StoreAppsDatabase)
{
    $AccountSid = [System.Security.Principal.SecurityIdentifier]::new('S-1-1-0') # 'EVERYONE' group
    $Acl = Get-Acl -Path $StoreAppsDatabase
    $Ace = [System.Security.AccessControl.FileSystemAccessRule]::new($AccountSid, 'FullControl', 'Deny')
    $Acl.SetAccessRule($Ace) | Out-Null
    Set-Acl -Path $StoreAppsDatabase -AclObject $Acl | Out-Null
}
```
