---
title: Loading Table from Database
tags:
  - analytics
  - spark
  - database
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

````python
df_mysql = spark.read.format("jdbc").option("url", "jdbc:mysql://localhost:3306/sqoopdb")
	.option("driver", "com.mysql.jdbc.Driver")
	.option("dbtable", "emp")
	.option("user", "hiveuser").option("password", "hivepassword")
	.load()

order_itemdf = spark.read.format("jdbc").option("url", "jdbc:mysql://localhost:3306/retail?useSSL=false")
	.option("driver", "com.mysql.jdbc.Driver")
	.option("dbtable", "order_items")
	.option("lowerBound", "1000").option("upperBound", "10000")
	.option("numPartitions", "5").option("partitionColumn","order_item_id")
	.option("user", "hiveuser").option("password", "hivepassword")
	.load()
````

UpperBound: Max value used for selecting stride (Max value of partitionColumn in DB)  
LowerBound: Min value used for selecting stride (Min value of partitionColumn in DB)  
numPartitions: Decides the number of partitions create. It also is the number of parallel connects that are going to be made to the Database

partitionColumn: Integer, Timestamp column to be used to partitioning data  
Partition Stride: It is the min amount of data that is at least going to be present in each of the partitions.  
Stride = (UpperBound - LowerBound) / numPartitions

[JDBC in Spark SQL – Beginner's Hadoop](http://beginnershadoop.com/2018/11/17/jdbc-in-spark-sql/)

 > [!NOTE]
 > * `.option("dbtable", "(select * from policy where plan ='childplan') as policy")` : Filter data from DB
 > * In place of "dbtable" option "query" can be used but then partitioning of data is not supported
 