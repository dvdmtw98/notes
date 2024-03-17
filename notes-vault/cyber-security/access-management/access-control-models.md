---
title: Access Control Models
tags:
  - security
  - access
  - management
date: 2024-01-28 14:15:56 -0600
updated: 2024-02-22 15:17:44 -0600
---

Assigned using the principle of <u>Least Privilege</u> and should be used on a <u>Need to Know</u> basis

#### Discretionary Access Control (DAC)
Resource owner determines which users can access each resource  
Used when <u>Availability</u> is the most important (Windows, Linux)

#### Mandatory Access Control (MAC)
Uses labels and clearance to authorize user access to resources  
Used when <u>Confidentiality</u> is the most important (Intelligence, Military)  

Complex to maintain so only used in high-security applications  
In MAC, if an action is explicitly not allowed, it is considered forbidden  
User can only access resources with labels greater than or equal to their clearance

#### Role-Based Access Control (RBAC)
Assigns users to roles and uses these roles to grant permissions to resources  
Used when <u>Integrity</u> is the most important (Private Sector)  

RBAC enforces the principle of <u>Least Privilege</u> for subjects or groups  
Also comes with <u>Need to Know</u>: Only access data that is required for the job

#### Attribute-based Access Control (ABAC)
Access to object is granted based on subject, object and environmental conditions  
Also called Policy-based Access Control (PBAC) and Claim-based Access Control (CBAC)
e.g. Environment Attributes, Resource Attributes

---

#### Rule-Based Access Control (RBAC)
Enables administrators to apply security policies to all users  
[[access-control-types#Access Control List|Access Control List]] is a type of RBAC found commonly on Routers, Firewalls

#### Context-based Access Control
Access is granted based on location, time, access history, etc.

#### Content-based Access Control  
Based on access rights different content will be shown
