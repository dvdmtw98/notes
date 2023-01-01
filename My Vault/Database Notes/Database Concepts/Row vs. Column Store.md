### Row Storage

* If NULL in middle of DB space needs to be allocated. If end of the DB no need for space
* More optimized for OLTP queries

---

### Columnar Storage

* No space used for NULL values
* Each block consist of similar data hence data specific compassion can be used
* Columnar data makes aggregate functions more efficient

![Row vs Column Store|350](../../Data%20Analytics/Data%20Analytics%20Concepts/images/row_and_column_store.png)
