---
title: Query Processing Order
tags:
  - database
  - sql
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28
---

1. Getting Data (From, Join)
2. Row Filter (Where)
3. Grouping (Group by)
4. Group Filter (Having)
5. Return Expressions (Select)
6. Duplicate Filter (Distinct)
7. Order & Paging (Order by & Limit / Offset)

 > [!IMPORTANT]
 > * In the WHERE clause we cannot use Alias this is because the WHERE clause is executed before the SELECT statement
 > * In ORDER BY clause we can pass alias as it is processed after the SELECT statement

[SQLBolt - Learn SQL - SQL Lesson 12: Order of execution of a Query](https://sqlbolt.com/lesson/select_queries_order_of_execution)  

[The 6 Steps of a SQL Select Statement Process | by Wendy Navarrete](https://towardsdatascience.com/the-6-steps-of-a-sql-select-statement-process-b3696a49a642)
