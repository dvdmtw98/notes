---
title: Powershell Scripts
tags:
  - programming
  - powershell
  - scripting
date: 2025-03-24 22:59:51 -0500
updated: 2025-05-28 15:52:02 -0500
---

### Remove Zone Identifier

```powershell
# List files with Zone Identifier
Get-ChildItem -Path "C:\Path\To\Directory" -File -Recurse |
	Where-Object { Test-Path "$($_.FullName):Zone.Identifier" }

# Remove Zone Identifiers
Get-ChildItem -Path "C:\Path\To\Directory" -File -Recurse | Unblock-File
```

### Filter Results

Filter by filename

```powershell
Get-ChildItem -Path "C:\Path\To\Directory" -Recurse -File |
    Where-Object { $_.Name -like "vbox-*" } |
    Sort-Object FullName |
    ForEach-Object { $_.FullName }
```

Filter by extension

```powershell
Get-ChildItem -Path "C:\Path\To\Directory" -Recurse -File |
    Where-Object { $_.Extension -in ".png", ".jpg" } |
    Sort-Object FullName |
    ForEach-Object { $_.FullName }
```

Regex-based filter by extension

```powershell
Get-ChildItem -Path "C:\Path\To\Directory" -Recurse -File |
    Where-Object { $_.Extension -match "^(?i)\.(png|jpg|jpeg|gif)$" } |
    Sort-Object FullName |
    ForEach-Object { $_.FullName }
```

### Update PowerShell Modules

Sometimes the modules to be updated would be used by current session.  
In these cases the active modules will not be updated.  
The solution is to update from CMD once all PowerShell sessions are closed. 

```batch
pwsh -NoProfile -Command "Update-Module -Force"
```

### List URI Handlers

```powershell
Get-ChildItem -Path Registry::HKEY_CLASSES_ROOT | 
Where-Object { 
    $_.PSChildName -match '^\w+$' -and 
    (Test-Path "$($_.PSPath)\shell\open\command") 
} | ForEach-Object {
    $scheme = $_.PSChildName
    $command = (Get-ItemProperty "$($_.PSPath)\shell\open\command").'(default)'
    [PSCustomObject]@{
        URI_Scheme = $scheme + "://"
        Handler_Command = $command
    }
} | Where-Object { 
    $_.Handler_Command -and $_.Handler_Command.Trim() -ne "" 
} | Sort-Object -Property URI_Scheme -Unique | Format-Table -Wrap -AutoSize
```
