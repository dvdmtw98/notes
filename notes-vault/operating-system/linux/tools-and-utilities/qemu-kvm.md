---
title: QEMU-KVM
tags:
  - linux
  - virtualization
  - software
date: 2025-01-19 13:24:00 -0600
updated: 2025-03-11 15:30:40 -0500
---

### Shared Directory

In Virt-Manager under VM settings “Add Hardware → File system”

![[qemu-kvm-filesystem.png|360]]

Source: Directory on Host that will be shared  
Target: Any name (without space) will be used in `fstab`

On the Guest create a directory to be used as mount point

Then add the following in `/etc/fstab`:

```bash
<target-name> <path-on-guest> 9p trans=virtio,rw 0 0
```

![[qemu-kvm-fstab.png|640]]

```bash
sudo mount -a
```

If the above command produces an error fix it before continuing.

After that goto `/etc/initramfs-tools/modules` and add the following:

```
9p
9pnet
9pnet_virtio
```

Then,

```bash
sudo update-initramfs -u
```

This will load the drivers required for the shared directory on system startup.

### Shared Clipboard

Install the following packages using the systems package manager:

```bash
sudo apt install qemu-guest-agent spice-vdagent
```

After reboot clipboard sharing and automatic VM resizing should work

### VM Creation Permission Issue

Go to `/etc/libvirt/qemu.conf` and modify the following line:

```
user = "<username>"
group = "libvirt"
```

### Windows VirtIO Drivers

To use VirtIO based storage on Windows, the virtio driver has to be installed.

[VirtIO Drivers - Download](https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/)

The driver is provided as an ISO file that has to be mounted on a CD ROM when installing the operating system (Add Hardware → Storage → CD-ROM device)

![[virtio-windows-drivers.png|500]]

### Network Disabled

The `virsh` command  can be used to enable a network if its disabled

```bash
sudo virsh net-list --all
sudo virsh net-start <network-name>

sudo virsh net-autostart <network-name>
```

### VM Performance Settings

For CPU enable `host-passthrough`  
For Disk set Cache Mode to `None` and Discard Mode to `Unswap`  
Remove the Tablet Hardware  
Some VMs require Video to be set to `QXL` (Windows, Kali Linux, etc.)  