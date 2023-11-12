---
tags:
  - networking
  - security
  - device
---

#### Intrusion Detection System
Detect attacks on the network and log and report the incident

#### Types of Alerts

**True Positive**: Malicious activity identified as an attack  
**True Negative**: Legitimate activity detected so no alerts  
**False Positive**: Legitimate activity is detected as an attack  
**False Negative**: Malicious activity is not detected as an attack

#### Intrusion Prevention System  
Detect attacks on network and actively try and prevent it  
Makes changes to the ACL or closes services, sessions or ports

[Intrusion Detection VS Prevention Systems: What's The Difference?](https://purplesec.us/intrusion-detection-vs-intrusion-prevention-systems/)

#### IDS/ IPS Types

**Host Based**  
Called as HIDS/ HIPS  
Installed on servers and workstations  
Detect attacks on the hosts not on the network  
Will impact the hosts performance

**Network Based**  
Called as NIDS/ NIPS  
Installed on the network devices (Firewall, Router)  
Uses sensors on the network devices to report on the attack  
Cant monitor traffic on individual hosts

![ids-vs-ips|600](../../Cyber%20Security/images/ids-vs-ips.webp)
#### Monitoring Techniques

**Signature-based Detection**    
Looks for a specific string of bytes to trigger an alert  

**Policy-based Detection**  
Relies on a specific declaration of the security policy  

**(Statistical) Analogy-based Detection**  
Analyze current network traffic against established baseline traffic and alerts if outside the statistical average
