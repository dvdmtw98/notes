---
title: Spark Streaming Joins
tags:
  - analytics
  - spark
  - streaming
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

````python
from pyspark.sql.functions import explode, split

StaticLines = spark.read.format("text").load("file:///home/ak/datasets/sample.txt")
StaticWords = StaticLines.select(explode(split(StaticLines.value, " ")).alias("word"))
StaticDF = StaticWords.groupBy("word").count()

StreamLines = spark.readStream.format("socket").option("host", "localhost").option("port", 9999).load()
StreamWords = StreamLines.select(explode(split(StreamLines.value, " ")).alias("word"))
StreamWordCounts = StreamWords.groupBy("word").count()
StreamDF = StaticDF.join(StreamWordCounts, "word", "right")

query = StreamDF.writeStream.outputMode("complete").format("console").option("numRows", 40).option("truncate", "false").start()
````
