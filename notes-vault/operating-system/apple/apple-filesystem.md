---
title: Apple Filesystem
tags:
  - apple
  - os
  - file-system
date: 2025-08-30 21:14:23 +0530
updated: 2025-08-30 21:51:04 +0530
---

### File System
All modern Apple devices use APFS (Apple File System).  
The filesystem is structured similar to FHS (Filesystem Hierarchy Structure).  

Apple originally used HFS (Hierarchical Filesystem) while was later replaced by HFS+ (Mac OS Extended/ HFS Extended).  
APFS is **case-insensitive** (can use case-sensitive mode on MacOS).

On mobile the real filesystem can only be accessed after jail-breaking the device.  
On Mac the filesystem can be accessed but is hidden by default.  

Filesystems are implemented using kernel-level drivers (runs in the kernel) on all modern operating systems.  

### Executable Package
On iOS and MacOS apps are distributed in `.ipa` files (iOS Package).  
It is a Zip archive that contains the app binary and other resources used by it.  
The `.ipa` archive contains metadata and a `.app` directory.  
The `.app` directory uses the same structure as MacOS apps.  

MacOS apps are distributed in directories that end in `.app` (Application Bundle).  
They contain the Mach-O binary and other resources that are used by the app.  
On MacOS Finder treats directories that end in `.app` as a file.  

The `.plist` (Property List) file is used to store data in key value format.  
`Info.plist` is used to store preferences, settings, permissions and other application related information.  
