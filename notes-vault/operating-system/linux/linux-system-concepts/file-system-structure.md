---
title: File System Structure
tags:
  - os
  - linux
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 21:58:51 -0600
---

FHS : Filesystem Hierarchy Standard  
Defines the Structure and Layout of the FS maintained by the Linux Foundation  
Not necessary to be followed exactly

#### /bin (Binary)

Basic Programs or Applications that are required by the system  
Can be accessed by everyone

#### /sbin (System Binaries)

Binary files that are used by the system they need root privilege to be executed

#### /lib, /lib32, /lib64

Location where the libraries are stored  
They contain shared objects (.so) files that applications use for performing various operations

/lib/modules : Kernel Modules

#### /usr (User/ Universal System Resource)

Applications that are installed by the users are stored in this location  
Applications that are considered non-essential for system operation can be found here

/usr/local : Programs compiled manually by the user  
/usr/share : Large Applications  
/usr/src : Source code will be mostly stored in this folder  
/usr/bin : Non-essential binary files

Executables present in /usr/bin take presentence over /bin

#### /etc (Et cetra/ Editable Text Configuration)

Location where all the system wide configuration is stored  
Per user configuration settings are not stored in this directory

/etc/exports (NFS Configuration)  
/etc/apt/sources.list (APT Sources)  
/etc/apt/sources.list.d/ (APT Sources)  
/etc/mtab (Edit file to make a mount permanent)

#### /home

Each user has an separate folder inside home  
Location where personal files of the users are stored  
This folder can be installed on separate drive (So we can reinstall system without losing personal information)

This folder also contains temporary information like browser cache, thumbnails  
/home/.config & /home/.local : Used to store configuration information for the application for that user

Some application store their configuration directly in separate folders as well.  
/home/.icon & /home/.theme : Consist of theme information like wallpaper, icon pack used, etc.

#### /boot

Everything that is required by the OS to boot  
The bootloader and other files like the Linux kernel, Initial Ram disk (initrd) are found in this directory

Initrd: Temporary in-memory root file system that is utilized as part of Linux system startup process

#### /dev (Device)

Location of all the physical and pseudo devices on the system  
In Linux everything is considered as an file  
The HDD will be found here called as sda and the partitions on the drive will be called sda1, sda2 and so on  
This folder is generally accessed by drivers and applications

#### /opt (Optional)

Manually installed vendor software is placed in this location  
Applications that are not managed by the distro package manager/ packages developed by user, etc. are placed here as well

#### /var (Variable)

Consist of files that are expected to grow/ change as the OS is being used

/var/crash : Consist of information about crashes  
/var/log : Consist of log files  
/var/spool : Temporary queue that is used by services like printer

#### /tmp (Temporary)

Used to save data that is being used temporary by an application in the current session
It is emptied when system is rebooted

#### /proc (Process)

Consist information about system resources and processes  
Each process on the system will have an folder here  
These are not actually files but are information that is shown by the kernel in the form of files (Pseudo File System)

#### /lost+found

When the system crashes unexpectedly or shuts down unexpectedly, some file fragments will be stored here  
During system startup, the fsck tool will check this directory and repair the damaged file system

#### /media, /mnt

Location where mounted drives are found. It can be floppy drive, USB disk, HDD, etc.  Drives mounted automatically by system go in /media  
Devices mounted in /media show up in the side panel in file managers

#### /root

Root users home folder  
Need root permission to save files in this folder

#### /run

It is an Temp FS (tempfs) i.e. it runs in the RAM  
Once the system shuts down everything in this folder is lost  
It is used by processes that start early in the boot processor to store runtime information

#### /srv (Service)

Location where service data is stored  
Used to store files that are going to be accessed using Web Server or SFTP and accessed by external users

#### /sys (System)

This folder is used to interact with the kernel  
It is also an Pseudo File System
