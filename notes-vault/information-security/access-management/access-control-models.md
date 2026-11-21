---
title: Access Control Models
tags:
  - security
  - access
  - authorization
date: 2024-01-28 14:15:56 -0600
updated: 2026-11-16 23:38:57 +0530
---

Assigned using the principle of <u>Least Privilege</u> and should be used on a <u>Need to Know</u> basis.

### Discretionary Access Control (DAC)
Resource owner determines which users can access each resource.  
Used when <u>Availability</u> is the most important (Windows, Linux).  

#### [[access-control-types#Access Control List|Access Control List (ACL)]]
A list attached to a resource that specifies which identifies are allowed to perform which operations.  
ACLs on network devices determine which traffic is allowed through.  

**Discretionary ACL (DACL)**: Controls who can access a file.  
**System ACL (SACL)**: Defines what access events are audited.  

### Mandatory Access Control (MAC)
Uses labels and clearance to authorize user access to resources.  
Used when <u>Confidentiality</u> is the most important (Intelligence, Military)  

Complex to maintain so only used in high-security applications.  
In MAC, if an action is explicitly not allowed, it is considered forbidden.  
User can only access resources with labels greater than or equal to their clearance.  

### Role-Based Access Control (RBAC)
Assigns users to roles and uses these roles to grant permissions to resources.  
Used when <u>Integrity</u> is the most important (Private Sector)  

RBAC enforces the principle of <u>Least Privilege</u> for subjects or groups.  
Also comes with <u>Need to Know</u>: Only access data that is required for the job.  

### Attribute-based Access Control (ABAC)
Access to object is granted based on subject, object and environmental conditions.  
It is the bases for modern Zero Trust access decisions.  
Also called Policy-based Access Control (PBAC) and Claim-based Access Control (CBAC).  
e.g. Environment Attributes, Resource Attributes
