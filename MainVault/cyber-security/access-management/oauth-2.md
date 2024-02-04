---
tags:
  - security
  - identity
  - management
title: OAuth 2.0
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

### Key Terms

**Resource Owner**: User  
**Client**: Application used by the resource owner  

**Authorization Server**: Service that knows Resource Owner i.e. site where user has account  
**Resource Server**: Service/API that client wants to use on behalf of the resource owner  

**Redirect URI**: URL that authorization server will redirect the Resource Owner after granting permissions to client  
**Response Type**: Type of information the client expects to receive e.g. authorization code  
**Scope**: Granular permissions that the client requires to perform actions  
**Consent**: Client asking the Resource Owner for permission to use the required scopes  

**Client Id**: Used to identify the client on the authorization server  
**Client Secret**: A value that is only known to client and authorization server. Used by them to share information privately  

**Authorization Code**: Temporary short-lived code that is sent back to the client from the authorization server. The client sends back the Authorization code along with the client secret for Access Token  
**Access Token**: Key that will be used by the client to communicate with the resource server

### OAuth 2.0

Allows application to permission action on behalf of user in another application  
OAuth is used to **authorize**/delegate authorization with an external resource  

Authorization with external resource is performed using **Access Token** (aka Bearer Token)  
They do not have a defined format but are mostly JWTs  
If the token does not include an audience claim then it becomes an **opaque token**

Access Token does not guarantee that the user is logged in  
The client does not understand and does not care about the content of the Access Token

### Confidential Client and Public Client

**Confidential Client** a client that can store a secret without exposing it publicly  
e.g. Server-side applications that can use environment variables to store information

**Public Clients** are clients that do not have the mechanism to store secrets  
e.g. SPAs, Mobile Apps, IoT Devices, etc. and other applications where the user can access the source code 

Client Secret is included in the request to the authorization server for access token  
Since public cannot store secrets an alternative approach is used where a secret is generated on the fly by the application    
This process of generating secret is called PCKE (Proof Key for Code Exchange)
