---
title: Log Ingestion
tags:
  - security
  - logs
date: 2026-11-14 22:28:15 +0530
updated: 2026-11-14 22:28:15 +0530
---

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
