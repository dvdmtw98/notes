---
tags:
- azure
- cloud
- security
title: Azure Key Vault
---

It is highly integrated with other Azure Services  
Provides monitoring and logging features  
It is PaaS (Platform as a Service) offering

[Azure Disk Encryption (ADE)](azure-disk-encryption-ade.md) keys and [Transparent Data Encryption (TDE)](transparent-data-encryption-tde.md) keys are stored in Key Vault  
For storing non sensitive application configuration App Configuration (Azure Service) should be used

---

#### Secret Management
Key Value pair storage  
Configurations for connecting to DB,  API Keys, tokens, certificates, etc.  

#### Key Management
RSA or EC encryption keys used for cryptographic operations  
Software protected or HSM backed  

#### Certificate Management
X509, SSL/TLS certificates  
Supports auto-renewal  
DigiCert and GlobalSign CA is supported in Key Vault for managed certificates 

#### Hardware Security Module (HSM)
Secrets and keys can be protected either by software or FIPS 140-2 Level 2 validated HSM
Multi-tenant: FIPS 140-2 - Multiple customers isolated virtually  
Single tenant: FIPS 140-3 - Each customer dedicated HSM