---
tags:
- aws
- cloud
- database
- dynamodb
title: Dynamo DB Secondary Index
---

An alternate index that is create on the table that can alternatively be used to query the table
* Global: Index with partition and sort key can be different from those on the table
* Local: Index has the same partition key as table but different sort key (Made at Table creation)

![Dynamo DB Index Types|600](../../images/dynamodb-secondary-index.png)

---

[Dynamo DB](dynamo-db.md)