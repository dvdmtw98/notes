---
tags: [azure, cloud, security, index]
---

### Table of Content

* [Security Concepts](Security%20Concepts.md)
	* [Zero-Trust Model](Zero-Trust%20Model.md)
	* [Threat Modeling](../../../Cyber%20Security/Threat%20Intelligence/Threat%20Modeling.md)
* **Identity & Access Management**
	* [Identity Providers (IdP)](../../GCP/GCP%20Security%20Services/Identity%20Providers%20(IdP).md)
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
	* [Azure Resource Locks](Azure%20Resource%20Locks.md)
	* [Azure Blueprints](Azure%20Blueprints.md)
	* [Azure Policy](Azure%20Policy.md)
	* [Azure Defender for Cloud](Azure%20Defender%20for%20Cloud.md)
	* [Data Loss Prevention (DLP)](../../GCP/GCP%20Security%20Services/Data%20Loss%20Prevention%20(DLP).md)
* **Azure Encryption**
	* [Azure Disk Encryption (ADE)](Azure%20Disk%20Encryption%20(ADE).md)
	* [Transparent Data Encryption (TDE)](Transparent%20Data%20Encryption%20(TDE).md)
	* [Blob Storage Security](../Azure%20Storage%20Services/Blob%20Storage%20Security.md)

### Azure Bastion
Intermediate hardened instance that can be used to connect to target via SSH or RDP  
It will provision a web-based RDP client or SSH Tunnel  

Some devices cannot run RDP (Google Chromebook) so only way to connect to VM  
When we create Azure Bastion that has to be added to a subnet in our VNet called `AzureBastionSubnet` with at least a size of `/27`  
With Bastion we can connect to a VM without an Public IP Address

### Azure Sentinel
Cloud-native SIEM and SOAR  
Uses [Log Analytics Workspace](../Azure%20Analytics%20Services/Log%20Analytics%20Workspace.md) to log storage  
**Workbooks**: Provides a flexible canvas for data analysis and creation of rich visual reports

**Capacity Reservation**: Fixed fee based on selected tier  
**Pas-As-You-Go**: Billed per GB for the volume of data ingested for analysis

### Microsoft Endpoint Manager
Microsoft Intune and Configuration Manager merged into a single service  

Microsoft Intune: Used for managing security of Mobile devices  
Configuration Manager: Used for managing desktops, servers and laptops  
[Device Identity Management](Azure%20Active%20Directory/Device%20Identity%20Management.md)
