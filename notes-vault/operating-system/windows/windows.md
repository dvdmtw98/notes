---
title: Windows
tags:
  - os
  - windows
  - index
date: 2024-01-28 14:15:56 -0600
updated: 2026-07-24 23:21:59 +0530
---

### Table of Content

* **Windows Commands**
	* [[windows-file-permissions|File Permissions]]
	* [[windows-links|Symbolic Links]]
	* [[network-commands|Network Commands]]
	* [[system-health-commands|System Health Commands]]
	* [[task-management-commands|Task Management Commands]]
	* [[download-commands|Download Commands]]
	* [[encryption-commands|Encryption Commands]]
	* [[disk-management-commands|Disk Management Commands]]
* **Tools & Utilities**
	* [[windows-terminal|Windows Terminal]]
	* [[wsl-configuration|WSL Configuration]]
	* [[winget-commands|Winget Commands]]
	* [[powershell|PowerShell]]
		* [[powershell-scripts|PowerShell Scripts]]
* **Windows Configuration**
	* [[windows-files|Windows Files]]
	* [[windows-registry|Windows Registry]]
	* [[windows-tweaks|Windows Tweaks]]
* **Windows Misc. Stuff**
	* [[windows-shortcuts|Windows Shortcuts]]
	* [[microsoft-active-directory|Active Directory]]
	* [[ntfs-alternative-file-stream|NTFS Alternative File Stream]]

**SCCM (Security Center Configuration Manager)**  
Windows-centric Endpoint Management tool  
Typically configured on an on-prem Windows Server device  
Renamed to Microsoft Endpoint Configuration Manager (MECM)

### Miscellaneous Points

* **`clip`** command can be used to copy anything to the clipboard from terminal
* **`findstr`** is the Windows equivalent of grep
* **`shutdown /r /fw /f /t 0`** : Restart system into BIOS

### Printer Force Restart

Run the following commands from an Admin Command Prompt.

```batch
net stop spooler
taskkill /F /IM printfilterpipelinesvc.exe

:: Delete files from queue
del /F /Q %SystemRoot%\System32\spool\PRINTERS\*.*

net start spooler
```
