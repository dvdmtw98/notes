---
tags:
  - os
  - linux
  - command
title: Mount Commands
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 21:47:46 -0600
---

### Mount Filesystem

````shell
# When FS is known
mount -t ext4 <filesystem-to-mount> <mount-location>

# When FS is not known
mount <filesystem-to-mount> <mount-location>

# Mount an iso file
mount -o loop <iso-file> <mount-location>

# Remount an FS with Read and Write Permission
mount -o remount,rw <mount-location>
````

### View Mounted Devices

````shell
mount
cat /etc/mtab
cat /proc/mounts
````

### Unmount Filesystem

Filesystem should not be in use when its being unmounted

````shell
umount <filesystem-to-mount>
umount <mount-destination>

# When no operation is being performed by still can't unmount FS
umount -l <mount-destination>
````

The mount can be made permanent by adding the mount information in `/etc/fstab`

````shell
# <device-to-mount> <mount-point> <filesystem> <mount-options> <dump (1) / no-dump (0)> <fs-check>
/dev/sdb1 /mnt/shared ext4 defaults 0 2
UUID=80b496fa-ce2d-4dcf-9afc-bcaa731a67f1 /mnt/example ext4 defaults 0 2
````

**1st Field**: Specify the FS to mount. The UUID of the drive is the preferred method

````shell
# View the UUID of all drives
sudo blkid

# View all the mounted devices on the system
lsblk

# View the UUID of the FS
lsblk -fs <path-to-fs>
````

**2nd Field**: When mounting an "swap partition" the `<mount-point>` should be none  
**5th Field**: The dump option is not generally used and should in most cases be set to 0  
**6th Field**: When mounting an root FS use 1 else use 2. 0 is default and means `fschk` is not performed on the FS
