---
tags:
- analytics
- databricks
- index
title: Databricks
---

### Table of Content

* [Databricks Clusters](databricks-clusters.md)
* [Delta File Format](delta-file-format.md)
	* [Cloning & Overwriting (Delta Table)](cloning-and-overwriting-delta-table.md)
	* [Insert & Merge (Delta Table)](insert-and-merge-delta-table.md)
	* [Delta Lake (Spark Queries)](../apache-spark/delta-lake-spark-queries.md)
* **Databricks SQL Operations**
	* [Databricks SQL (Tables)](databricks-sql-tables.md)
	* [Databricks SQL (Views)](databricks-sql-views.md)
	* [Databricks SQL (Misc.)](databricks-sql-misc.md)
* [Databricks Auto Loader](databricks-auto-loader.md)
* [Medallion (Multi-Hop) Architecture](medallion-multi-hop-architecture.md)
* [Delta Live Tables](delta-live-tables.md)

---

### Miscellaneous Points

* **Databricks Workspace**: Databricks platform that can integrate with CSP services
  **Databricks SQL Analytics**: Allows to run SQL Queries on Data Lake
* Hive metastore is used by Databricks by default to register databases, tables and views
* Data from self-describing file formats can be read using **`SELECT * FROM file-format.'/path/to/file'`** (Can be used for others as well but the results might not be proper)
* External Data Sources are not automatically updated it needs to be updated using the REFRESH command
* The constraint that are applied on a table can be seen in the TLBPROPERTIES field of table description