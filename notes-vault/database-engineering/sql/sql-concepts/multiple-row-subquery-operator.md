---
title: Multiple Row Subquery Operator
tags:
  - database
  - sql
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

If the inner query returns multiple values then operators like `>` and `<` can't be used  
In that case we can use "operator ANY", "operator ALL" and IN()

`>ANY` : The value should be greater than any one of the value  
`>ALL` : The value should be greater than all the values  
`=ANY` : Same as IN() operator
