---
title: Privileged Access Management
aliases:
  - PAM
tags:
  - security
  - access
  - authentication
date: 2026-11-15 23:25:38 +0530
updated: 2026-11-15 23:26:30 +0530
---

Set of technologies and processes specifically designed to secure, control, monitor, and audit privileged accounts and the access they provide.  

### Privileged Account Vault
A secure, encrypted repository that stores privileged credentials.  
When access is required, admin requests it from the vault.  
The vault issues a temporary credential and logs the session.  
The password is rotated after the session ends.  
e.g.) CyberArk, BeyondTrust, AWS Secrets Manager, Azure Key Vault  

### Just-in-Time (JIT) Access
The idea that privileged access should not be permanently assigned.  
JIT is always better than standing privilege (always assigned).  
Admins activate their privileged role when needed, provide a justification, and the access expires automatically.  
e.g.) Azure Privileged Identity Management (PIM), AWS Security Token Service (STS)

### Service Accounts
Accounts used by applications and automated processes rather than humans.  
They often have non-expiring passwords and are shared across multiple systems.  
