---
title: Log Analytics Workspace
tags: [azure, cloud, analytics]
---

An single subscription can have multiple Log Analytics Workspaces  
Each workspace belong to a specific region  
The pricing is based on the data ingested, retention period and operations performed  
The data is stored in tables based on the type of data  
KQL can be used to query the data

---

### Access Control
**Require Workspace Permission**  
No granular RBAC    
Must be granted access to workspace or table  
Cant lock access to individual resources

**Use resource or workspace permissions**  
Uses RBAC. Default Setting

---

[Azure](../Azure.md)