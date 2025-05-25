---
title: Device Drivers
tags:
  - os
  - linux
date: 2024-01-28 14:15:56 -0600
updated: 2025-01-14 19:53:54 -0600
---

Abstractions for a piece of software  
Can be run in user space but is mostly run in the kernel space  
On Linux file is the most common abstraction for communicating with devices

File (User space) -> Device Driver (Kernel space) -> Device (Hardware)

There are a few kernel APIs that expose the drivers to the user space (`/sys`, `/dev`)  
Device drivers are exposed in the `/dev` directory  
Graphics Card: `/dev/dri`  

NICs are not represented as virtual files on the file system (stored in RAM)
The NIC configuration is stored in `/sys/class/net`  

Device drivers are of two types: Char and Block  
These drivers have three main info associated with them: Type, Minor & Major no.

We communicate with char devices by sharing bytes of data while with block devices a chunk of data is shared at a time  
The major number represents the type of the device while the minor number is to distinguish devices that have the same major version

![[char-device-driver-abstraction.png|400]]

To implement a char driver we need to define the major and minor version of the device  
Implement the file operations required by the driver (read, write, open, close)
Register the char driver in the kernel

![[char-device-driver-registeration.png|550]]

Depending on the device architecture there are different ways to talk with the hardware device. Two of the most common approach is Port I/O and Memory-mapped I/O

In Port IO a dedicated bus is used to communicate with the hardware while in Mapped IO a memory space is shared by the hardware device

MIMO is the most common approach used by architectures like ARM

To write using MIMO we need to request the address of the MIMO registers  
Map them an virtual address using kernel functions  
And finally read and write data to these registers
