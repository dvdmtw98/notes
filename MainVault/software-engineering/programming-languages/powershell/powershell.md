---
title: PowerShell
tags:
  - scripting
  - powershell
date: 2024-02-02 18:04:41 -0600
updated: 2024-02-03 11:52:11 -0600
---

### Table of Content

* [[powershell-objects|PowerShell Objects]]
* [[powershell-input-output|PowerShell Input & Output]]

### Miscellaneous Points

All commands in PS use the naming convention - **`Verb-Noun`**  
e.g. **`Get-Process`**, **`Get-ChildItem`**

View PS version: **`$PSVersionTable`**

The **`-WhatIf`** flag can be used with cmdlets to see what the command would have done

#### Variables

```powershell
$name = "John Doe"
Write-Output "Hello $name!!"
```

#### Modules & Commands

PowerShell imports Modules automatically if we try to use a command that is present in a module installed on the system

```powershell
# List Loaded Modules
Get-Module

# List Commands provided by Module
Get-Module -Module <module-name>

# List the Nouns from the Command name
Get-Command -Module <module-name> | Select-Object -Unique Noun

# List all Commands with a Noun
Get-Command -Noun <noun>
```

#### Help Cmdlet

```powershell
# Update Help
Update-Help

# List Documentation about a Command
Get-Help -Name Get-ChildItem [-Examples | -Full | -Online]
```
