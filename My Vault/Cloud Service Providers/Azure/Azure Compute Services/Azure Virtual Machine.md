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

VM Provisioning  
**Azure CLI**: Separate command required for creating VM and opening port  
**PowerShell**: Credentials objects needs to be created which is passed to the command to create VM. Port can be opened in the same command itself

### Virtual Machine Scale Set

Choose an image which is automatically scaled by creating multiple instances of the image  
This is hidden behind an Load Balancer  
The Users are redirected to one of the VMs in the Scale Set  
Max Nodes : 1000/ 600 (Depending on Image Selected)

Has auto scaling feature. Can be manually or automatically scaled based on need

---

[Azure Compute Services](Azure%20Compute%20Services.md)