---
title: Network Time Protocol
aliases:
  - NTP
tags:
  - security
  - networking
date: 2026-11-14 22:26:21 +0530
updated: 2026-11-14 22:27:22 +0530
---

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
