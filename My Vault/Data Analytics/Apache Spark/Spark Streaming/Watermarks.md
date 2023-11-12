---
tags: [analytics, spark, streaming]
---

* Watermarks are used to decide the reasonable lateness of data. Lateness of data could occur due to various reasons like network congestion, latency, etc.
* If data is within the reasonable lateness it is allowed in system else it may or may not be allowed

### Output Modes

1. <u>Append Mode</u>  
   Window not triggered until timestamp is elapsed. No partial updates
2. <u>Update Mode</u>  
   Window will trigger even before timestamp is elapsed. Partial updates are recorded
3. <u>Complete Mode</u>  
   Cannot be used with watermarks

### Restrictions

Aggregation must be event-time, or event-time window  
.withWatermark() must be called on same timestamp column as aggregate  
.withWatermark() must be called before the aggregation

 > [!NOTE]
 > Data before watermark is accepted while data after watermark may or may not be rejected

---

### Commands (Word count with Watermark & Sliding Window)

````python
WwindowedCounts = words.withWatermark("timestamp", "10 seconds").groupBy(window("timestamp", "10 seconds", "5 seconds"), "word").count()

query1 = WwindowedCounts.writeStream.outputMode("append").format("console").option("numRows", 40).option("truncate", "false").start()
````
