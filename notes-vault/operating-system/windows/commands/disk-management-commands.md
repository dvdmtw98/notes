---
title: Disk Management Commands
tags:
  - windows
  - data
  - command
date: 2024-12-11 15:27:37 -0600
updated: 2026-01-24 16:17:23 +0530
---

### Disk Partition

The EFI partition will be shown as a System Partition and will use FAT32 filesystem.

```shell
diskpart

# Disk Operations
list disk
select disk 0

# Partition Operations
list partition
select partition 1

# Mount Parition
assign letter=Z
remove letter=Z
```

### Boot Loader

```shell
# List Boot Entries
bcdedit /enum firmware

# Delete Boot Entries
bcdedit /delete "{GUID}"
```