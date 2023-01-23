---
title: Insert & Merge (Delta Table)
---

### Inserting Data

Can be used to automatically APPEND new records into a table

````sql
INSERT INTO sales
SELECT * FROM parquet.`${da.paths.datasets}/raw/sales-30m`
````

COPY INTO operation can be used to incrementally load data into a table  
The schema of the data cannot be changed using this approach  
The files in the source that are already loaded are skipped on next load

````sql
COPY INTO sales
FROM "${da.paths.datasets}/raw/sales-30m"
FILEFORMAT = PARQUET
````

---

### Merge Command

Data from Table, View or Dataframe can be Upsert into Delta Table using MERGE  
Each merge operation should have at least one match condition and WHEN MATCHED and WHEN NOT MATCHED can have any number of operations  
It is not necessary to use both the MATCH clauses

````sql
MERGE INTO students b
USING updates u
ON b.id = u.id
WHEN MATCHED AND u.type = "update"
  THEN UPDATE SET *
WHEN MATCHED AND u.type = "delete"
  THEN DELETE
WHEN NOT MATCHED AND u.type = "insert"
  THEN INSERT *
````