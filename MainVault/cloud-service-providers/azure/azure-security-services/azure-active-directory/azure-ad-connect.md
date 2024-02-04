---
tags:
  - active-directory
  - cloud
  - azure
title: Azure AD Connect
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

Azure AD Connect is an hybrid service that is used to connect on-premise [[microsoft-active-directory|Microsoft Active Directory]] to an Azure Account (AAD)  
It is responsible for the synchronization and health management of AD objects

### Authentication Types

#### Cloud-based/ Password Hash
Uses Password Hash  
For on-prem identities the hash of the hash is stored in AAD  
No on-prem component is involved

#### Pass-through  
Authentication request is sent to AAD from where it is sent to on-prem AD  
The result of the authentication is then sent back to AAD  
The actual authentication is performed by on-prem AD

#### Federated    
The Federation service creates a SAML token which is passed to AAD  
AAD in turn creates a access and refresh token which is used by the service
