---
title: Read from Folder
tags:
  - analytics
  - spark
  - streaming
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

````python
from pyspark.sql.types import *

userSchema = StructType([
	StructField("lsoa_code", StringType(), True),
	StructField("borough", StringType(), True),
	StructField("major_category", StringType(), True),
	StructField("minor_category", StringType(), True),
	StructField("value", StringType(), True),
	StructField("year", StringType(), True),
	StructField("month", StringType(), True)
])

# Read data with Structure
fileStreamDF = spark.readStream.schema(userSchema).csv("file:///home/ak/datasets/droplocation")

# maxFilesPerTrigger specifies the number of files to be read at a time
fileStreamDF = spark.readStream.schema(userSchema).option("maxFilesPerTrigger", 2).csv("file:///home/ak/datasets/droplocation")
````
