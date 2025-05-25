---
title: Watermarks
tags:
  - analytics
  - spark
  - streaming
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28
---

Watermarks are used to decide the reasonable lateness of data. Lateness of data could occur due to various reasons like network congestion, latency, etc.  
If data is within the reasonable lateness it is allowed in system else it may or may not be allowed

### Output Modes

#### Append Mode
Window not triggered until timestamp is elapsed. No partial updates

#### Update Mode
Window will trigger even before timestamp is elapsed. Partial updates are recorded

#### Complete Mode  
Cannot be used with watermarks

### Restrictions

Aggregation must be event-time, or event-time window  
`.withWatermark()` must be called on same timestamp column as aggregate  
`.withWatermark()` must be called before the aggregation

 > [!NOTE]
 > Data before watermark is accepted while data after watermark may or may not be rejected

### Word count with Watermark & Sliding Window

````python
WwindowedCounts = words.withWatermark("timestamp", "10 seconds").groupBy(window("timestamp", "10 seconds", "5 seconds"), "word").count()

query1 = WwindowedCounts.writeStream.outputMode("append").format("console").option("numRows", 40).option("truncate", "false").start()
````
