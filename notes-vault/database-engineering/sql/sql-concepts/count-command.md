---
title: Count Command
tags:
  - database
  - sql
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

### Count Command

`COUNT(*)` : Returns the count of records in a table. NULL records are also included

`COUNT(column_name)` : Return no. of values in column which are not NULL

`COUNT(DISTINCT column_name)` : Return unique elements from an column

COUNT(1), COUNT('whatever'), COUNT(100) all have the same meaning as COUNT(\*) and is executed in the same amount of time
