---
title: Syslog
tags:
  - networking
  - protocol
  - logs
date: 2026-05-31 15:56:56 +0530
updated: 2026-05-31 16:29:46 +0530
---

Syslog server allows us to centrally manage our log information.  
Uses UDP port 514. Some devices use TCP 1468.  
There are multiple syslog daemons (logging software) that can process messages from the syslog protocol.  

Network devices normally don’t store logs on disk (limited space).  
Syslog is the only way to retain logs for troubleshooting/compliance.

![[syslog-structure.png|600]]

#### Faculty Types
Facilities are words used to represent the source of the log.

![[syslog-facilities.png|560]]

#### Severity Values
Message with code 0 have the highest severity.

![[syslog-severity.png|550]]

**E**very **A**wesome **C**ISCO **E**ngineer **W**ill **N**eed **I**ce cream **D**aily

#### Message Structure
A syslog message consists of a priority, header and message.

Priority = (Faculty Value * 8) + Severity Value  
Lower the value higher the priority of the message.  
Header consists of information required to identify the source of the log.  
