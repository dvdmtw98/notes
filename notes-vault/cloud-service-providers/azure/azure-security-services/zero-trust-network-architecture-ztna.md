---
title: Zero-Trust Network Architecture
aliases:
  - ZTNA
tags:
  - security
  - controls
  - policy
  - access
date: 2024-01-28 14:15:56 -0600
updated: 2026-10-20 23:14:48 +0530
---

Zero-trust is a security philosophy and a set of principles.  
In it nothing is trusted by default, every request for access is verified regardless of its source/origin.  
Tools: Zscaler Private Access, Palo Alto Prisma Access  

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Y3DjoTiOiOU?si=NWhekkrXOzHPUbxx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

[Zero Trust Security \| What is a Zero Trust network? \| Cloudflare](https://www.cloudflare.com/learning/security/glossary/what-is-zero-trust/)

NIST SP 800-207: Zero Trust moves defenses from static, network-based perimeters to focus on users, assets, and resources.  
[SP 800-207, Zero Trust Architecture \| CSRC](https://csrc.nist.gov/pubs/sp/800/207/final)

### Zero Trust Components

Identity and Access Management: Identity is the new perimeter in Zero Trust  
Device Trust and Compliance: Microsoft Intune, CrowdStrike Falcon, SentinelOne  
Micro-segmentation: Divide the network into small, isolated zones.  
Policy-based Enforcement: No static rules, all decision is behaviour based.  

### Zero Trust Principals

**Principle 1**: Never Trust, Always Verify (Guilty until proven innocent)  
Credentials, Device, and Location are some of the factors that are verified.  
Passing verification ones does not make you trusted.  
Every request is continuously and dynamically verified.  

**Principle 2**: Use principle of Least Privilege  
Can be difficult to implement for software that was not designed for zero-trust.  
Utilize Just-in-time (JIT) and Just enough Privilege (JeP).  

**Principle 3**: Assume Breach  
Network and user base segmentation to reduce blast radius.  
Methods to detect and respond to these breaches.  

### Operating Plane

#### Control Plane
The framework responsible for defining, managing and enforcing the policies related to user and system access with an organization.

**Adaptive Identity**  
Real-time identity verification that takes into account user behavior, device, location, and other factors.

**Threat Scope Reduction**  
Limit the users access to only what they need for their work tasks.  
Minimizes blast radius.

**Policy-driven Access Control**  
Developing managing and enforcing user access policies based on their roles.  

**Secured Zones**  
Isolated environments within a network that are designed to hose sensitive data.

#### Data Plane
Ensures that the policies and procedures are properly executed.

**Subject/System**  
Individual or entity trying to gain access.

**Policy Engine**  
Cross reference the access request with the pre-defined policies.

**Policy Administrator**  
Used to establish and manage the access policies.

**Policy Enforcement Point**  
Based on the subject/system and the evaluation of the policy engine the decision is made to grant or restrict access.  
Acts as a gatekeeper to secure regions in the system.

### Security Outcomes

Better Access Controls: Users do not have broad access.  
Better Governance & Compliance: Every access decision is logged and is auditable.  
Reduced Blast Radius: Compromised account/endpoint can not access everything.  
Better Visibility: Rich, granular logs for every operation.  
