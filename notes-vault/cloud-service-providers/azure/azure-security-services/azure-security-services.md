---
title: Azure Security Services
tags:
  - azure
  - cloud
  - security
  - index
date: 2024-01-28 14:15:56 -0600
updated: 2025-09-07 15:44:55 +0530
---

### Table of Content

* [[cloud-security-concepts|Cloud Security Concepts]]
	* [[zero-trust-model|Zero-Trust Model]]
	* [[threat-modeling|Threat Modeling]]
* **Identity & Access Management**
	* [[identity-providers-idp|Identity Providers (IdP)]]
	* [[azure-active-directory-aad|Azure Active Directory (AAD)]]
	* [[azure-rbac|Role Based Access Control (RBAC)]]
* **Secret Management**
	* [[azure-key-vault|Azure Key Vault]]
* **Network Security**
	* [[network-security-groups-nsg|Network Security Groups (NSG)]]
	* [[azure-firewall|Azure Firewall]]
	* [[azure-ddos-protection|Azure DDoS Protection]]
	* [[azure-web-application-firewall-waf|Azure Web Application Firewall (WAF)]]
* **Governance Management**
	* [[azure-resource-locks|Azure Resource Locks]]
	* [[azure-blueprints|Azure Blueprints]]
	* [[azure-policy|Azure Policy]]
	* [[azure-defender-for-cloud|Azure Defender for Cloud]]
	* [[data-loss-prevention-dlp|Data Loss Prevention (DLP)]]
* **Azure Encryption**
	* [[azure-disk-encryption-ade|Azure Disk Encryption (ADE)]]
	* [[transparent-data-encryption-tde|Transparent Data Encryption (TDE)]]
	* [[blob-storage-security|Blob Storage Security]]

### Azure Bastion
It has also called a [[jump-server|Jump Server]] or Bastion Host.  
It is a hardened VM that sits between us and the VMs on the isolated network.  

When we create Azure Bastion it has to be added to a subnet in our VNet called `AzureBastionSubnet` with at least a size of `/27`.  
With Bastion we can connect to a VM without a Public IP Address.

### Azure Sentinel
Cloud-native SIEM and SOAR  
Uses [[log-analytics-workspace|Log Analytics Workspace]] to log storage  
**Workbooks**: Provides a flexible canvas for data analysis and creation of rich visual reports

**Capacity Reservation**: Fixed fee based on selected tier  
**Pas-As-You-Go**: Billed per GB for the volume of data ingested for analysis

### Microsoft Endpoint Manager
Microsoft Intune and Configuration Manager merged into a single service  

Microsoft Intune: Used for managing security of Mobile devices  
Configuration Manager: Used for managing desktops, servers and laptops  
[[device-identity-management|Device Identity Management]]
