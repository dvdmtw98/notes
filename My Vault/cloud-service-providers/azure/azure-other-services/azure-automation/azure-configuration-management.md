---
tags:
- azure
- cloud
- software
title: Azure Configuration Management
---

### App Configuration

Allows to store and manage Application Configuration  
It is a simple key value store that allows to save non-sensitive configuration information  
The values stored in App Configuration are not encrypted  
App Configuration has support for Hierarchical storage which allows us to fetch whole sets of configurations  

Access can be controlled using [Role Based Access Control (RBAC)](../../azure-security-services/role-based-access-control-rbac.md)  
It is a stored configuration store so it can be accessed by multiple applications

### Azure State Configuration

Desired State Configuration (DSC) allows to manage the State of Virtual Machines  
DSC can be configured for our VM from our Automation Account  
On Linux state configuration can be managed using Python Scripts as well   

Steps to onboard VM to Azure State Management
* Import Configuration
* Compile Configuration (Under the hood DSC uses MOF files and WMI)
* Onboard VM into Azure Automation State Management
* Assign Node Configuration (Compiled configuration) to VM
* Check node status

**ApplyOnly**: Apply the configuration when the VM is created  
**ApplyAndMonitor**: Apply the configuration and monitor it for changes  
**ApplyAndAutoCorrect**: Monitors the configuration and corrects the configuration if the values are changed

[Azure Automation State Configuration overview | Microsoft Learn](https://learn.microsoft.com/en-us/azure/automation/automation-dsc-overview)

**Custom Scripts Extension** allows to download PowerShell Script onto a VM and execute it

---

[Azure](../../azure.md)  
[Azure Automation](azure-automation.md)