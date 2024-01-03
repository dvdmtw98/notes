---
tags:
- azure
- compute
- vm
title: Azure Virtual Machine
---

Provides users with total control over the OS and the services  
Does not support autoscaling  
VMs are billed even in the Stopped state - Cost for data that is stored on the VM disc

**Components**: VM Size, Networking, OS Image, Virtual Disk (VHD)  
Allows to use custom image that are created and save in Blob storage  
Max Nodes : 1

**Use cases**  
Custom software requiring custom configuration  
Lift and Shift (Moving On premises services to the Cloud as it is)

Application/Scenarios: Web apps, Databases, Jump box, etc.

**Availability Set**  
Allows to increase the availability of VMs  
Fault Domain: Max 20  
Update Domain: Max 3 (Region Specific)

[Availability sets overview - Azure Virtual Machines | Microsoft Learn](https://learn.microsoft.com/bs-latn-ba/azure/virtual-machines/availability-set-overview#how-do-availability-sets-work)

**Azure Instance Metadata Service (IMDS)**  
It is an non-routable endpoint that is only accessible from the VM that can be used to retrieve information about the VM  
This endpoint can also be used to retrieve token required to access other Azure resources from the VM using Managed Identity

[Azure Instance Metadata Service for virtual machines - Azure Virtual Machines | Microsoft Learn](https://learn.microsoft.com/en-us/azure/virtual-machines/instance-metadata-service?tabs=windows)

### Virtual Machine Scale Set

Allows to creating multiple VMs with the same configuration    
The VMs in a scale set are hidden behind an Load Balancer  

Users are directed to one of the VMs in the Scale Set  
Max Nodes : 1000/ 600 (Depending on Image Selected)

Supports auto scaling feature  
Can be performed manually or automatically based on metrics

---

[Azure Compute Services](azure-compute-services.md)