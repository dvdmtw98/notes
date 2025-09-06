---
title: Security Concepts
tags:
  - cloud
  - azure
  - security
date: 2024-01-28 14:15:56 -0600
updated: 2025-08-31 20:04:54 +0530
---

###  Cloud Security Posture Management (CSPM)

**Definition:**  
CSPM tools continuously monitor cloud environments to identify misconfigurations, compliance gaps, and security risks, helping to enforce best practices and automate remediation.  

**Purpose:**  
To proactively safeguard cloud infrastructure (IaaS/PaaS) against mismanagement and insecure configurations.  

**Key Features:**  
Real-time posture assessment, compliance checks, automated alerts, and remediation.  

### Cloud Workload Protection Platform (CWPP)

**Definition:**  
CWPP solutions protect individual cloud workloads such as VMs, containers, and serverless functions typically via agents installed on those workloads.  

**Purpose:**  
To secure runtime environments with threat detection, vulnerability scanning, and behavioral protection.  

**Key Features:**  
Runtime monitoring, pre-runtime vulnerability scanning, anomaly detection, system integrity checks.  

### Cloud-Native Application Protection Platform (CNAPP)

**Definition:**  
A CNAPP is a comprehensive, unified cloud security platform that integrates CSPM, CWPP, CIEM and other security capabilities under one roof.  

**Purpose:**  
To provide holistic protection for cloud-native applications across their entire lifecycle from development to runtime.  

**Key Capabilities:**  
Infrastructure-as-Code scanning, compliance governance, entitlement management, workload protection, vulnerability management, API and container security.  

### Cloud Access Security Broker (CASB)

**Definition:**  
A CASB is a security intermediary (either cloud-based or on-premises) that enforces enterprise security policies between users and cloud services.  

**Purpose:**  
To provide visibility, data protection, threat mitigation, and compliance enforcement for cloud service usage (especially SaaS).  

**Key Capabilities:**  
Shadow IT discovery, DLP (Data Loss Prevention), encryption/tokenization, threat detection, policy enforcement, authentication, logging.  

**Deployment:** Often deployed as proxy-based (inline) or API-based solutions.

### Cloud Infrastructure Entitlement Management (CIEM)

**Definition:**  
CIEM is a cloud-native security solution that manages and governs access entitlements (permissions and privileges) for both human and non-human identities across cloud or multi-cloud environments. It enforces the principle of least privilege.

**Purpose:**  
To shrink the cloud attack surface by identifying and continuously reducing excessive or stale permissions, providing centralized visibility and automated entitlement governance.

---

### Microsoft Security Principles  

**Control**: You in control of privacy with easy to use tools and clear choices  
**Transparency**: Transparent about data collection and use  
**Security**: Protect data using strong security and encryption  
**Strong Legal Protection**: Respect local privacy laws & fight for legal protection of data  
**No content-based targeting**: No targeted ads using email, chats, files or personal content 
**Benefits to you**: When we collect data its to make your experience better.

### Cloud Adoption Framework

![[caf-overview.png|650]]

[Microsoft Cloud Adoption Framework | Microsoft Learn](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/overview)

### Azure Well-Architecture Framework

![[azure-waf.png|600]]

**Cost Optimization**: Managing cost to maximize value delivered  
**Operational Excellence**: Operational processes that keep a service running in production  
**Performance Efficiency**: Ability of system to adapt to changes in load  
**Reliability**: Recover from failures and continue to function  
**Security**: Protecting application and services from threats
