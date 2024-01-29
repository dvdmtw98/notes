---
tags:
  - analytics
  - databricks
  - index
title: Databricks
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28
---

### Related Topics

* [[databricks-clusters|Databricks Clusters]]
* [[delta-file-format|Delta File Format]]
	* [[cloning-and-overwriting-delta-table|Cloning & Overwriting (Delta Table)]]
	* [[insert-and-merge-delta-table|Insert & Merge (Delta Table)]]
	* [[delta-lake-spark-queries|Delta Lake (Spark Queries)]]
* **Databricks SQL Operations**
	* [[databricks-sql-tables|Databricks SQL (Tables)]]
	* [[databricks-sql-views|Databricks SQL (Views)]]
	* [[databricks-sql-misc|Databricks SQL (Misc.)]]
* [[databricks-auto-loader|Databricks Auto Loader]]
* [[medallion-multi-hop-architecture|Medallion (Multi-Hop) Architecture]]
* [[delta-live-tables|Delta Live Tables]]

### Miscellaneous Points

* **Databricks Workspace**: Databricks platform that can integrate with CSP services
* **Databricks SQL Analytics**: Allows to run SQL Queries on Data Lake
* Hive metastore is used by Databricks by default to register databases, tables and views
* Data from self-describing file formats can be read using **`SELECT * FROM file-format.'/path/to/file'`** (Can be used for others as well but the results might not be proper)
* External Data Sources are not automatically updated it needs to be updated using the REFRESH command
* The constraint that are applied on a table can be seen in the TLBPROPERTIES field of table description
