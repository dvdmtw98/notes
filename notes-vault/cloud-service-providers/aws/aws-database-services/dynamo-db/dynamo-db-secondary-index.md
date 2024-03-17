---
tags:
  - aws
  - cloud
  - database
  - dynamodb
title: Dynamo DB Secondary Index
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

Alternate index that is create on the table can also be used to query the table  
**Global**: Index with partition and sort key can be different from those on the table  
**Local**: Index has the same partition key as table but different sort key (Made at Table creation)

![[dynamodb-secondary-index.png|600]]
