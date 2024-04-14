---
tags:
  - azure
  - cloud
  - security
  - database
title: Transparent Data Encryption (TDE)
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

Provides data at rest encryption for Azure Databases  
Performs real time I/O encryption and decryption for data and log files    
Encryption uses a Database Encryption Key (DEK)  
DEK is an symmetric key (Same key used for encryption and decryption)  
DEK is protected using the TDE Protector (Key to protect the Key)

[Transparent Data Encryption | Microsoft Learn](https://learn.microsoft.com/en-us/azure/azure-sql/database/transparent-data-encryption-tde-overview?view=azuresql&tabs=azure-portal)

#### Service Managed TDE
DEK is protected using a build-in server certificate  
DEK is encrypted using AES 256

#### Customer Managed TDE
Also called Bring Your Own Key (BYOK) support for TDE  
DEK is protected using an customer managed asymmetric key

For using custom key we need to create/import the custom key into [[azure-key-vault|Azure Key Vault]]  
For a database to be able to get the custom key it needs to be assigned the Get Key, Wrap Key and Unwrap Key permissions in [[azure-active-directory-aad|Azure Active Directory (AAD)]]  
[[azure-monitor|Azure Monitor]] can be used to Audit the logs that are generated by Key Vault

---

#### Enable Service Managed TDE
Create Database Master Key  
Create a certificate to support TDE  
Create Database Encryption Key (DEK)  
Enable TDE

#### Flow for Customer Managed TDE

The DEK that is used to encrypt the database data is sent to Key Vault where the Key is encrypted. The encrypted key is then stored in a User Table in the database  
When the data needs to be read from the database the Encrypted DEK is sent to Key Vault where it is decrypted and this key is then used to decrypt the data

#### Best Practices for Custom Keys

The key needs to be 2048 to 3072 bytes in length  
When importing the key into Key Vault ensure it's using .pfx, .byok, .backup extension  
If the key is generated in KV ensure to take a backup of the key before using the key