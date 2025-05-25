---
title: RDD Commands
tags:
  - analytics
  - spark
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28
---

## Transformation

### Read file from Local FS

For HDFS specify path as "hdfs://localhost:9000/lti/sample.txt"

````python
lines = sc.textFile("file:///home/ak/sample.txt", <partition>)
````

### Create Partitions of List

````python
sc.parallelize(['b', 'c', 'a'])
sc.parallelize(['b', 'c', 'a'], 4)
````

### Flat Map

Used to break data into smaller chunks

````python
words = textsrc.flatMap(lambda line: line.split())
````

### Flat Map Values

Used to flatten values of an key value pair. Can only access the value field

````python
x = sc.parallelize([("a", ["x", "y", "z"]), ("b", ["p", "r"])])
x.flatMapValues(lambda value : value).collect()
````

### Map

Create key, value pairs of data. Returns an list

````python
wdmap =words.map(lambda word: (word, 1))
ratings = lines.map(lambda x : x.split()[2])
````

### Map Values

Used to apply Map function of Key, Value pairs. Can only access the value field

````python
x = sc.parallelize([("a", ["apple", "banana", "lemon"]), ("b", ["grapes"])])
x.mapValues(lambda f : len(f)).collect()
````

### Filter

Returns an Boolean value. True data is allowed to pass through

````python
newRDD = rdd.filter(lambda x : "TMIN" in x[1])
````

### Caching of Data

````python
text_file.cache()
text_file.persist()
text_file.unpersist()
````

 > [!NOTE]
 > - A action needs to be performed before the data is actually cached
 > - The cached files are visible under the Jobs tab in Spark Web UI

### Number of Partitions

````python
textfile.getNumPartitions()
````

### Partitions

````python
repartition(4) 		# Increase or decrease partitions. Shuffling of data takes place
coalesce(<num>) 	# Reduce the no. of partitions. Shuffling does not take place
````

## Actions

### Print the RDD

````python
count.collect()
rdd.take(<num>)
````

### Save the RDD as a text file

````python
counts.saveAsTextFile("/lti/sparkwc")
````

### Count By Value

Groups same data together. Returns a DefaultDict

````python
result = ratings.countByValue()

for key, value in result.items():
	print(str(key) + " " + str(value))
````

### Reduce by Key

Perform aggregation of data with the same key  
The reduction is performed at the mapper stage and combined at the reducer

````python
counts=wdmap.reduceByKey(lambda a, b: a + b)
````

### Group By Key

Group values with the same key. The reduction is performed at the reducer stage

````python
groupByKey()
````

### Sort By Key

Sort RDD by key values

````python
wordCount.map(lambda (x, y) : (y, x)).sortByKey()
````

### Create RDD of just Keys or Values

````python
keys(), values()
````

[visualapi.pdf - Google Drive](https://drive.google.com/file/d/1tjS9o466TOvxVJ3jy5Q8JfLDJlYXBO3c/view)  

[Spark Programming Guide - Spark 2.2.0 Documentation](https://spark.apache.org/docs/2.2.0/rdd-programming-guide.html)
