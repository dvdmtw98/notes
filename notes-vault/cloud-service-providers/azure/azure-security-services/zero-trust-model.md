---
title: Zero-Trust Model
tags:
  - security
  - cloud
  - controls
date: 2024-01-28 14:15:56 -0600
updated: 2025-09-07 17:37:40 +0530
---

Zero-trust is not a product/tool. It is a security framework.  
Continuously authenticate, authorize and assess device, users, and transactions.  
It is achieved with a mix of security policies and security tools.  

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Y3DjoTiOiOU?si=NWhekkrXOzHPUbxx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

[Zero Trust Security \| What is a Zero Trust network? \| Cloudflare](https://www.cloudflare.com/learning/security/glossary/what-is-zero-trust/)

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

---

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

---

### Microsoft Zero-Trust Model

![[ms-zero-trust-model.png|600]]

3 Principles
Verify Explicitly: AuthN (Authentication) + AuthZ (Authorization)  
Least Privilege: JIT & JeP  
Assume Breach: Segment Network, Encryption, Detect Threats

**JIT (Just-in-time)**  
Given access to a resource only during the time when it is needed.  

**JeP (Just enough Privilege)**  
Give access to only the specified access (API calls).  

6 Pillars: IDEA-IN  

---

### Defense in Depth

Data: Encryption  
Application: Secure & free of vulnerability  
Compute: Access to VM  
Network: Limit communication using segmentation & access control  
Perimeter: DDoS Protection  
Identity & Access: Controlling access to Infrastructure  
Physical: Limit access to Data center
