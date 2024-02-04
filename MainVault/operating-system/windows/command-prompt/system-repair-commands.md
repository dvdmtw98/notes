---
tags:
  - os
  - windows
  - command
title: System Repair Commands
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

````batch
:: Windows Repair Commands
sfc /scannow
dism /Online /Cleanup-Image /RestoreHealth

:: Generate Battery Report
powercfg /batteryreport /output "C:\battery_report.html"
powercfg /energy

:: Check Disk Drive Health
wmic diskdrive get status

:: Check Disk for Issues
chkdsk /f
:: Check Disk Sectors Issues
chkdsk <driveletter>: /r
````
