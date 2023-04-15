---
title: Attack Frameworks
tags: [security, concept, framework]
---

### Lockheed Martin Kill Chain

**Reconnaissance**: Attacker determines what methods to use to complete/ perform the attack. Uses passive OSINT to gather information on target  

**Weaponization**: Attacker couples payload code (enables access) along with exploit code (exploits vulnerability on system)

**Delivery**: The attacker identifies a vector by which to transmit the weaponized code to the target environment

**Exploitation**: The weaponized code is executed on the target system by this mechanism

**Installation**: This mechanism enables the weaponized code to run a remote access tool and achieve persistence on the target system

**Command & Control (C2)**: The weaponized code establishes an outbound channel to a remote server that can then be used to control the remote access tool and possibly download additional tools to progress the attack

**Actions on Objective**: The attacker typically uses the access he has achieved to covertly collect information from the target systems and transfer it to a remote system (data exfiltration) or archive other goals and motives

### MITRE ATT&CK Framework

A knowledge base mentioned by MITRE for listing and explaining specific adversary tactics, techniques and common knowledge or procedures

The pre-ATT&CK tactics matrix aligns to the reconnaissance and weaponization phase of the kill chain

### Diamond Model of Intrusion Analysis

A framework for analyzing cybersecurity incidents and intrusions by exploring the relationship between four core features: adversary, capacity, infrastructure and victim