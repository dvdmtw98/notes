---
tags:
- database
- concept
title: Row vs. Column Store
---

### Row Storage

* If NULL in middle of DB space needs to be allocated. If end of the DB no need for space
* More optimized for OLTP queries

---

### Columnar Storage

* No space used for NULL values
* Each block consist of similar data hence data specific compassion can be used
* Columnar data makes aggregate functions more efficient

![row-and-column-store|350](../../data-analytics/data-analytics-concepts/images/row-and-column-store.png)