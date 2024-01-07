---
title: Access Control Models
tags:
  - security
  - access
  - management
---

#### Mandatory Access Control (MAC)
Uses security labels to authorize user access to specific resources  
Complex to maintain so only used in high security applications  
In MAC, if not explicitly allowed, its considered as forbidden for users  
User can only access resources that have a labels which is lower or equal to theirs

#### Discretionary Access Control (DAC)
Resource owner determines which users can access each resource

#### Role-Based Access Control (RBAC)
Assigns users to roles and uses these roles to grant permissions to resources
RBAC enforces minimum privileges required for a subject or group  

#### Rule-Based Access Control (RBAC)
Enables administrators to apply security policies to all users  
[Access Control List](access-control-types.md#Access%20Control%20List) type of RBAC found commonly on Routers, Firewalls

#### Attribute-based Access Control (ABAC)
Uses object characteristics for access control decisions  
e.g. Environment Attributes, Resource Attributes








