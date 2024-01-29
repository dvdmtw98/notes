---
tags:
  - security
  - data
  - access
title: Data States & Types
date: 2024-01-28 14:15:56 -0600
---

### Data States

#### Data at Rest
Full Disk Encryption (FDE)  
Partition Encryption: Encrypt specific partitions of a hard drive    
File Encryption  
Volume Encryption: Encrypt a set of selected files and directories  
Database Encryption  
Record Encryption: Encrypt specific fields within a database record

[[data-encryption|Data Encryption]]

#### Data in Motion
SSL and TLS: Cryptographic protocols  
End-to-end Encryption  
**IPSec**: Protect IP communication by authenticating and encrypting each packet

[[ipsec-protocol-suite|IPsec Protocol Suite]]

#### Data in Use
Application Level Encryption  
Access Controls  
Secure Enclaves  
Intel Software Guards

---

### Data Types

##### Regulated Data
Information controlled by laws, regulations and industry standards  
e.g. GDPR, HIPAA

##### Personal Identifiable Information (PII)
Any information that can be used to identify an individual

##### Personal Health Information (PHI)
Information about health status, provision of healthcare or payment for healthcare that can be linked to a specific individual

##### Trade Secrets
Type of confidential business information that provides a company a competitive edge

##### Intellectual Property (IP)
Creations of the mind, such as inventions, literary and artistic works, designs and symbols

##### Legal Data
Data related to legal proceedings, contracts or regulatory compliance

##### Financial Information
Data related to an organizations financial transactions, such as sales records, invoices, tax documents and bank statements  
e.g. PCI DSS

##### Human-readable Data
Information that can be understood by humans without the need for a machine or software
