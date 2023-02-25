---
title: Azure Active Directory (AAD)
tags: [azure, cloud, security, active-directory]
---

Enterprise Identity and Access Management service  
Allows to sync with on-prem [Microsoft Active Directory](../../../Operating%20System/Windows/Microsoft%20Active%20Directory/Microsoft%20Active%20Directory.md)

AAD uses a flat hierarchy to store Identities  
It utilizes cloud based authentication protocols instead of Kerberos, NTLM  
Allows for [Role Based Access Control (RBAC)](Role%20Based%20Access%20Control%20(RBAC).md)  

---

### Supported Authentication Types

**Cloud based**  
Uses Password Hash  
For on-prem identities the hash of the hash is stored in AAD  
No on-prem component is involved

**Passthrough**  
Auth request is sent to AAD from where on a bus it is sent to on-prem AD  
The rest of the auth is then sent back to AAD  
The actual authentication is performed by on-prem AD

**Federation**    
The Federation service creates a SAML token which is passed to AAD  
AAD in turn creates a access and refresh token which is used by the service

---

### Conditional Access

P1 tier and above supports <u>Conditional Access</u> a feature that allows to enforce certain policies or controls when a predefined condition is met  
Conditional Access applies to all types of Identities (even Service Principals)  

### Security Groups

They are used to group AD objects together and apply similar config and settings    
Azure AD **Security Groups** are Security Principals i.e. they can be used to access Azure Resources  
All types of identities can be added into a Security Group  
The members can be added natively from cloud or can be synced from on-prem AD
Details of groups synced from on-prem has to be directly changed in on-prem AD  
Members of groups can be added Statically or Dynamically (Using a condition)  

Microsoft 365 groups are used to access 365 resources

### Privileges Identity Managed (PIM)

Requires Premium P2  
Allows users to elevate there permissions to a different role for a fixed period when a certain condition is meet  
Allows active assignment (Valid for a fixed time) or eligible assignment (Have to elevate)  
Not used for [Application Identity Types](Application%20Identity%20Types.md) i.e. Service Prinipals