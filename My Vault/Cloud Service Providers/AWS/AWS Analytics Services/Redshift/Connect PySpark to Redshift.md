---
title: Connect PySpark to Redshift
---

## Connect Redshift to Spark

Download the JDBC jar file and copy in Spark jar directory (redshift-jdbc42-1.2.43.1067)

````python
# Read table from Redshift
df = spark.read.format("jdbc").option("driver", "com.amazon.redshift.jdbc.Driver") \
	.option("url", "jdbc:redshift://ltiredshift.cs17hobzoa0z.us-west-1.redshift.amazonaws.com:5439/<dbname>") \
	.option("dbtable", "lti_schema.patient") \
	.option("user", "awsuser") \
	.option("password", "Pa55word") \
	.load()

# Write table to Redshift
df.write.format("jdbc").option("driver", "com.amazon.redshift.jdbc.Driver") \
	.option("url", "jdbc:redshift://ltiredshift.cs17hobzoa0z.us-west-1.redshift.amazonaws.com:5439/<dbname>") \
	.option("dbtable", "lti_schema.patient_spark") \
	.option("user", "awsuser") \
	.option("password", "Pa55word") \
	.save()
````

Make sure the `hadoop-aws` and `aws-jdk` jar files are already present in the directory

---

**<u>References</u>**:

* [Redshift day1.txt - Google Drive](https://drive.google.com/file/d/1y2Y9vAENNXIivX8T5V-npRJvmqjpgsBJ/view)
* [Redshift day2.txt - Google Drive](https://drive.google.com/file/d/1e5bScNp3ozxSu5XvOVoF19T2wuhxM8YK/view)