---
title: Azure AD Conditional Access
tags:
  - active-directory
  - azure
  - cloud
  - security
---

It provides an extra layer of security check before allowing an authenticated user access to data or assets    
Conditional Access applies to all types of Identities (even Service Principals)  
Required AAD Premium 1 or Premium 2  

Implemented using Conditional Access Policies  
The policies analyze signals and verify every attempt using via. Access Controls  
e.g. 2FA when accessing from a different location

**Signals** are metadata associated with an identity attempting to gain access  
e.g. IP Address/Location, Device, Application, Group Membership, Real-time sign-in risk detection

Common decision define the access controls that decide what level of access to prove based on signal information  
e.g. Block, Grant