---
title: Powershell Scripts
tags:
  - programming
  - powershell
  - scripting
date: 2025-03-24 22:59:51 -0500
updated: 2025-03-28 22:34:58 -0500
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
