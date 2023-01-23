---
title: IDS and IPS
---

**Detection System**  
Detect attacks on the network and log and report the incident (Passively)

**Prevention System**  
Detect attacks on the network and makes changes on the network to try and prevent it (Actively). Makes changes to the ACL or closes services, sessions or ports

IDS/ IPS are of two types:

1. **Host Based** : Called as HIDS/ HIPS. Installed on servers and workstations. Detect attacks on the hosts not on the network. Will impact the hosts performance
2. **Network Based** : Called as NIDS/ NIPS. Installed on the network devices (Firewall, Router). Uses sensors on the network devices to report on the attack. Cant monitor traffic on individual hosts

 > [!NOTE]
 > IDS/ IPS are more robust and more feature rich as compared to firewalls