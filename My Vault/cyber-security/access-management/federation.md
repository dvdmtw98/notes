---
title: Federation
tags:
  - security
  - access
  - identity
  - management
---

Process that allows for the linking of electronic identities and attributes across multiple distinct identity management systems  
Uses the trust relationship that exists between different systems

### Login Process

##### Login Initiation
User accesses a service or application and chooses to log in

##### Redirection to Identity Provider
Service Provider redirects user to [Identity Provider (IdP)](identity-providers-idp.md) for authentication

##### Authenticate the User
IdP validates the users identity

##### Generate Assertion
IdP generates assertion that includes information about the users identity

##### Return to Service Provider
Retired back to Service Provider with the assertion from IdP

##### Verification and Access
Service Provider checks assertion and grants access based on its information
