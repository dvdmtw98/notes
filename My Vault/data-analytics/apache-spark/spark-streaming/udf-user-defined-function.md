---
tags:
- analytics
- spark
- streaming
title: UDF (User Defined Function)
---

````python
from pyspark.sql.functions import udf
import time
import datetime

def add_timestamp():
	ts = time.time()
	timestamp = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')
	return timestamp

# After creating a function it needs to be registered as a UDF to be used in Spark
add_timestamp_udf = udf(add_timestamp, StringType())

fileStreamWithTS = fileStreamDF.withColumn("timestamp", add_timestamp_udf())
trimmedDF = fileStreamWithTS.select("borough", "major_category", "value", "timestamp")
query = trimmedDF.writeStream.outputMode('append').format('console').option("truncate", "false").option("numRows", 40).start()
````

 > [!NOTE]
 > UDFs are not optimized by Spark they should only be used when absolutely necessary

---

**<u>References</u>**:

* [PySpark UDF (User Defined Function) — SparkByExamples](https://sparkbyexamples.com/pyspark/pyspark-udf-user-defined-function/)