---
tags:
- security
- data
title: Device Security Controls
---

#### Securing the BIOS
Ensure we have the latest BIOS (Flashing)  
Enable BIOS Password  
Configure BIOS boot order  
Disable unused external ports and devices  
Enable Secure Boot

#### Securing Storage Devices

**Removable Media Controls**  
Technical limitations placed on a system in regards to the utilization of USB storage devices and other removable media

**NAS & SAN Security**  
Encrypting all data  
Configuring proper authentication  
Logging NAS access

#### Disk Encryption

**Self-Encrypting Drive (SED)** (Hardware-based Solution)  
Storage device the performs whole disk encryption by using embedded hardware  
Every fast but also expensive so not commonly used  

**Full-disk Encryption (FDE)** (Software-based Solution)  
File Vault (MacOS) & BitLocker (Windows) - Both system uses AES encryption  
BitLocker encryption key is stored on TPM chip on supported Windows devices   
On systems without a TPM chip the encryption key will be stored to a USB stick

**File-level Encryption**  
EFS (Encrypting File System) - Windows  

**HSM (Hardware Security Module)**  
Physical devices that act as a secure crypto-processor during the encryption process  
They are tamper-proof and every expensive
