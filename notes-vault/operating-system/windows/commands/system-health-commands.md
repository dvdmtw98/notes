---
tags:
  - os
  - windows
  - command
title: System Health Commands
date: 2024-01-28 14:15:56 -0600
updated: 2025-02-06 12:18:07 -0600
---

### Windows Repair

```powershell
# Windows Repair Commands (Admin Required)
sfc /scannow
dism /Online /Cleanup-Image /RestoreHealth
```

### Device Health

```powershell
# Generate Battery Report
powercfg /batteryreport /output "C:\battery_report.html"
powercfg /energy
```

```powershell
# Check Disk Drive Health
wmic diskdrive get status

# Check Disk for Issues
chkdsk /f

# Check Disk Sectors Issues
chkdsk <driveletter>: /r
```
