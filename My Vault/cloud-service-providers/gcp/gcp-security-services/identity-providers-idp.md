---
tags:
- cloud
- security
title: Identity Providers (IdP)
---

A system entity that creates, maintains and manages identity information for principals and also provides authentication services to applications within a federation or distributed network

Identity Providers: Facebook, Amazon, Google, Twitter, GitHub, LinkedIn, etc.

[Federation](../../../cyber-security/access-management/federation.md)

---

#### [Lightweight Directory Access Protocol (LDAP)](lightweight-directory-access-protocol-ldap.md)
Used to access and maintain distributed directory information services over an IP network  
LDAP can also store axillary user data like group membership and roles  

#### OpenID
Open standard and decentralized authentication protocol  
*OpenID is about providing who are you*

#### [OAuth 2.0](../../../cyber-security/access-management/oauth-2.md)
Industry standard protocol for authorization  
OAuth doesn't share password data but instead uses tokens to prove an identity between consumers and service providers  
JWT are used for exchanging the tokens between applications  
*OAuth is about granting access to functionality*

#### SAML
Security Assertion Markup Language is an open standard for exchanging authentication and authorization between an identity provider and a service provider  
Use case of SAML is Single-Sign-On via web browser