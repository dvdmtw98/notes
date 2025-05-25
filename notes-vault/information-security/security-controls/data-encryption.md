---
title: Data Encryption
tags:
  - security
  - data
  - protect
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

##### Full-disk Encryption (FDE)
It is a Software-based Solution  
File Vault (MacOS) & BitLocker (Windows): Both system uses AES encryption  
BitLocker encryption key is stored on TPM chip on supported Windows devices   
On systems without a TPM chip the encryption key will be stored to a USB stick

##### Partition Encryption
Similar to FDE but it is only applied to a specific partition on the storage device  
e.g. VeraCrypt

##### Volume Encryption
Used to encrypt a set space on the storage medium  
An encrypted contain is created that can house various files and folders  
e.g. VeraCrypt

##### File-level Encryption
Used to encrypt an individual file  
EFS (Encrypting File System) - Windows  
e.g. GPG

##### Database Encryption
Secures the entire database, extending to multiple storage devices similar to FDE  
e.g. [[transparent-data-encryption-tde|SQL Transparent Data Encryption (TDE)]]

##### Record-level Encryption
Used to encrypt individual rows within a database
