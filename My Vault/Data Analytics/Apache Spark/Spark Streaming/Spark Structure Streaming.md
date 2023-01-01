Makes use of Dataframe. Data is represented in the form of table  
Every entity is an row in the table while every variable is an column  
When data arrives it is append to the end of the Dataframe.  
The table is unbounded in nature  
The old data in Structure Streaming is seen as Static data and the new data is the streaming data

[Structured Streaming Programming Guide - Spark 3.2.1 Documentation](https://spark.apache.org/docs/latest/structured-streaming-programming-guide.html)

---

### Data Sinks

1. **Console Sink**
	* Complete: Writes all the data to sink (Aggregation required, Target is overwritten with new data)
	* Append: New records written to sink (Aggregate Functions not allowed)
	* Update: Only rows that are updated since last trigger will be written to sink (If no aggregation used similar to append mode)
2. **File Sink**
	 * Only Append mode supported
3. **Kafka Sink**
4. **Memory Sink**
5. **Foreach Sink**

---

### Word Count (Example)

````python
from pyspark.sql.functions import explode
from pyspark.sql.functions import split

lines = spark.readStream.format("socket").option("host", "localhost").option("port", 9999).load()

# Split lines into words and count its occurrence
words = lines.select(explode(split(lines.value, " ")).alias("word"))
wordCounts = words.groupBy("word").count()

query = wordCounts.writeStream.outputMode("complete").format("console").start()

query.awaitTermination()
````

### Reading Data from Folder (Example)

````python
# Define a Schema
userschema = spark.read.json("file:///home/ak/spark-2.4.5-bin-hadoop2.7/examples/src/main/resources/people.json").schema

# Load data from a folder using created Schema
dfstrujson = spark.readStream.format("json").schema(userschema)
	.load("file:///home/ak/spark-2.4.5-bin-hadoop2.7/examples/src/main/resources/lookup_folder")

# Start Streaming Process
query = dfstrujson.writeStream.format("console").outputMode("update").start()
````
