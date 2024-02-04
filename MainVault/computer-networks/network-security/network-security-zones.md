---
tags:
  - networking
  - security
title: Network Security Zones
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

An organizations network can be divided into two zones:  
**Uncontrolled Zone**: Network outside the organizations control (Internet, WAN)  
**Controlled Zone**: Subnet that protects internal network from uncontrolled zone

![[network-security-zones.jpg|400]]

#### De-militarized Zone (DMZ)
Also called [[screened-subnet|Screened Subnet]], Perimeter Network or Extranet  
Public facing services that can access the internet  
Web Servers, Proxy Servers, DNS Servers, Email and File Servers    

#### Internal Network (Intranet)
Internal Private Network that the organization needs to protect  
Used for internal business  
Outside users (Internet, Extranet) cannot access resources on the Intranet

#### Restricted Zone
Private network that only business partners an access  
Used to store highly confidential and sensitive information  
Only accessible from Intranet

![[security-zones.png|520]]