---
title: System Health Commands
tags:
  - os
  - windows
  - command
date: 2024-01-28 14:15:56 -0600
updated: 2025-03-31 14:52:17 -0500
---

### Windows Repair

```powershell
sfc /scannow
dism /Online /Cleanup-Image /RestoreHealth
```

### Battery Health

```powershell
powercfg /batteryreport /output "C:\battery_report.html"
powercfg /energy
```

### Disk Health

```powershell
# Check Disk Drive Health
wmic diskdrive get status

# Check Disk for Issues
chkdsk /f

# Check Disk Sectors Issues
chkdsk <driveletter>: /r
```
