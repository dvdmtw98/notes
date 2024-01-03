---
tags:
- analytics
- spark
- streaming
title: Spark Streaming
---

A stream of entities is called an discretized stream or DStream  
DStream = Sequence of RDD  
Entities in a Stream are grouped into batches  
Each batch = 1 RDD  
Batch is formed based on Batch Interval  
All entities received within a batch is one RDD  
Within DStream Spark will perform operations on individual RDDs

````python
from pyspark import SparkContext
from pyspark.streaming import StreamingContext

# When running from Shell the current sc needs to be stopped and a new one has to be created
# At a time we can only have 1 Spark Context

sc.stop()

sc = SparkContext("local[2]", "NetworkWordCount")
ssc = StreamingContext(sc, 10)

# Read data from socket

lines = ssc.socketTextStream("localhost", 9999)
words = lines.flatMap(lambda line: line.split(" "))

pairs = words.map(lambda word: (word, 1))
wordCounts = pairs.reduceByKey(lambda x, y: x + y)

wordCounts.pprint()
ssc.start()

# Run job till port is not closed
ssc.awaitTermination()

# Stop the streaming job
ssc.stop()
````

We can use Netcat for creating streaming data source  
nc -lk 9999  
-l: Listen on port  
-k: Keep active (Remain listening)

---

**<u>References</u>**:

* [Spark Streaming - Spark 3.2.1 Documentation](https://spark.apache.org/docs/latest/streaming-programming-guide.html)
* [scala - What does setMaster `local[*]` mean in spark? - Stack Overflow](https://stackoverflow.com/questions/32356143/what-does-setmaster-local-mean-in-spark)