---
title: Azure Active Directory (AAD)
---

Enterprise Identity and Access Management service  
Allows to sync with on-prem [Microsoft Active Directory](../../../Operating%20System/Windows/Microsoft%20Active%20Directory/Microsoft%20Active%20Directory.md)

AAD uses a flat hierarchy to store Identities  
It can be accessed from anywhere across the work  
It utilizes cloud based authentication protocols instead of Kerberos, NTLM

Supported Cloud Based, Passthrough and Federated Authentication  
Allows for [Role Based Access Control (RBAC)](Role%20Based%20Access%20Control%20(RBAC).md)

Azure AD Security Groups behave similar to Service Principal and can be given access to  Azure Resources  
The members can be added natively from cloud or can be synced from on-prem AD
Microsoft 365 groups are used to access 365 resources

**<u>Privileges Identity Managed (PIM)</u>**  
Required AD Premium P2    
Allows users to elevate there permissions to a different role for a fixed period when a certain condition is meet

---

### Identity

The fact of being someone or something  
A user with an username and password  
It can also be an application/server with identifies itself with an secret key or certificate

### Authentication

The process of verification of identity  
It is done with the help of some proof like password, access key, etc.

### Authorization

The process of ensuring that only authenticated identities get access to resources for which they have been granted access

### Access Management

The process of controlling, verifying, tracking and managing access to authorized users and applications