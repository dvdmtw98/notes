---
title: Azure Resource Locks
tags: [azure, cloud, security]
---

Resource Lock is an Lock that can be used on a Resource to Prevent Certain actions from being performed on it  
If an Resource Lock for Delete is used then even if the User has Owner permissions the Resource cannot be deleted  
Resource Lock can be applied at the Resource Group and Subscription level as well

Only Owner and User Access Administrator can manage Locks

Delete Lock: Prevent the Deletion of a Resource  
Read Only Lock: Prevent any action other can read from being performed on a Resource