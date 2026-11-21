---
title: Single Sign-On
aliases:
  - SSO
tags:
  - security
  - password
  - access
  - protect
date: 2024-01-28 14:15:56 -0600
updated: 2026-11-16 23:22:35 +0530
---

Pratical result, of federated identity.  
Authentication process that allows a user to access multiple applications or websites by logging in only once with a single set of credentials.  
SSO works based on a <u>trusted relationship</u> that is established between an application and an <u>Identity Provider</u>.

### Login Process

**Login Initiation**  
The user accesses a service or application and chooses to log in.

**Redirection to Identity Provider**  
Service Provider redirects the user to [[identity-providers-idp|Identity Provider (IdP)]] for authentication.

**Authenticate the User**  
IdP validates the user's identity.

**Generate Assertion**  
IdP generates assertion that includes information about the user's identity.

**Return to Service Provider**  
Redirected back to Service Provider with the assertion from IdP.

**Verification and Access**  
Service Provider checks assertion and grants access based on its information.
