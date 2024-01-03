---
tags:
- analytics
- spark
- streaming
title: Window Transformations
---

Windows transformations are stateful transformations as information is accumulated per window  
A window is a subset of a Stream  
Event time is used for windowing in structure streaming

### Types of Windows

##### [Tumbling Window](../../../cloud-service-providers/azure/azure-messaging-services/streaming-window-functions.md#Tumbling%20Window)
Fixed Size window. No overlapping between windows. Amount of data in window varies

##### [Sliding Window](../../../cloud-service-providers/azure/azure-messaging-services/streaming-window-functions.md#Sliding%20Window)
Fixed size. Overlap between windows. Amount of data in window varies

##### Global Window
All data in stream in one window

---

## Time

1. <u>Event Time</u>  
   The data at which the event occurs at the source
1. <u>Ingestion Time</u>  
   The time at which the data enters Spark from a source. Cannot handle out of order events (use watermark)
1. <u>Processing Time</u>  
   Time required by the system to process the data

---

### Commands (Word count with Sliding Window)

````python
from pyspark.sql.functions import window
from pyspark.sql.functions import explode, split

lines = spark.readStream.format("socket").option("host", "localhost").option("port", 9999).option("includeTimestamp", True).load()

words = lines.select(explode(split(lines.value, " ")).alias("word"), "timestamp")

windowedCounts = words.groupBy(window(words.timestamp, "10 seconds", "5 seconds"), words.word).count()

query = windowedCounts.writeStream.outputMode("complete").format("console").option("numRows", 40).option("truncate", "false").start()
````