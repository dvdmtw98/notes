---
title: Databricks SQL (Tables)
tags: [analytics, databricks]
---

### Managed Table

This is the Default Table Type  
Data will be copied into the `/user/hive/warehouse` folder (UHW) inside the database folder  
Generated Columns values will be calculated automatically if we do not provide a value

````sql
-- Managed Table 1
CREATE OR REPLACE TABLE purchase_dates (
  id STRING, 
  transaction_timestamp STRING, 
  price STRING,
  date DATE GENERATED ALWAYS AS (
    CAST(CAST(transaction_timestamp/1e6 AS TIMESTAMP) AS DATE))
    COMMENT "generated based on `transactions_timestamp` column"
	)
)
````

### External Table

Unmanaged Tables are create when the location/ path to the data is specified by the user  
When new data is added into external table we need to perform "REFRESH" operation to see the latest data  
Exception: JDBC Tables show up as managed

````sql
-- External Table 1
CREATE TABLE weather_external
LOCATION "${da.paths.working_dir}/lab/external"
AS SELECT * 
FROM parquet.`${da.paths.working_dir}/weather`

-- External Table 2
CREATE TABLE sales_csv (
	order_id LONG, 
	email STRING, 
	transactions_timestamp LONG, 
	total_item_quantity INTEGER, 
	purchase_revenue_in_usd DOUBLE, 
	unique_items INTEGER, 
	items STRING
)
USING CSV
OPTIONS (
  header = "true",
  delimiter = "|"
)
LOCATION "${da.paths.working_dir}/sales-csv"
````

[Data objects in the Databricks Lakehouse | Databricks on AWS](https://docs.databricks.com/lakehouse/data-objects.html)

---

### CTAS (Create Table As Select)

Does not support specifying OPTIONS  
The schema of the data is inferred from the output of the query  
For formats that are not self describing like CSV we can use a query that allows defining schema (Temp View/ Table) as required before loading

---

### Generated Column

Generated columns are columns who's value is calculated using the value of another column  
When a new value is inserted into the table the value of the generated column is calculated automatically  
If we manually try to insert value for the generated column it should be an exact match else the query will fail  
They are a special type of CHECK constraint

---