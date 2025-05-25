---
title: Delta Lake (Spark Queries)
tags:
  - analytics
  - spark
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

It enables ACID properties in Spark. DML commands can then be performed in Spark.  
Delta tables can be viewed as External Table as it is not managed by Hive  
Delta Lake acts as an intermediatory between Spark and the Storage Layer

[Getting hands dirty in Spark Delta Lake | by Abid Merchant | Analytics Vidhya | Medium](https://medium.com/analytics-vidhya/getting-hands-dirty-in-spark-delta-lake-1963921e4de6)

### Import Delta Package

````bash
pyspark --packages io.delta:delta-core_2.11:0.4.0

# View Delta table in Spark SQL
spark-sql --packages io.delta:delta-core_2.11:0.4.0
````

### Save Data in Delta Format

````python
events = spark.read.json("file:///home/ak/spark-2.4.5-bin-hadoop2.7/examples/src/main/resources/employees.json")
# Writing to HDFS does not work and gets stuck
events.write.format("delta").save("file:///home/ak/data/delta/events") 
````

 > [!NOTE]+
 > We cannot directly load non parquet data in delta format so we first have to convert our data into delta format and then load that data into a table

### Load Delta data as an SQL Table

````python
spark.sql("CREATE TABLE events USING DELTA LOCATION 'file://home/ak/data/mnt/delta/events/'")

spark.sql("show tables").show()
spark.sql("SELECT * FROM events").show()
````

### Load Delta Data as an Delta Table

````python
from delta.tables import *
from pyspark.sql.functions import *

deltaTable = DeltaTable.forPath(spark, "file://home/ak/data/mnt/delta/events/")
````

### Load Delta Data as an Spark Table

````python
cases1_file = spark.read.format("delta").load("file:///home/ak/Desktop/Project/delta_table/cases1/", inferSchema = True, header = True)
````

### Delete/ Update Operations

````python
deltaTable.delete("name = 'Berta'")
deltaTable.update("name = 'Andy'", {"name": "'Andrew'"})
cases1_delta.update(condition="country_region='US'", set = {"country_region" : "'United States'"})
````

 > [!INFO]+
 > * For every operation that is performed on delta table a new copy of the data and a commit log is created.
 > * If a log is not created then that operation was not completed successfully

### Convert Delta Table to DF

````python
delDF = deltaTable.toDF()
delDF.show()
````

### Operation History

````python
# View all operations performed
deltaTable.history().show() 

# View an specific snapshot of Data
version = 1 

df2 = spark.read.format("delta").option("versionAsOf", version).load("file:///home/ak/data/delta/events")
````

### Check if Data is Delta Table

````python
DeltaTable.isDeltaTable(spark, "file://home/ak/data/delta/events/")
````
