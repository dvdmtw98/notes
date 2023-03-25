---
title: Azure Key Vault
tags: [azure, cloud, security]
---

### Secrets
Key Value pair storage  
Configuations for connecting to DB, applications, etc.  

### Keys
RSA or EC encryption keys used for cryptographic operations  
Software protected or HSM backed  

### Certificates
X509, SSL/TLS certificates  
Supports auto-renewal  
DigiCert and GlobalSign CA is supported in Key Vault for managed certificates 

---

It is highly integrated with other Azure Services  
Provides monitoring and logging features  
It is PaaS (Platform as a Service) offering

Disk Encryption Keys (VMs) and [Transparent Data Encryption (TDE) Protector Key](../Azure%20Analytics%20Services/Azure%20Synapse%20Analytics/Transparent%20Data%20Encryption%20%28TDE%29%20Protector%20Key.md) (Azure Synapse & SQL DB) are stored in Key Vault

For storing non sensitive application configuration App Configuration (Azure Service) should be used