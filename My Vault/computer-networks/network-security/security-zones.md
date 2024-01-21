---
tags:
- networking
- security
title: Security Zones
---

An organizations network can be divided into two zones:  
**Uncontrolled Zone**: Network outside the organizations control (Internet, WAN)  
**Controlled Zone**: Subnet that protects internal network from uncontrolled zone

#### De-militarized Zone (DMZ)
Public facing services that can access the internet  
Web Servers, Proxy Servers, DNS Servers, Email and File Servers    
Also called [Screened Subnet](screened-subnet.md)

#### Internal Network (Intranet)
Internal Private Network that the organization needs to protect  
Used for internal business  
Outside users (Internet, Extranet) cannot access resources on the Intranet

#### Restricted Zone
Private network that only business partners an access  
Used to store highly confidential and sensitive information  
Only accessible from Intranet

![Security Zones|520](../images/security-zones.png)