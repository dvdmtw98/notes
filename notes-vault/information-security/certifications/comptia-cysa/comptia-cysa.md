---
title: CompTIA CySA+
tags:
  - security
  - index
  - certification
date: 2024-09-02 16:59:57 -0500
updated: 2026-10-30 23:15:42 +0530
---
 
### Operating Environment

- Foundational Security Operations
	- [[soc-security-operations-center|Security Operations Center (SOC)]]
- Risk Management and Security Controls
	- [[risk-management|Risk Management]]
	- [[security-controls|Security Controls]]
	- [[governance-and-compliance|Governance & Compliance]]
- System Infrastructure Concepts
	- [[cloud-deployment-model|Cloud Deployment Model]]
	- [[software-defined-networking-sdn|Software Defined Networking (SDN)]]
	- [[cloud-native-architecture|Cloud Native Architecture]]
	- [[virtualization-and-container-concepts|Virtualization & Container Concepts]]
	- [[application-programming-interface-api|Application Programming Interface (API)]]
	- [[device-management|Device Management]]
	- [[endpoint-protection|Endpoint Protection]]
- Network Architecture Concepts
	- [[zero-trust-network-architecture-ztna|Zero-Trust Network Architecture (ZTNA)]]
	- [[secure-access-service-edge-sase|Secure Access Service Edge (SASE)]]
	- [[hybrid-cloud-networking|Hybrid Cloud Networking]]
	- [[network-segmentation|Network Segmentation]]
	 - [[network-security|Network Security]]
- Introduction to Critical Infrastructure
	- [[operational-technology-ot|Operational Technology (OT)]]
	- [[industrial-control-systems-ics|Industrial Control Systems (ICS)]]
	- [[supervisory-control-and-data-acquisition-scada|Supervisory Control and Data Acquisition (SCADA)]]
- Operating System Security



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

### System Processes & Services

#### Process
A running instance of a program.  
Processes have a PID, a parent process, a execution context, and a list of resources its consuming.  

##### Windows
First process on boot is System (PID 4)  
lsass.exe: Handles authentication on Windows and stores credentials material in memory.  
svchost.exe: Hosts multiple Windows services under a single process.  

##### Linux
First process on boot is init or systemd (PID 1).  
Everything else is a child or descendant of PID 1.  
 
#### Service
Processes that run in the background, usually started by the OS or a service manager, and they persist without a user needing to be logged in.  









