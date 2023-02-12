---
title: Azure Configuration Management
tags: [azure, cloud, software]
---

### App Configuration

Allows to store and manage Application Configuration  
It is a simple key value store that allows to save non-sensitive configuration information  
The values stored in App Configuration are not encrypted  
App Configuration has support for Hierarchical storage which allows us to pull whole sets of configs  

Access can be controlled using [Role Based Access Control (RBAC)](Azure%20Security%20Services/Role%20Based%20Access%20Control%20(RBAC).md)  
It is a stored configuration store so it can be accessed by multiple applications

### Azure State Configuration

Desired State Configuration (DSC) allows to manage the State of Virtual Machines  
DSC can be configured for our VM from our Automation Account Instance  
On Linux state configuration can be managed using Python Scripts as well   

**ApplyOnly**: Apply the configuration when the VM is created  
**ApplyAndMonitor**: Apply the configuration and monitor it for changes  
**ApplyAndAutoCorrect**: Monitors the configuration and corrects the configuration if the values are changed

[Azure Automation State Configuration overview | Microsoft Learn](https://learn.microsoft.com/en-us/azure/automation/automation-dsc-overview)

Custom Scripts Extension allows to download PowerShell Script onto a VM and execute it

---

[Azure](../Azure.md)