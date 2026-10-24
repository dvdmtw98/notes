---
title: Secure Access Service Edge
aliases:
  - SASE
tags:
  - security
  - networking
  - cloud
  - access
date: 2026-10-20 22:59:04 +0530
updated: 2026-10-20 23:37:07 +0530
---

Zero Trust is difficult to implement in a large hybrid organization.  
SASE is a cloud-based architecture that combines wide area networking (WAN) and network security into a single, integrated service.  
SASE delivers ZTNA at cloud scale, without requiring on-premises infrastructure.  

![[sase-architecture.png|640]]

### SASE Components

#### Software-Defined Wide Area Network (SD-WAN)
Handles the networking side of SASE.  
It intelligently routes traffic across multiple transport links.  
SD-WAN replace the need for expensive dedicated WAN circuits.  
Gives visibility into traffic flows across all connectivity paths.  

#### Secure Web Gateway (SWG)
Intercepts and inspects all web traffic.  
Performs URL filtering to block malware or policy violating sites.  
Can scan traffic and perform SSL inspection to see inside encrypted traffic.  
Tools: Zscaler Internet Access, Cisco Umbrella  

#### Cloud Access Security Broker (CASB)
Gives visibility and control over the organizations use of cloud applications.  
Provides invisibility into sanctioned apps and unsanctioned shadow IT apps.  
Can enforce DLP policies on cloud-app traffic.  

#### Firewall as a Service (FWaaS)
Delivers firewall policy enforcement from the cloud instead of relying on physical firewall appliances at every location.  

#### Zero Trust Network Access (ZTNA)
The application access layer is embedded into SASE.  
Instead of giving VPN access to the entire network, ZTNA in SASE grants access to specific applications based on verified identity and device posture.  
[[zero-trust-network-architecture-ztna|Zero Trust Network Access (ZTNA)]]
