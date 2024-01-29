---
tags:
  - azure
  - cloud
  - analytics
title: Log Analytics Workspace
date: 2024-01-28 14:15:56 -0600
---

Each workspace belongs to a specific region  
The pricing is based on the data ingested, retention period and operations performed  
The data is stored in tables based on the type of data  
KQL is used to query the data

Used as Storage for Logs connected using Application Insights

### Access Control

**Require Workspace Permission**  
No granular RBAC    
Must be granted access to workspace or table  
Cant lock access to individual resources

**Use resource or workspace permissions**  
Uses RBAC. Default Setting
