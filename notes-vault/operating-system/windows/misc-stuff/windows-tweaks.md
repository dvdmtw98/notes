---
title: Windows Tweaks
tags:
  - os
  - windows
date: 2024-01-28 14:15:56 -0600
updated: 2026-05-02 21:36:32 +0530
---

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

#### Disable Windows Search

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/PuE3XCU48Bk?si=gNLw72gM5ryg7cCW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Uninstall Office

Use the below link or command to uninstalling Office completely from the system.

[Uninstall Microsoft 365 or Office from a PC  - Office.com](https://support.microsoft.com/en-us/office/uninstall-microsoft-365-or-office-from-a-pc-9dd49b83-264a-477a-8fcc-2fdf)

```
GetHelpCmd.exe -S OfficeScrubScenario -AcceptEula -OfficeVersion All
```
