---
tags:
  - security
  - protect
  - appliance
title: Endpoint Protection
date: 2024-01-28 14:15:56 -0600
---

#### Antivirus
Software capable of detecting and removing virus infections and other types of malware
They are limited to threat prevention and do not provide any insights/telemetry to the security team on what happened

#### Host-based [[ids-and-ips|IDS and IPS]]
System that monitors a computer system for unexpected behavior or drastic changes in systems state  

#### Endpoint Protection Platform (EPP)
A software agent and monitoring system that performs security tasks performed by multiple services like antivirus, HIDS/HIPS, DLP, Firewall and File Encryption  
It uses signature-based detection, heuristics and behavioral analysis for detecting threats   They work great at detecting known threats  
Mainly used for enforcing basic IT and security hygrine related activates

#### Endpoint Detection and Response (EDR)
Software agent that collects system data and logs to perform analysis to provide early threat detection  
They are proactive systems and supports continuous monitoring, threat detection and incident response  
It all has threat hunting features that can protect against new attacks

**EDR Steps**  
Data Collection - Data Consolidation - Threat Detection - Alerts & Threat Response - Threat Investigation - Remediation

#### Extended Detection and Response (XDR)
Security strategy that integrates multiple protection techniques into a single platform to improve detection accuracy and simplify the incident response process  
No need of separate solutions for Network Security, Email Security and Endpoint Security

![[endpoint-security-evolution.webp|540]]

#### File Integrity Monitoring (FIM)
Used to validate the integrity of OS and application software files using a verification method between the current file state and a known, good baseline  
Often included as part of EDR and XDR

#### User and Entity Behavior Analytics (UEBA)
A system that can provide automated identification of suspicious activities by user accounts and computer hosts  
Entity: Security Infrastructure like Routers, Firewalls  
They are heavily dependent on advanced computational techniques (AI & ML)  
e.g. Microsoft Advanced Threat Analytics & Splunk User Behavior Analytics
