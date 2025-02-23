---
title: GCP Hierarchy Architecture
tags:
  - gcp
  - cloud
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

There are three suggested hierarchy architecture we can use:

#### Environment Oriented
Break down projects into different environments : Production, Quality Assurance, Development  
Can pose challenge when need to deploy services that are used by multiple environments

#### Function Oriented
One organization that contains one folder per business function  
More flexible compared to environment separation and allows to deploy shared resources  
More complex to manage

![[gcp-function-resource-hierarchy.png|600]]

#### Granular Access Oriented
One organization that contains one folder per business unit  
Each business unit folder can contain one folder per business function  
Each business function folder can contain one folder per environment  
Most extensible and flexible and the most complicated to manage

![[gcp-granular-resource-hierarchy.png|600]]
