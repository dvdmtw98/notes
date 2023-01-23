---
title: Cloning & Overwriting (Delta Table)
---

### Cloning Data

**Deep Clone**: Physically copies the data over and by running command again the new data can be synced into copy as well  
**Shallow Copy**: Creates a new copy of only the delta logs (Useful for testing operations)

[How to Easily Clone Your Delta Lake Data Tables with Databricks - The Databricks Blog](https://databricks.com/blog/2020/09/15/easily-clone-your-delta-lake-for-testing-sharing-and-ml-reproducibility.html)

---

### Overwriting Data

**<u>CRAS (Create or Replace Table)</u>**  
Overwrites can be used to completely delete the data  
Faster as files do not need to be accessed to delete any data  
Data is not actually deleted and can be retrieved again using Time Travel

````sql
CREATE OR REPLACE TABLE events AS
SELECT * FROM parquet.`${da.paths.datasets}/raw/events-historical`
````

**<u>Insert Overwrite</u>**  
This method can only be used if the table already exists  
Cannot change the Schema of the table using this approach (unless OPTIONS are provided)  
Safer approach as overwrite will fail it schema of the data is different

````sql
INSERT OVERWRITE sales
SELECT * FROM parquet.`${da.paths.datasets}/raw/sales-historical/`
````