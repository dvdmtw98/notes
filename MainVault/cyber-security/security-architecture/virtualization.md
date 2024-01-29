---
tags:
  - security
  - virtualization
  - risk
title: Virtualization
date: 2024-01-28 14:15:56 -0600
---

### Types of Virtualization

#### Virtualization

Emulation of physical hardware  
Allows to create different virtual hardware based on machine/app requirements  
Allows to install different OS per machine/app  
Each VM is independent system and has its own Filesystem, services, storage, etc.

![[virtual-machines-and-containers.png|600]]

#### Hypervisor
Manages the distribution of physical resources of a host machine (server) to the virtual machines (guests)

##### Type 1
Also called Bare-metal/ Native Hypervisor  
More efficient that Type 2 hypervisors  
e.g. VMware ESXi, Hyper-V, Xen Server  

##### Type 2
Also called Hosted Hypervisor  
Runs from within an OS  
e.g. VirtualBox, VMware, Parallels  

#### Containerization
A single OS kernel is shared across multiple containers but each container receives its own user space for programs and data

### Threats to VMs

#### VM Escape
Attacker breaks out of normal isolated VM and can interact directly with the hypervisor  
Extremely difficult to perform

#### Privilege Escalation
User is able to grant themselves the ability to run functions as a high-level user

#### Live Migration of Virtual Machines
VM needs to be moved from one physical host to another

#### Resource Reuse
System resources like memory and processing power are reused  
If the resource is not properly cleared or reset before being use by another VM sensitive data could be leaked

### Securing VMs

Keep virtualization software up-to-date  
Reduce connection between the guest systems and host  
Reduce and remove unnecessary features  
Distribute VMs across multiple physical servers  
Reduce Virtualization Sprawl (Unmanaged deployment)  
Encryption of VM files
