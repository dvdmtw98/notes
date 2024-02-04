---
tags:
  - security
  - soc
title: Pyramid of Pain
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

The model helps to determine the level of difficulty it will cause an adversary to change the indicators associated with them, and their campaign.

![[pyramid-of-pain.png|520]]

#### File Hash (Trivial)  
Changing even a single character in a file cases the hash to change  
If used as IOC (Indicator of Compromise) can be easily evaded by attacker

#### IP Address (Easy)
Attackers can use Fast Flux to rapidly change there IP Address  
[Fast Flux 101: How Cybercriminals Improve the Resilience of Their Infrastructure to Evade Detection and Law Enforcement Takedowns](https://unit42.paloaltonetworks.com/fast-flux-101/)

#### Domain Name (Simple)
Attacker can purchase multiple domains for the campaign  
Punycode can be used to purchase lookalike domains  
URL shorteners can be used to hide the actual Domain Name

#### Host and Network Artifacts (Annoying)
Attacker will have to circle back and change there attack tools and procedures  
Network Artifacts: Suspicious URLs, Unknown User Agent  
Host Artifacts: Suspicious Process, File Access

#### Tools (Challenging)
At this stage most attacker might totally give up the attack  
Antivirus Signatures, YARA rules and detection rules can be used  
SSDeep - Fuzzy Hashing - Performs Similarity Matching

#### TTPs (Tough)
By blocking a attackers TTP the attacker is left with no option but to give up on the attack  
MITRE ATT&CK Matrix
