---
title: CompTIA CySA+
tags:
  - security
  - index
  - certification
date: 2024-09-02 16:59:57 -0500
updated: 2026-11-14 20:10:56 +0530
---
 
### Operating Environment

- Foundational Security Operations
	- [[soc-security-operations-center|Security Operations Center (SOC)]]
- Risk Management and Security Controls
	- [[risk-management|Risk Management]]
	- [[security-controls|Security Controls]]
	- [[governance-and-compliance|Governance & Compliance]]
- System Infrastructure Concepts
	- [[cloud-deployment-model|Cloud Deployment Model]]
	- [[software-defined-networking-sdn|Software Defined Networking (SDN)]]
	- [[cloud-native-architecture|Cloud Native Architecture]]
	- [[virtualization-and-container-concepts|Virtualization & Container Concepts]]
	- [[application-programming-interface-api|Application Programming Interface (API)]]
	- [[device-management|Device Management]]
	- [[endpoint-protection|Endpoint Protection]]
- Network Architecture Concepts
	- [[zero-trust-network-architecture-ztna|Zero-Trust Network Architecture (ZTNA)]]
	- [[secure-access-service-edge-sase|Secure Access Service Edge (SASE)]]
	- [[hybrid-cloud-networking|Hybrid Cloud Networking]]
	- [[network-segmentation|Network Segmentation]]
	 - [[network-security|Network Security]]
- Introduction to Critical Infrastructure
	- [[operational-technology-ot|Operational Technology (OT)]]
	- [[industrial-control-systems-ics|Industrial Control Systems (ICS)]]
	- [[supervisory-control-and-data-acquisition-scada|Supervisory Control and Data Acquisition (SCADA)]]
- Operating System Security
	- [[operating-system-security|Operating System Security]]
- Logging Concepts and Analysis
	- [[syslog|Syslog]]


### Log Ingestion Methods

#### Agent-based Collection
Installation of a lightweight software agent directly on the source system.  
Reads local log files, parses them and forwards them to the SIEM.  
Reliable and controllable. Downside operational overhead.  
e.g.) Splunk Universal Forwarder, Elastic Beats, Microsoft Monitoring Agent  

#### Agentless Collection
Logs are pulled from source systems without installing anything on them.  
Less granular control and reliability gaps if network is unreliable.  
e.g.) Syslog, WMI (Windows), SNMP Traps (Network device)  

### Network Time Protocol (NTP)
Standard protocol used to synchronize clocks across a network.  
NTP uses UDP port 123.  

**NTPv4 and Precision Time Protocol (PTP)**  
Support cryptographic authentication to ensure systems are syncing from legitimate time sources and not from an attacker-controlled NTP server.  

#### Stratum 0
Most accurate reference clocks, these are atomic clocks, GPS receivers, and radio-controlled time sources, they do not communicate directly with network clients.  

#### Stratum 1
Servers that sync directly from Stratum 0 sources, these are the authoritative time servers.  

```bash
# Windows
w32tm /query /status

# Linux
timedatectl status
```

### Log Retention

**PCI DSS**: 12 months data with at least 3 months readily accessible.  
**HIPAA**: Security documentation and audit controls for 6 years.  
**SOC 2**: 12 months of log retention.  
**GDPR**: Log retention for 1-3 years.  
**NIST CSF**: 12 o 36 months of data retention.  

### Log Storage Tiers

#### Hot Storage
Primary SIEM storage, fast and queryable.  
Where recent logs live, typically 30 to 90 days.  
Can be searched in real time.  

#### Warm Storage
Still accessible but slower and cheaper.  
Logs from 90 days to 12 months live in this tier.  
Can still query data but it can take longer.  

#### Cold Storage
Log-term archival tier.  
Logs older than 12 months that need to be kept for compliance reasons.  
Cannot query this data in real-time.  
