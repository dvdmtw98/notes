---
tags:
- analytics
- spark
title: Join Query
---

Inner Join: inner  
Outer Join : outer, full, fullouter, full_outer  
Right Outer Join: right, rightouter right_outer  
Left Outer Join: left, leftouter, left_outer  
Cross Join: cross

Left Anti Join: leftanti, left_anti (table1 - table2)  
Left Semi Join: leftsemi, left_semi (Similar to inner but only records of left table)

### Inner Join

````python
empDF.join(deptDF, empDF.emp_dept_id == deptDF.dept_id, "inner").show()
````

### Cross Join

````python
spark.conf.set("spark.sql.crossJoin.enabled", True)

empDF.crossJoin(deptDF).show()
````

### Self-Join

````python
from pyspark.sql.functions import col

empDF.alias("emp1").join(empDF.alias("emp2"), col("emp1.superior_emp_id") == col("emp2.emp_id"), "inner").select(col("emp1.emp_id"), col("emp1.name"), col("emp2.emp_id").alias("superior_emp_id"), col("emp2.name").alias("superior_emp_name")).show()
````

---

**<u>References</u>**:

* [PySpark Join Explained - DZone Big Data](https://dzone.com/articles/pyspark-join-explained-with-examples)