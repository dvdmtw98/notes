---
title: Connect Pyspark to S3
---

### Using Config File (spark-default.conf)

````log
spark.hadoop.fs.s3a.access.key <access-key>
spark.hadoop.fs.s3a.secret.key <secret-key>
spark.hadoop.fs.s3a.impl org.apache.hadoop.fs.s3a.S3AFileSystem

spark.hadoop.fs.s3n.awsAccessKeyId <access-key>
spark.hadoop.fs.s3n.awsSecretAccessKey <secret-key>
spark.hadoop.fs.s3n.impl org.apache.hadoop.fs.s3native.NativeS3FileSystem
````

### Run PySpark

````python
pyspark --packages com.amazonaws:aws-java-sdk:1.7.4,org.apache.hadoop:hadoop-aws:2.7.3
````

 > [!INFO]
 > We can download these jar files and copy them into spark jar directory and we can skip the need to specify the packages every time

### Specify Key at Runtime

````python
# S3a Config
spark._jsc.hadoopConfiguration().set("fs.s3a.access.key", "<access-key>")
spark._jsc.hadoopConfiguration().set("fs.s3a.secret.key", "<secret-key>")
spark._jsc.hadoopConfiguration().set("fs.s3a.impl","org.apache.hadoop.fs.s3a.S3AFileSystem")

# S3n Config
spark._jsc.hadoopConfiguration().set("fs.s3n.awsAccessKeyId", "<access-key>")
spark._jsc.hadoopConfiguration().set("fs.s3n.awsSecretAccessKey", "<secret-key>")
spark._jsc.hadoopConfiguration().set("fs.s3n.impl", "org.apache.hadoop.fs.s3native.NativeS3FileSystem")
````

### Reading Data

````python
df = spark.read.csv("s3a://lti871/david/employee.csv")
df = spark.read.csv("s3n://lti871/david/employee.csv")
````