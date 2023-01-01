Delta Lake adds ACID Properties on Data  
Data Lake API: Enforces & Validates Schema on top of Files in Data lake  
JSON Transactional Logs: Manages changes & operations performed on files  
Delta Table have the operation metadata in the JSON logs (`_delta_log`)  
By default all tables created in Databricks uses Delta Format (v8.0 and above)

[Understanding the Delta Lake Transaction Log - Databricks Blog](https://databricks.com/blog/2019/08/21/diving-into-delta-lake-unpacking-the-transaction-log.html)
[Delta Lake Tutorial: How to Easily Delete, Update, and Merge Using DML - The Databricks Blog](https://databricks.com/blog/2020/09/29/diving-into-delta-lake-dml-internals-update-delete-merge.html)

Columns that are marked as `add` in the transaction log are present in the current active version of the table while the ones marked as `remove` are no more required

````sql
-- View Metadata related to Table
DESCRIBE EXTENDED <table-name>
DESCRIBE DETAIL <table-name>

-- Optimize Data by Collasing Data
OPTIMIZE beans [ZORDER BY name]

-- View the Transaction History of Table
DESCRIBE HISTORY <table-name>

-- View old version of Table
SELECT * FROM beans VERSION AS OF 1

-- Restore the Delta Table to a previous version
RESTORE TABLE beans TO VERSION AS OF 5

-- Revome Stale Records from the Files
VACUUM beans RETAIN 120 HOURS DRY RUN
````

 > [!NOTE]+
 > * ZORDER is used to group columns with similar values together which can speed up lookup
 > * Delta table can only be created on Parquet Format Files

 > [!IMPORTANT]+
 > * By default VACUUM will not allow the user to delete data that is not older than 7 days. A flag needs to be explicitly disabled before the above can be performed.
 > * Sometimes even after running the VACUUM command older versions of the data can be accessed this happens because the values where cached by the Active Cluster
