---
title: Disk Management Commands
tags:
  - windows
  - data
  - command
date: 2024-12-11 15:27:37 -0600
updated: 2024-12-16 20:37:01 -0600
---

### Disk Partition

The EFI partition will be shown as a System Partition

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