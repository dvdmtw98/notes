---
title: Spark Streaming with Kafka
tags: [analytics, spark, streaming]
---

### PySpark with Kafka

Start Zookeeper and Kafka Broker
Create a topic and Start Producer

````bash
pyspark --packages org.apache.spark:spark-sql-kafka-0-10_2.11:2.4.5
````

### Read from a Kafka Topic

````python
lines = spark.readStream.format("kafka").option("kafka.bootstrap.servers", "localhost:9092").option("subscribe", "covid_data").load()

# Read only the value field from Kafka topic
lines = spark.readStream.format("kafka")
	.option("kafka.bootstrap.servers", "localhost:9092")
	.option("subscribe", "covid_data")
	.load().selectExpr("CAST(value AS STRING)")
````

### Process Data

````python
from pyspark.sql.functions import explode
from pyspark.sql.functions import split

words = lines.select(explode(split(lines.value, " ")).alias("word"))
wordCounts = words.groupBy("word").count()
````

### Output Sink

````python
query = wordCounts.writeStream.outputMode("complete").format("console").start()
````

### Specify offset for Reading Data (Batch Processing)

````python
df = spark.read.format("kafka") 
	.option("kafka.bootstrap.servers", "host1:port1, host2:port2") 
	.option("subscribe", "topic1, topic2") 
	.option("startingOffsets", """{"topic1":{"0":23,"1":-2},"topic2":{"0":-2}}""") 
	.option("endingOffsets", """{"topic1":{"0":50,"1":-1},"topic2":{"0":-1}}""") 
	.load()

df.selectExpr("CAST(key AS STRING)", "CAST(value AS STRING)")
````

**<u>Syntax</u>**  
{topic:{partition:offset}}  
Offset -2: Earliest Message  
Offset -1: Latest Message

---

**<u>References</u>**:

* [Structured Streaming + Kafka Integration Guide (Kafka broker version 0.10.0 or higher) - Spark 3.2.1 Documentation](https://spark.apache.org/docs/latest/structured-streaming-kafka-integration.html)