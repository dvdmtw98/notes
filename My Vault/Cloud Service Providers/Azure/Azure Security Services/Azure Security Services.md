---
title: Azure Security Services
tags: [azure, cloud, security, index]
---

### Table of Content

* **Identity & Access Management**
	* [Azure Active Directory (AAD)](Azure%20Active%20Directory/Azure%20Active%20Directory%20(AAD).md)
	* [Role Based Access Control (RBAC)](Role%20Based%20Access%20Control%20%28RBAC%29.md)
* **Secret Management**
	* [Azure Key Vault](Azure%20Key%20Vault.md)
* **Network Security**
	* [Network Security Groups (NSG)](../Azure%20Networking%20Services/Network%20Security%20Groups%20(NSG).md)
	* [Azure Firewall](../Azure%20Networking%20Services/Azure%20Firewall.md)
	* [Azure DDoS Protection](../Azure%20Networking%20Services/Azure%20DDoS%20Protection.md)
	* [Azure Web Application Firewall (WAF)](Azure%20Web%20Application%20Firewall%20(WAF).md)
* **Governance Management**
	* [Azure Policy](Azure%20Policy.md)
	* [Azure Blueprints](Azure%20Blueprints.md)
	* [Azure Resource Locks](Azure%20Resource%20Locks.md)
* **Azure Encryption**
	* [[Azure Disk Encryption (ADE)]]
	* [Transparent Data Encryption (TDE)](Transparent%20Data%20Encryption%20(TDE).md)
	* [Blob Storage Security](../Azure%20Storage%20Services/Blob%20Storage%20Security.md)

#### Azure Bastion
Intermediate hardened instance that can be used to connect to target via SSH or RDP  
It will provision a web-based RDP client or SSH Tunnel  

Some devices cannot run RDP (Google Chromebook) so only way to connect to VM  
When we create Azure Bastion that has to be added to a subnet in our VNet called `AzureBastionSubnet` with at least a size of `/27`  
With Bastion we can connect to a VM without an Public IP Address
