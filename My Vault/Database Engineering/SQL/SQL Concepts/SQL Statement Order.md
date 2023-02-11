---
title: SQL Statement Order
tags: [database, sql]
---

````sql
SELECT DISTINCT column, AGG_FUNC(column_or_expression), …

FROM mytable

JOIN another_table

ON mytable.column = another_table.column

WHERE constraint_expression

GROUP BY column

HAVING constraint_expression

ORDER BY column ASC/DESC

LIMIT count OFFSET COUNT;
````