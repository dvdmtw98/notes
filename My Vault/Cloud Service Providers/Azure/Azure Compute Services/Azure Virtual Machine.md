---
title: Azure Virtual Machine
tags: [azure, compute, vm]
---

It is IaaS (Infrastructure as a Service)  
We have total control over the OS and the services  
Does not provide autoscaling  
VMs are are billed even in the Stopped state - Cost for data that is stored on the VM disc

**Components**: VM Size, Networking, OS Image, Virtual Disk (VHD)  
Allows to use custom image that are created and save in Blob storage  
Max Nodes : 1

**Use cases**  
Custom software requiring custom configuration  
Lift and Shift (Moving On premises services to the Cloud as it is)

Application/Scenarios: Web apps, Databases, Jump box, etc.

**Availability Set**  
Fault Domain: Max 20  
Update Domain: Max 3 (Region Specific)

[Availability sets overview - Azure Virtual Machines | Microsoft Learn](https://learn.microsoft.com/bs-latn-ba/azure/virtual-machines/availability-set-overview#how-do-availability-sets-work)

### Virtual Machine Scale Set

Allows to creating multiple VMs with the same configuration    
The VMs in a scale set are hidden behind an Load Balancer  

Users are directed to one of the VMs in the Scale Set  
Max Nodes : 1000/ 600 (Depending on Image Selected)

Supports auto scaling feature  
Can be performed manually or automatically based on metrics

---

[Azure Compute Services](Azure%20Compute%20Services.md)