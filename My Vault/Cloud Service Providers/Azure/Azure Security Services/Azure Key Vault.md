---
title: Azure Key Vault
tags: [azure, cloud, security]
---

It is highly integrated with other Azure Services  
Provides monitoring and logging features  
It is PaaS (Platform as a Service) offering

[Azure Disk Encryption (ADE)](Azure%20Disk%20Encryption%20(ADE).md) keys and [Transparent Data Encryption (TDE)](Transparent%20Data%20Encryption%20(TDE).md) keys are stored in Key Vault  
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