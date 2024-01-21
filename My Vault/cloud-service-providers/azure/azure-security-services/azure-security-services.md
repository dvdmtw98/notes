---
tags:
- azure
- cloud
- security
- index
title: Azure Security Services
---

### Table of Content

* [Security Concepts](security-concepts.md)
	* [Zero-Trust Model](zero-trust-model.md)
	* [Threat Modeling](../../../cyber-security/threat-intelligence/threat-modeling.md)
* **Identity & Access Management**
	* [Identity Providers (IdP)](../../../cyber-security/access-management/identity-providers-idp.md)
	* [Azure Active Directory (AAD)](azure-active-directory/azure-active-directory-aad.md)
	* [Role Based Access Control (RBAC)](role-based-access-control-rbac.md)
* **Secret Management**
	* [Azure Key Vault](azure-key-vault.md)
* **Network Security**
	* [Network Security Groups (NSG)](../azure-networking-services/network-security-groups-nsg.md)
	* [Azure Firewall](../azure-networking-services/azure-firewall.md)
	* [Azure DDoS Protection](../azure-networking-services/azure-ddos-protection.md)
	* [Azure Web Application Firewall (WAF)](azure-web-application-firewall-waf.md)
* **Governance Management**
	* [Azure Resource Locks](azure-resource-locks.md)
	* [Azure Blueprints](azure-blueprints.md)
	* [Azure Policy](azure-policy.md)
	* [Azure Defender for Cloud](azure-defender-for-cloud.md)
	* [Data Loss Prevention (DLP)](../../../cyber-security/security-controls/data-protection/data-loss-prevention-dlp.md)
* **Azure Encryption**
	* [Azure Disk Encryption (ADE)](azure-disk-encryption-ade.md)
	* [Transparent Data Encryption (TDE)](transparent-data-encryption-tde.md)
	* [Blob Storage Security](../azure-storage-services/blob-storage-security.md)

### Azure Bastion
Intermediate hardened instance that can be used to connect to target via SSH or RDP  
It will provision a web-based RDP client or SSH Tunnel  

Some devices cannot run RDP (Google Chromebook) so only way to connect to VM  
When we create Azure Bastion that has to be added to a subnet in our VNet called `AzureBastionSubnet` with at least a size of `/27`  
With Bastion we can connect to a VM without an Public IP Address

### Azure Sentinel
Cloud-native SIEM and SOAR  
Uses [Log Analytics Workspace](../azure-analytics-services/log-analytics-workspace.md) to log storage  
**Workbooks**: Provides a flexible canvas for data analysis and creation of rich visual reports

**Capacity Reservation**: Fixed fee based on selected tier  
**Pas-As-You-Go**: Billed per GB for the volume of data ingested for analysis

### Microsoft Endpoint Manager
Microsoft Intune and Configuration Manager merged into a single service  

Microsoft Intune: Used for managing security of Mobile devices  
Configuration Manager: Used for managing desktops, servers and laptops  
[Device Identity Management](azure-active-directory/device-identity-management.md)