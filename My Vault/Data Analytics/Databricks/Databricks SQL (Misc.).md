---
title: Databricks SQL (Misc.)
tags: [analytics, databricks]
---

### Databases

Default location of database  **`dbfs:/user/hive/warehouse/<database_name>.db/`**  
The folder that will contain the objects will have the name of the database and end with the **`.db`** extension

---

### JSON Data

The nested values of JSON data can be accessed using the **`:`** operator  
We can use the **`from_json()`** and **`schema_of_json()`** function to define a schema  
Once an schema is applied on the data we can access nested data using the **`.`** operator

Once a schema has been applied to JSON data the `*` operator can be used to flatten the data into different columns

````sql
CREATE OR REPLACE TEMP VIEW new_events_final AS
SELECT json.* FROM parsed_events;
````

---

### Array Functions

The **`explode`** function can be used to put each record of the array as a new row

The **`collect_set`** function can collect unique values for a field, including fields within arrays (NULL values are excluded)  
The **`flatten`** function allows multiple arrays to be combined into a single array  
The **`array_distinct`** function removes duplicate elements from an array

````sql
SELECT user_id,
  collect_set(event_name) AS event_history,
  array_distinct(flatten(collect_set(items.item_id))) AS cart_history
FROM events
GROUP BY user_id
````

TRANSFORM: Allows to apply a Higher Order Function to each element in a array

---

### Pivot Table

Pivot Table allows us to convert values in a column into columns  
[Pivot in SQL - Databricks](https://docs.databricks.com/_static/notebooks/pivot-in-sql.html)

````sql
CREATE OR REPLACE TABLE transactions AS
SELECT * FROM (
  SELECT
    email,
    order_id,
    transaction_timestamp,
    total_item_quantity,
    purchase_revenue_in_usd,
    unique_items,
    item.item_id AS item_id,
    item.quantity AS quantity
  FROM sales_enriched
) PIVOT (
  sum(quantity) FOR item_id in (
    'P_FOAM_K',
    'M_STAN_Q',
    'P_FOAM_S',
    'M_PREM_Q',
    'M_STAN_F',
    'M_STAN_T',
    'M_PREM_K',
    'M_PREM_F',
    'M_STAN_K',
    'M_PREM_T',
    'P_DOWN_S',
    'P_DOWN_K'
  )
);
````