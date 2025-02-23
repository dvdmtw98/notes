---
title: Time Travel & Fail Safe
tags:
  - snowflake
  - cloud
  - data-warehouse
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

#### Time Travel
Default Time Travel (Retention): 1 Day (up to 90 days)

````sql
ALTER TABLE PATIENT SET DATA_RETENTION_TIME_IN_DAYS = 3;
````

#### Fail Safe
Fail Safe is an extra retention period for which data can be recovered after the time travel period (7 days unchangeable)
