---
title: Supervisory Control and Data Acquisition
aliases:
  - SCADA
tags:
  - security
  - ot
  - process
date: 2026-10-26 23:10:06 +0530
updated: 2026-10-27 22:45:05 +0530
---

### Distributed Control System (DCS)
A type of ICS were the control is distributed across many PLCs and local controllers throughout the facility.  
Used in large **single-site** operations such oil refinery, chemical plant, power generation facility.  

### Supervisory Control and Data Acquisition (SCADA)
A large-scale industrial control system that manages and monitors physical processes across multiple geographically distributes sites.  
Used in electrical, distribution, water, oil and gas pipelines.  

**DCS**: One site, local control.  
**SCADA**: Many sites, remote supervisory control over WAN.  

#### SCADA Server/ Master Terminal Unit (MTU)
The central management system.  
Collects data from all field devices, processes that data, gives operators a centralized view of the entire operation and sends supervisory commands down to the field.  

SCADA sends high-level supervisory commands, the local field devices handle the low-level PLC commands.  

#### Remote Terminal Unit (RTU)
Similar to PLCs but designed specifically for remote, distributed environment.  
Designed to operate in harsh conditions with minimal maintenance.  
Can communicate back with SCADA server over long-distance WAN links.  

Old SCADA Systems: Used serial communication, radio, and even satellite links.  
Modern SCADA Systems: Use cellular networks and IP-based communications.  

#### SCADA HMIs
Often display dynamic process diagrams, called mimic diagrams, that show operators a visual representation of the physical process.  
They often run on outdated operating systems.  

### SCADA Communication Protocols

#### DNP3
Supports distributed polling, where the SCADA server periodically request data from RTUs.  
Popular across the water and energy sector.  

#### Open Platform Communications Unified Architecture (OPC UA) 
A more modern protocol that includes built-in security features like authentication and encryption.  

#### Inter-Control Center Communication Protocol (ICCP)
Used specifically for communication between utility control centers.  
