---
title: Azure AD Connect
tags:
  - active-directory
  - cloud
  - azure
---

Azure AD Connect is an hybrid service that is used to connect on-premise [Microsoft Active Directory](../../../../Operating%20System/Windows/Microsoft%20Active%20Directory/Microsoft%20Active%20Directory.md) to an Azure Account (AAD)  
It is responsible for the synchronization and health management of AD objects

### Supported Authentication Types

**Cloud-based/ Password Hash**  
Uses Password Hash  
For on-prem identities the hash of the hash is stored in AAD  
No on-prem component is involved

**Pass-through**  
Authentication request is sent to AAD from where it is sent to on-prem AD  
The result of the authentication is then sent back to AAD  
The actual authentication is performed by on-prem AD

**Federated**    
The Federation service creates a SAML token which is passed to AAD  
AAD in turn creates a access and refresh token which is used by the service
