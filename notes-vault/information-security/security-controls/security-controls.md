---
title: Security Controls
tags:
  - security
  - controls
date: 2024-01-28 14:15:56 -0600
updated: 2026-09-28 23:01:56 +0530
---

Security Controls are mechanism put in place to migrate risks and protect the confidentiality, integrity, availability, non-repudiation, and authentication of data.  
e.g. NIST Special Publication 800-53, ISO 27001

Multiple security controls could be required to mitigate an risk (Defense in Depth).  

### Security Control Types

#### Administrative Controls
They are policy-based, process-driven and people-focused.  
Sometimes also called **managerial** controls.  
e.g.) Risk Assessment, User Training, Security Policies, Response Strategies, Separation of Duties, Acceptable Use Policy.  

#### Technical Controls
Controls that are implemented as a system (Hardware, Software, or Firmware).  
Technical controls generate telemetry.  
e.g.) Antivirus, Firewall, IDS, Encryption, MFA, ACL  

**Compensating Control**  
A technical workaround used when the ideal control cannot be applied.  

#### Physical Controls
Tangible, environmental safeguards that protect assets in the real world.  
e.g.) CCTVs, Shredding sensitive data, Security Guards, Locking Doors, Server cages

### Security Control Functions
A control can fall into multiple categories at the same time.  
Acronym: **P**retty **D**ogs **R**un **C**arefully

#### Preventative
Designed to stop a security incident from happening.  
Their goal is to reduce the **likelihood** of an attack succeeding by blocking it early.  
Act before or during an attack to block it.  
e.g.) Firewalls, MFA, Encryption, Awareness Trainings

#### Detective
Identify and alert users when a security incident is occurring or has occurred.  
May not prevent or deter access, but will identify and report intrusions.  
e.g.) IDS, SIEM, XDR, UEBA, Logs  

#### Responsive
Designed to limit the damage of an incident that’s already underway.  
Speed matters a lot in responsive control (SOAR).  
Sometimes also referred to as **Deterrent** control.  
e.g.) Isolating an Compromised Endpoint, Blocking Malicious IP, Disabling compromised account, etc.  

#### Corrective
Restore systems and operations to normal after an incident.  
Addresses the root cause to prevent recurrence, their function is recovery and improvement.  
e.g.) Restore from clean backup, Patch, Firewall rules, RCE, Post-Incident Review  
