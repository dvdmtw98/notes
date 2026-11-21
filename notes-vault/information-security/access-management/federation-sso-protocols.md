---
title: Federation/ SSO Protocols
tags:
  - security
  - authentication
  - identity
date: 2026-11-16 23:17:38 +0530
updated: 2026-11-16 23:18:16 +0530
---

#### [[lightweight-directory-access-protocol-ldap|Lightweight Directory Access Protocol (LDAP)]]
Used to access and maintain distributed directory information services over an IP network.   
LDAP can also store auxiliary user data like group membership and roles.  

#### SAML
**Security Assertion Markup Language** is an older but widely-used standard for web-based SSO, it uses XML-based messages called assertions to pass authentication information between an identity provider and service providers.  
SAML is used for Single-Sign-On.  

#### [[oauth-2|OAuth 2.0]]
Industry-standard protocol for authorization.  
OAuth doesn't share password data but instead uses tokens to prove an identity between consumers and service providers.  
JWT is used for exchanging the tokens between applications.  
*OAuth is about granting access to functionality*

#### OpenID Connect (OIDC)
Open standard and decentralized authentication protocol.
It is an identity layer built on top of OAuth 2.0, it adds authentication to OAuth’s authorization capabilities.  
Dominant standard for modern web SSO implementations.  
*OpenID is about providing who are you*
