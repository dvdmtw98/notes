---
tags:
  - azure
  - cloud
  - security
title: Azure Resource Locks
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

Resource Lock is an Lock that can be used on a Resource to Prevent Certain actions from being performed on it  
If an Resource Lock for Delete is used then even if the User has Owner permissions the Resource cannot be deleted  

Resource Lock can be applied at the Resource Group and Subscription level as well  
Only Owner and User Access Administrator can manage Locks

**Delete Lock**: Prevent the Deletion of a Resource  
**Read-only Lock**: Prevent any action other can read from being performed on a Resource

Resource Locks are Management Plane features i.e. we can still edit and modify the data that is stored/managed by the resource
