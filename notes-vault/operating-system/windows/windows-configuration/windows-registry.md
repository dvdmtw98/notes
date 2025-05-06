---
title: Windows Registry
tags:
  - os
  - windows
  - configuration
  - forensics
date: 2025-03-30 22:28:03 -0500
updated: 2025-05-04 17:35:10 -0500
---

### Right-click Menu Entries

#### General File & Folder

- **Current User**
	- `HKEY_CLASSES_ROOT\*\shell`
	- `HKEY_CLASSES_ROOT\*\shellex\ContextMenuHandlers`
- **System-wide (All Users)**
	- `HKEY_LOCAL_MACHINE\SOFTWARE\Classes\*\shell`
	- `HKEY_LOCAL_MACHINE\SOFTWARE\Classes\*\shellex\ContextMenuHandlers`

#### Extension Specific

- **Current User**
	- `HKEY_LOCAL_MACHINE\SOFTWARE\Classes\.txt`
	- `HKEY_LOCAL_MACHINE\SOFTWARE\Classes\SystemFileAssociations\.txt\shell`
	- `HKEY_LOCAL_MACHINE\SOFTWARE\Classes\SystemFileAssociations\.txt\shellex\ContextMenuHandlers`
- **System-wide (All Users)**
	- `HKEY_LOCAL_MACHINE\SOFTWARE\Classes\.txt`
	- `HKEY_LOCAL_MACHINE\SOFTWARE\Classes\SystemFileAssociations\.txt\shell`
	- `HKEY_LOCAL_MACHINE\SOFTWARE\Classes\SystemFileAssociations\.txt\shellex\ContextMenuHandlers`

#### Folder Specific

- **Current User**
	- `HKEY_CLASSES_ROOT\Folder\shell`
	- `HKEY_CLASSES_ROOT\Folder\shellex\ContextMenuHandlers`
- **System-wide (All Users)**
	- `HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Folder\shell`
	- `HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Folder\shellex\ContextMenuHandlers`

#### Directory Specific

- **Current User**
	- `HKEY_CLASSES_ROOT\Directory\shell`
	- `HKEY_CLASSES_ROOT\Directory\shellex\ContextMenuHandlers`
- **System-wide (All Users)**
	- `HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Directory\shell`
	- `HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Directory\shellex\ContextMenuHandlers`

#### Recycle Bin

- **Current User**
	- `HKEY_CLASSES_ROOT\CLSID\{645FF040-5081-101B-9F08-00AA002F954E}\shell`
	- `HKEY_CLASSES_ROOT\CLSID\{645FF040-5081-101B-9F08-00AA002F954E}\shellex\ContextMenuHandlers`
- **System-wide (All Users)**
	- `HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{645FF040-5081-101B-9F08-00AA002F954E}\shell`
	- `HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{645FF040-5081-101B-9F08-00AA002F954E}\shellex\ContextMenuHandlers`

#### Drives

- **Current User**
	- `HKEY_CLASSES_ROOT\Drive\shell`
	- `HKEY_CLASSES_ROOT\Drive\shellex\ContextMenuHandlers`
- **System-wide (All Users)**
	- `HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Drive\shell`
	- `HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Drive\shellex\ContextMenuHandlers`

#### My PC

- **Current User**
	- `HKEY_CLASSES_ROOT\CLSID\{20D04FE0-3AEA-1069-A2D8-08002B30309D}\shell`
	- `HKEY_CLASSES_ROOT\CLSID\{20D04FE0-3AEA-1069-A2D8-08002B30309D}\shellex\ContextMenuHandlers`
- **System-wide (All Users)**
	- `HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{20D04FE0-3AEA-1069-A2D8-08002B30309D}\shell`
	- `HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{20D04FE0-3AEA-1069-A2D8-08002B30309D}\shellex\ContextMenuHandlers`

#### Network Drive

- **Current User**
	- `HKEY_CLASSES_ROOT\Network\shell`
	- `HKEY_CLASSES_ROOT\Network\shellex\ContextMenuHandlers`
- **System-wide (All Users)**
	- `HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Network\shell`
	- `HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Network\shellex\ContextMenuHandlers`

### Enable Verbose Message

[Enable verbose startup and shutdown status messages \| Microsoft](https://learn.microsoft.com/en-us/troubleshoot/windows-server/performance/enable-verbose-startup-shutdown-logon-logoff-status-messages)

`HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System`  
Create a new Key (D-word) called “**verbosestatus**”.  
Set value to 1.
