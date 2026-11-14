---
title: Operating System Security
tags:
  - security
  - os
  - configuration
date: 2026-11-14 16:40:00 +0530
updated: 2026-11-14 18:35:35 +0530
---

Hardening is done when a system is first built.  
Configuration best practices ensures the hardening holds afterword.  

### Pillars of Hardening
Disabling unnecessary services and features  
Patch Management  
Account and privilege management  
Configuration baseline management  

#### CIS Benchmarks
Prescriptive, community-vetted hardening guidance for virtually every major OS, application, and cloud platform.  
Level 1: Basic  
Level 2: Defense-in-depth  

[CIS Benchmarks®](https://www.cisecurity.org/cis-benchmarks)

#### DoD STIGs
Written specifically for federal environment but widely used in enterprise security.  

[Security Technical Implementation Guides \| Cyber Exchange](https://www.cyber.mil/stigs/)

AWS Security Hub: Can benchmark environment against CIS AWS Benchmark  
Azure Defender for Cloud: Gives a secure score that reflects how close the environment is to hardened best practices.  

### Configuration Best Practices

Using Group Policy and configuration management tools.  
Audit Logging and Monitoring Configuration  
Continuous Configuration Assessment  

**Application Whitelisting and Execution Control**  
AppLocker and WDAC (Windows Defender Application Control)  
AppLocker is policy-based and enforced in user-space.  
WDAC is more powerful and harder to bypass as its enforced at the kernel level.  

### System Processes & Services

#### Process
A running instance of a program.  
Processes have a PID, a parent process, a execution context, and a list of resources its consuming.  

##### Windows
First process on boot is always System (PID 4)  

`lsass.exe`  
Handles authentication on Windows and stores credentials material in memory.  
It runs as SYSTEM and never spawns a child process.  

`svchost.exe`  
Hosts multiple Windows services under a single process.  
Multiple of this process will be running at the same time.  

![[windows-boot-process.png|640]]

##### Linux
First process on boot is init or systemd (PID 1).  
Everything else is a child or descendant of PID 1.  

`/proc/[PID]/cmdline`: The command that was used to start the process.  
`/proc/[PID]/exe`: Executable that started the process (bash, python, etc.).  
`/proc/[PID]/fd`: Files used by the process.  
`/proc/[PID]/status`: Process information, including PID, PPID, and memory usage.  

#### Service
Processes that run in the background, usually started by the OS or a service manager, and they persist without a user needing to be logged in.  

```bash
systemctl list-units --type=service --start=running
systemctl list-units --type=service
```
