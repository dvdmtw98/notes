---
title: PowerShell Input & Output
tags:
  - scripting
  - powershell
date: 2024-02-03 10:18:03 -0600
updated: 2024-02-03 10:21:54 -0600
---

### Output Cmdlets

The default output for cmdlets is **`Out-Default`** which redirects to **`Out-Host`**

```powershell
# View the Processes in GUI
# Process Selected from GUI passed to next step in Pipeline
# The next step terminates the process
Get-Process | Out-GridView -PassThru | Stop-Process
```

The **`Out-Null`** can be used to suppress the output

The cmdlets **`Export-Csv`** and **`Export-Clixml`** can be used to save results as CSV and XML files respectively.

### Input Cmdlets

The cmdlet **`Get-Content`** allows to read data from file

The cmdlets **`Import-Csv`** and **`Import-Clixml`** can be used to read in CSV and XML files.

The content that was written to files using the **`Export-*`** cmdlets can be read into PS as objects. These <u>imported objects</u> are <u>not the same</u> as the <u>original objects</u>.

![[ps-reading-data.png|600]]

![[ps-viewing-members.png|600]]
