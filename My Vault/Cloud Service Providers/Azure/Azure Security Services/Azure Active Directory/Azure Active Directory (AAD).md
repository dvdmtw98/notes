---
title: Azure Active Directory (AAD)
tags: [azure, cloud, security, active-directory]
---

Enterprise Identity and Access Management service  
**Authentication**: [OpenID Connect](../../../../Cyber%20Security/Access%20Management/OpenID%20Connect.md)  
**Authorization**: [OAuth 2.0](../../../../Cyber%20Security/Access%20Management/OAuth%202.0.md)

Azure AD is now renamed to Microsoft Entra ID

AAD uses a flat hierarchy to store Identities  
It utilizes cloud based authentication protocols instead of Kerberos, NTLM  
Allows for [Role Based Access Control (RBAC)](../Role%20Based%20Access%20Control%20(RBAC).md)

**App Registration**: Allows developers to integrate web-apps to Azure AD

* **Azure AD Concepts**
	* [External Identity Types](External%20Identity%20Types.md)
	* [Application Identity Types](Application%20Identity%20Types.md)	
* **Azure AD Features**
	* [Azure AD Connect](Azure%20AD%20Connect.md)
	* [Azure AD Conditional Access](Azure%20AD%20Conditional%20Access.md)

#### AAD Service Tiers
**Free**: MFA, SSO, Basic Security & Usage Reports, User Management  
**Microsoft 365**: Custom Branding, SLA, Password Reset    
**Premium 1**: Hybrid Architecture, Advanced Group Access, Conditional Access  
**Premium 2**: Identity Protection, Identity Governance

#### Security Groups
They are used to group AD objects together and apply similar config and settings    
Azure AD **Security Groups** are Security Principals (allows access Azure Resources)  
All types of identities can be added into a Security Group  

The members can be added natively from cloud or can be synced from on-prem AD  
Details of groups synced from on-prem has to be directly changed in on-prem AD  
Members of groups can be added Statically or Dynamically (Using a condition)  

Microsoft 365 groups are used to access 365 resources  
Only users can be added into a Microsoft 365 group

#### Privileges Identity Managed (PIM)
Allows users to elevate there permissions to a different role for a fixed period when a certain condition is meet  
Allows active assignment (Valid for a fixed time) or eligible assignment (Have to elevate)  
Not used for [Application Identity Types](Application%20Identity%20Types.md) i.e. Service Principals  
Requires AAD Premium 2  

#### Azure AD App Manifest
It is the definition of the application object in the AD Identity Platform  
It contains all the configuration related to authentication and authorization  

#### Azure AD Password Protection  
Protect passwords from identity attacks like Password Spraying  
Uses an auto updating global password ban list to prevent some of certain words  
Required AAD Premium 1 or Premium 2

#### Emergency Access Accounts
Emergency accounts to prevent admins from accidently being locked out of Azure AD  
Recommendation is to have two or more emergency access accounts per organization  
They are highly privileged and are not assigned to a specific user  
These accounts are not federated and not synced from on-premises environment  
