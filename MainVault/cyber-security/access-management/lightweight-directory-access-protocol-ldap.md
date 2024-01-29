---
tags:
  - security
  - protocol
  - access
  - management
title: Lightweight Directory Access Protocol (LDAP)
date: 2024-01-28 14:15:56 -0600
---

It is an open, vendor-neutral, industry standard application protocol  
It is used to access and maintain distributed directory information services over an Internet Protocol (IP) network

A common use of LDAP is to provide central place to store usernames and passwords

LDAP enables use of "Same-Sign On"  
Same-Sign On allows users to use a single ID and password, but they need to enter it every time they have to login

**LDAPS**: LDAP over SSL or StartTLS

#### LDAP vs. SSO
Most SSO systems are using LDAP under the hood  
LDAP was not designed to work naively with web-applications  
LDAP is mostly found on on-premises and DevOps workloads  
Some systems only support integration with LDAP and not SSO
