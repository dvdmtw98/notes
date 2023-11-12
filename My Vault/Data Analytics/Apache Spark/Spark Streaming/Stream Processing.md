---
tags: [analytics, spark, streaming]
---

````python
trimmedDF = fileStreamDF.select( fileStreamDF.borough, fileStreamDF.year, fileStreamDF.month, fileStreamDF.value)
	.withColumnRenamed("value", "convictions")

# Aggregate Function
recordsPerBorough = fileStreamDF.groupBy("borough").count().orderBy("count", ascending=False)

convictionsPerBorough = fileStreamDF.groupBy("borough").agg({"value": "sum"})
	.withColumnRenamed("sum(value)", "convictions").orderBy("convictions", ascending=False)
````

 > [!INFO]
 > After performing an aggregate operation on data we cannot again perform an another aggregate operation in Streaming data (Multiple aggregation not supported)

### Start Streaming Process

````python
query = trimmedDF.writeStream.outputMode("append").format("console").option("truncate", "false").option("numRows", 40).start()

query = recordsPerBorough.writeStream.outputMode("complete").format("console").option("truncate", "false").option("numRows", 40).start()

query = convictionsPerBorough.writeStream.outputMode("complete").format("console").option("truncate", "false").option("numRows", 40).start()
````

### Using SQL Queries

````python
fileStreamDF.createOrReplaceTempView("LondonCrimeData")

categoryDF = spark.sql("SELECT major_category, value FROM LondonCrimeData WHERE year = '2016'")

convictionsPerCategory = categoryDF.groupBy("major_category").agg({"value": "sum"})
	.withColumnRenamed("sum(value)", "convictions").orderBy("convictions", ascending=False)

query = convictionsPerCategory.writeStream.outputMode("complete")
	.format("console").option("truncate", "false").option("numRows", 30).start()
````

 > [!INFO]
 > We cannot perform operations on this table using spark.sql() after the stream processing has started
