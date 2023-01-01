### Table of Content

* [Databricks Clusters](Databricks%20Clusters.md)
* [Delta File Format](Delta%20File%20Format.md)
	* [Cloning & Overwriting (Delta Table)](Cloning%20&%20Overwriting%20%28Delta%20Table%29.md)
	* [Insert & Merge (Delta Table)](Insert%20&%20Merge%20%28Delta%20Table%29.md)
	* [Delta Lake (Spark Queries)](../Apache%20Spark/Delta%20Lake%20%28Spark%20Queries%29.md)
* **Databricks SQL Operations**
	* [Databricks SQL (Tables)](Databricks%20SQL%20%28Tables%29.md)
	* [Databricks SQL (Views)](Databricks%20SQL%20%28Views%29.md)
	* [Databricks SQL (Misc.)](Databricks%20SQL%20%28Misc.%29.md)
* [Databricks Auto Loader](Databricks%20Auto%20Loader.md)
* [Medallion (Multi-Hop) Architecture](Medallion%20%28Multi-Hop%29%20Architecture.md)
* [Delta Live Tables](Delta%20Live%20Tables.md)

---

### Miscellaneous Points

* **Databricks Workspace**: Databricks platform that can integrate with CSP services
  **Databricks SQL Analytics**: Allows to run SQL Queries on Data Lake
* Hive metastore is used by Databricks by default to register databases, tables and views
* Data from self-describing file formats can be read using **`SELECT * FROM file-format.'/path/to/file'`** (Can be used for others as well but the results might not be proper)
* External Data Sources are not automatically updated it needs to be updated using the REFRESH command
* The constraint that are applied on a table can be seen in the TLBPROPERTIES field of table description
