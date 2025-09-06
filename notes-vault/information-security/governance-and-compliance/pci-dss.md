---
title: PCI DSS
tags:
  - security
  - governance
  - laws
date: 2025-09-01 12:28:34 +0530
updated: 2025-09-01 14:27:00 +0530
---

A set of security standards designed to ensure ALL companies that accepts, process, store or transmit credit card information maintain a secure environment.  

It is a standard not a law. It is enforced with contracts between merchants, banks, and payment brands.  
Card companies can fine banks for compliance violation and banks can withdraw the ability for accepting card payments for non-compliant merchants.  
Was created by: Visa, MasterCard, Discover, American Express and JCB.  

A PCI DSS breach is also a GDPR breach as card data is considered personal information.  

PCI DSS has 6 goals, 12 requirements and over 300 controls.  
Depending on level of the merchant the compliance requirements will be different.  
Merchants can fall into 4 levels.  

Depending on level have to submit self-assessment questionnaire (SAQ) or a Report on Compliance (RoC).  
SAQs are of several types and have different requirements.  
RoC most be conducted by a PCI Qualified Security Assessor (QSA) who will issue a report to the PCI Standards Council.  

### Compliance Requirements

**Install and Maintain Network Security Controls**  
Firewalls to secure data and prevent unauthorized access.  

**Apply Secure Configurations to All System Components**  
No using default system passwords.

**Protect Stored Account Data**  
Protect stored data using Encryption.  
Limit the storage of card data even possible.  
Securely delete all unnecessary data.  

**Protect Cardholder Data with during Transmission over Public Networks**  
Strong encryption protocols.

**Protect All Systems and Networks for Malicious Software**   
All devices need to have up-to-date anti-virus software.  

**Develop and Maintain Secure Systems and Software**  
Update software frequently, use secure coding practices, implement secure system configuration and regularly conduct vulnerability assessment.

**Restrict Access to System Components and Cardholder Data**  
Restrict access to cardholder data on need to know basis using access control, RBAC and principle of least privilege.

**Identify Users and Authenticate Access to System Components**  
Access Control to the system needs to be monitored with unique ids.

**Restrict Physical Access to Cardholder Data**  
Physical Security Controls (Access Control, camera’s, etc.)

**Log and Monitor All Access to System Components**  
Logging and Monitoring of system logs, analyzing security events, IDS/IPS.

**Test Security of Systems and Networks Regularly**
Regular testing to identify vulnerabilities and weaknesses.
Risk assessment, Penetration Testing, Vulnerability Assessment.  

**Support Information Security with Policies and Programs**  
Training and awareness programs, Incident response plans.   

### PCI DSS Levels

#### Service Providers

Level 1: More than 300,000 transactions.  
Level 2: Less than 300,000 transactions.  

#### Merchants
4 levels based on the transactions being processed.  
Level 1 has most transactions. The requirement varies by card company.  

Level 1: More 6 million  
Level 2: 1 million - 6 million  
Level 3: 20 thousand - 1 million  
Level 4: Less than 20 thousand  

All 4 levels have to complete an Attestation of Compliance (AOC) and Quarterly Vulnerability Scan.  
Level 3 & 4 need to complete SAQ  
Level 1 needs to complete RoC  
Level 2 has to complete SQA and RoC (Can be internally evaluated)  
