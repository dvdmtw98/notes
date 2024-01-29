---
title: Access Control Models
tags:
  - security
  - access
  - management
date: 2024-01-28 14:15:56 -0600
---

Assigned by principal of <u>Least Privilege</u> and should be used on a <u>Need to Know</u> basis

#### Discretionary Access Control (DAC)
Resource owner determines which users can access each resource  
Used when <u>Availability</u> is the most important (Windows, Linux)

#### Mandatory Access Control (MAC)
Uses labels and clearance to authorize user access to resources  
Used when <u>Confidentiality</u> is the most important (Intelligence, Military)  

Complex to maintain so only used in high security applications  
In MAC, if not explicitly allowed, its considered as forbidden for users  
User can only access resources with labels greater than or equal to their clearance

#### Role-Based Access Control (RBAC)
Assigns users to roles and uses these roles to grant permissions to resources  
Used when <u>Integrity</u> is the most important (Private Sector)  

RBAC enforces principle of <u>Least Privilege</u> for subjects or groups  
Also comes with <u>Need to Know</u>: Only access data that is required for job

#### Attribute-based Access Control (ABAC)
Access to object is granted based on subject, object and environmental conditions  
Also called Policy-based Access Control (PBAC) and Claim-based Access Control (CBAC)
e.g. Environment Attributes, Resource Attributes

---

#### Rule-Based Access Control (RBAC)
Enables administrators to apply security policies to all users  
[[access-control-types#Access Control List]] type of RBAC found commonly on Routers, Firewalls

#### Context-based Access Control
Access granted based on location, time, access history, etc.

#### Content-based Access Control  
Based on access rights different content will be shown
