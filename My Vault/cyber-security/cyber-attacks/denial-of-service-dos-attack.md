---
title: Denial of Service (DoS) Attack
tags:
  - attack
  - networking
---

An attack that attempts to make a computer or servers resource unavailable

#### Flood Attack
Attempts to send more packets to a server than what it can handle
**Protection**: Flood Guards, Timeout, IDS

##### Ping Flood
Server is sent too many ping (ICMP echo) packets

##### SYN Flood
Attacker initiates multiple TCP sessions but never completes the [three-way handshake](../../computer-networks/layer-wise-concepts/transport-layer-concepts/tcp-three-way-handshake.md)

#### Permanent Denial of Service (PDoS)
An attack which exploits a security flaw by re-flashing the firmware, permanently breaking the networking device

#### Fork Bomb
A large number of processes is created to use up a computers available processing power

#### Distributed Denial of Service (DDoS)
Many machines are used to launch an attack against a single server to cause denial of service condition

#### DNS Amplification Attack
Allows attacker to initiate DNS requests from a spoofed IP address to flood a website

---

### Prevention Measures

##### Blackhole/Sinkhole
Send the traffic from the attacker to non-existent IP addresses

##### IPS (Intrusion Prevention System)
Can detect small scale attacks and stop them

##### Elastic Cloud Infrastructure
Scale-up resources based on the traffic
