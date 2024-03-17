---
tags:
  - analytics
  - databricks
title: Databricks SQL (Views)
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

### View

No Materialized Views are present in Databricks  
When we query a view the underlying computation has to be performed again  
The data is persisted and is accessible across sessions  
They are tied to the database in which they are created

### Temporary View

Temporary View deleted once we exist the current Spark Session  
The table is not tied to any database

````sql
CREATE OR REPLACE TEMP VIEW events_temp_view
AS SELECT * FROM json.`${da.paths.working_dir}/raw/events-kafka/`;
````

 > [!INFO]+
 > Opening another Notebook, Install Python Package, Detaching from Cluster all creates a new session

### Global Temporary View

Global Temp View is tied to the `global_temp` Database which is tied to the Spark Cluster  
Users from different sessions that are using the same cluster can access the View  
All long as the Cluster is running the view will continue to exist
