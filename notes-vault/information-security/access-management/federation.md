---
title: Federation
tags:
  - security
  - access
  - identity
  - management
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

Process that allows for the linking of electronic identities and attributes across multiple distinct identity management systems  
Uses the trust relationship that exists between different systems

### Login Process

##### Login Initiation
The user accesses a service or application and chooses to log in

##### Redirection to Identity Provider
Service Provider redirects the user to [[identity-providers-idp|Identity Provider (IdP)]] for authentication

##### Authenticate the User
IdP validates the user's identity

##### Generate Assertion
IdP generates assertion that includes information about the user's identity

##### Return to Service Provider
Retired back to Service Provider with the assertion from IdP

##### Verification and Access
Service Provider checks assertion and grants access based on its information
