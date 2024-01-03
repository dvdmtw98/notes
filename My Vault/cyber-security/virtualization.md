---
tags:
- security
- concept
title: Virtualization
---

#### Hypervisor
Manages the distribution of physical resources of a host machine (server) to the virtual machines (guests)

**Type 1**  
Also called Bare-metal/ Native Hypervisor  
More efficient that Type 2 hypervisors  
e.g. ESXi, Hyper-V, XenServer  

**Type 2**  
Also called Hosted Hypervisor  
Runs from within an OS  
e.g. VirtualBox, VMware, Parallels  

**Application Containerization**  
A single OS kernel is shared across multiple VMs but each VM receives its own user space for programs and data

#### Threats to VMs

**VM Escape**  
Attacker breaks out of normal isolated VM and can interact directly with the hypervisor

**Data Remnants**  
Contents of a virtual machine that exist as deleted files on a cloud-based server after deprovisioning of a VM  

**Privilege Escalation**  
User is able to grant themselves the ability to run functions as a high-level user

#### Securing VMs

Keep virtualization software up-to-date  
Reduce connection between the guest systems and host  
Reduce Virtualization Sprawl (Unmanaged deployment)