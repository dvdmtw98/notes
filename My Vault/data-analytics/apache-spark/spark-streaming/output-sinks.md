---
tags:
- analytics
- spark
- streaming
title: Output Sinks
---

### Output Sinks

File Sink only supports Append Mode (No guarantee of Fault Tolerance)

````python
# File Sink
query = convictionsPerTimestamp.writeStream.outputMode("append").format("parquet")
	.option("checkpointLocation", "/lti/checkpoint")
	.option("path", "file://home/ak/data/ouput/")
	.option("truncate", "false").start()

# Kafka Sink
query = wordCounts.select(wordCounts.word.alias("value")).writeStream.outputMode("complete")
	.format("kafka").option("checkpointLocation", "file://home/ak/checkpoints/kafkatest")
	.option("kafka.bootstrap.servers", "localhost:9092")
	.option("topic", "updates").start()

# Console Sink
query = trimmedDF.writeStream.outputMode('append').format('console').option("truncate", "false").option("numRows", 40).start()
````