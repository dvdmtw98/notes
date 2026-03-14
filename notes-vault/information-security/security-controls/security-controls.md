---
title: Security Controls
tags:
  - security
  - controls
date: 2024-01-28 14:15:56 -0600
updated: 2026-03-08 22:23:35 +0530
---

Security Controls are mechanism put in place to migrate risks and protect the confidentiality, integrity, availability, non-repudiation, and authentication of data.  
Controls should be selected and deployed in a structured manner using a risk management framework.  
e.g. NIST Special Publication 800-53, ISO 27001

Think of CIA when thinking about selecting which security control should be used.  
Multiple security controls could be required to mitigate an risk.  

### Security Control Classes
Newer versions of NIST 800-53 do not use security control classes.

#### Technical (Logical) Controls
Controls that are implemented as a system (Hardware, Software, or Firmware).  
e.g. Antivirus, Firewall, IDS, Encryption  

#### Operational Controls
Set of controls that are implemented primarily by people rather than systems.  
e.g. Backup Procedures, Account Reviews, User Training Programs  

**Physical Controls**  
CCTVs, Shredding sensitive data, Security Guards, Locking doors

#### Managerial Controls
A category of security controls that provides oversight of the information system.  
e.g. Risk Assessment, User Training, Security Policies, Response Strategies

---

### Control Types
A control can fall into multiple categories at the same time.  

#### Preventative
A control that acts to eliminate or reduce the likelihood that an attack can succeed.  

#### Detective
May not prevent or deter access, but will identify and record any attempt or successful intrusion.  
e.g. IDS, Logs, Security Camera  

#### Corrective
Eliminate or reduce the risk of an intrusion event.  
Also aims to minimize the impact of a security incident after it has occurred.  
e.g. Antivirus

#### Physical
A security control that acts against in-person intrusion attempts.  

#### Deterrent
Aimed to discourage potential attackers (Warning, Banners)  

#### Compensating
Additional security controls to supplement primary (principal) security  

#### Responsive
System that actively monitors for potential vulnerabilities or attacks, and then takes action to mitigate them before they can cause damage.  
e.g. Firewall, IDS
