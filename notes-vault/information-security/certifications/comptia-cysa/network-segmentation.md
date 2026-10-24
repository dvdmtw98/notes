---
title: Network Segmentation
tags:
  - security
  - networking
  - cloud
date: 2026-10-21 23:42:48 +0530
updated: 2026-10-21 23:46:12 +0530
---

### Network Segmentation
Dividing network into smaller, isolated zones so that traffic between zones is controlled and restricted.  
Segmentation is a preventive control and a response tool.  

#### Physical Segmentation
Gives the strongest isolation, but expensive and inflexible.  

#### VLAN-based Segmentation  
Most common form of segmentation in traditional networks.  
Divides a physical infrastructure into multiple logical networks.  

#### Firewall-based Segmentation  
Puts firewall policy enforcement at every segment boundary.  

### Isolation
A reactive action, used in middle of incident to contain a threat.  

#### Network Isolation
Remove device from its VLAN.  
Place the device in a quarantined VLAN.  
Block all traffic at the nearest firewall.  

#### EDR-based Isolation  
EDR agent on the endpoint blocks all network traffic except the communication channel back to the EDR platform.  
Faster and more targeted then network-level isolation.  
**Tools**: CrowdStrike, SentialOne  

Shutting down a compromised device destroys volatile evidence, isolation preserves such evidence.  

### Cloud Network Segmentation

**VPCs**: Isolated virtual networks.  
**Subnets**: Segments inside a VPC.  
**Security Groups**: Acts like host-based firewall controlling traffic that reaches individual instances.  
**Network ACLs**: Act like traditional firewalls at the subnet boundary.  

Isolation is achieved by modifying the security group attached to the instance to block all inbound and outbound traffic.  
