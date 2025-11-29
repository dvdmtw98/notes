---
title: Virtualization Software
tags:
  - virtualization
  - software
date: 2025-09-06 14:20:27 +0530
updated: 2025-11-26 08:38:13 +0530
---

### Virtual Box

#### Mounting Shared Folder

[Shared Folders - Oracle](https://docs.oracle.com/en/virtualization/virtualbox/6.0/user/sharedfolders.html)

Windows

```cmd
net use x: \\vboxsvr\sharename
```

Linux

```bash
mount -t vboxsf sharename mountpoint
```
