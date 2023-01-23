---
title: Reading AVRO File
---

````bash
pyspark --packages org.apache.spark:spark-avro_2.11:2.4.0
````

Spark 3.0 is required for loading Avro file using its schema

````python
from pyspark.sql.avro.functions import from_avro, to_avro 

avrodf = spark.read.format("avro").load("file:///home/ak/spark-2.4.5-bin-hadoop2.7/examples/src/main/resources/users.avro")

# Load the schema of the File
schemaAvro = new Schema.Parser().parse(new File(
	"avrodf = spark.read.format("avro").load("file:///home/ak/spark-2.4.5-bin-hadoop2.7/examples/src/main/resources/users.avsc")"))

# Load data using Schema
peopledf = spark.read.format("avro").option("avroSchema", schemaAvro.toString).load("people.avro")
````