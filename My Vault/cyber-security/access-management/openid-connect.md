---
tags:
- security
- identity-management
- authentication
title: OpenID Connect
---

### OpenID Connect (OIDC)

Open standard for decentralized **authentication**  
It is a thin layer that sites over [OAuth 2.0](oauth-20.md) to provide login and profile information  
Used to verify the identity of the user  
Output artifact ID Token (JWT)  
JWT token typically has a header, payload/body and signature  
OIDC is what makes Single Sign-On (SSO) possible

ID Tokens are not meant for authorization  
They should never be sent to an API

The payload contains many small pieces of information called **Claims**  
`sub`: Unique Identifier for User  
`aud`: Intended audience for the application  
`iss`: Issuer Identity  

The claims present in the JWT is used by client to show user details in the application  
**Audience Claim**: Identifies the application/API that is meant to be the recipient of the Token

### OIDC Flow

* The OIDC Flow looks a lot like the OAuth Flow  
* When the client makes requests to the authorization server for access token it sends an additional field called `scope` which instructs the authorization server that it's an OIDC exchange  
* When the client exchanges the authorization code for access token, the authorization server sends an additional token called ID Token

---

[Access Management](access-management.md)