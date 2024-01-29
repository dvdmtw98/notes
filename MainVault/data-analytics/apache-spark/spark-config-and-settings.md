---
tags:
  - analytics
  - spark
title: Spark Config & Settings
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28
---

**Master**  
start-spark.sh  
localhost:8080

**Spark Jobs**  
pyspark  
localhost:4040  
`sc.uiwebUrl` : Find port number  
If we open an 2nd shell next it will open on localhost:4041. It goes all the way up to 4072

**Spark History Server**  
start-history-server.sh  
localhost:18080

### Spark Script (Spark 1.0)

For RDD (Spark Context is entry point) - Old (Version less than 2)  
For Dataset, Dataframe (Spark Session is entry point)

````python
from pyspark import SparkConf, SparkContext

conf = SparkConf().setMaster("local").setAppName("<program-name>")
sc = SparkContext(conf = conf)
# Remaining Python Code
````

### Run a Spark Script

````bash
spark-submit filename.py
````

### Spark Scripts (Spark 2.0+)

````python
from pyspark.sql import SparkSession
from pyspark.sql import Row

spark = SparkSession.builder.appName("Pysparkrdd2DF").getOrCreate()
#Write Spark Code
spark.stop()
````

#### Run a Spark Script

````bash
spark-submit filename.py
````

#### Run Spark Job using YARN

````bash
spark-submit --master yarn ~/spark-2.4.5-bin-hadoop2.7/examples/src/main/python/wordcount.py file://home/ak/datasets/sample.txt
````

`--master`: Decides the type of cluster to use to run the job YARN, MESOS, etc.  
`--executor-memory 20G`: Max memory that can be used by each executor  
`--total-executor-cores 200`: Total cores that can be used for executing the job

### Spark History Servers

These configurations are used to enable job monitoring for all jobs in Spark  
We can view the information about the jobs after the jobs are complete

Config Location: `spark/conf/spark.default.conf`

````bash
spark.eventLog.enabled true
spark.eventLog.dir file://home/ak/tmp/spark-events
spark.history.fs.logDirectory file://home/ak/tmp/spark-events
````

[Spark-Submit Command Line Arguments - Gankrin](https://gankrin.org/spark-submit-command-line-arguments-for-scalajava-applications/)  

[Understanding Apache Spark on YARN · Sujith Jay Nair](https://sujithjay.com/spark/with-yarn)  

[Things you need to know about Hadoop and YARN being a Spark developer](https://luminousmen.com/post/hadoop-yarn-spark)  

[Running Spark Jobs on YARN. When running Spark on YARN, each Spark | Medium](https://medium.com/@goyalsaurabh66/running-spark-jobs-on-yarn-809163fc57e2)
