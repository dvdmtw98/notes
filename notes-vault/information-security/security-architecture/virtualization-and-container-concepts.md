---
title: Virtualization & Container Concepts
tags:
  - security
  - virtualization
  - container
date: 2024-01-28 14:15:56 -0600
updated: 2026-10-04 19:01:57 +0530
---

### Virtualization
Process of creating software-based versions of physical resources, like servers, storage, and network.  
Virtualizes the entire hardware stack, each VM runs its own full operating system.  
Each VM is independent system and has its own filesystem, services, storage, etc.  

![[virtual-machines-and-containers.png|600]]

#### Hypervisor
Manages the distribution of physical resources of a host machine (server) to the virtual machines (guests).  

##### Type 1
Runs directly on the physical hardware.  
Also called bare-metal hypervisor.  
More efficient that Type 2 hypervisors.  
e.g. VMware ESXi, Hyper-V, Citrix Xen Server  

##### Type 2
Runs on top of a host operating system.  
Also called Hosted Hypervisor.  
e.g. VirtualBox, VMware Workstation, Parallels  

#### Threats to Virtual Machines

##### VM Escape
Attacker breaks out of normal isolated VM and gains access to the hypervisor or other VMs on the same host.  
They are rare and extremely difficult to perform.

##### Privilege Escalation
User is able to grant themselves the ability to run functions as a high-level user.

##### Snapshot Abuse
Snapshots are point-in-time captures of the VMs state.  
Could contain cached credentials, sensitive data, vulnerable OS state.  

#### Securing VMs
Keep virtualization software up-to-date  
Decommission unnecessary VMs to reduce VM sprawl.  
Reduce connection between the guest systems and host.  
Monitoring for East-West traffic between VMs.  

---

### Container
Virtualizes the operating system level, containers share the host operating system kernel but run in isolated user space processes.  
Scanning Tools: Trivy, Snyk, Prisma Cloud  
Monitoring Tools: Falco (IDS for Containers), K8s Audit Logs  

#### Kubernetes Security Issues
Overly permissive RBAC configurations.  
Exposed Kubernetes API servers with no authentication.  
Container running as root.  
Secrets stored in plaintext in Kubernetes configuration files.  
