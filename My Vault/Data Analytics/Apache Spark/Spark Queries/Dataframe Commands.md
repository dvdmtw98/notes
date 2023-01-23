---
title: Dataframe Commands
---

### Read File

When reading using wrong format it won't throw error but the data read will not be proper. Data will only loaded partially

````python
empdf = spark.read.csv("file:///home/ak/datasets/emp.csv")
empdf = spark.read.option("header", "true").option("sep", ",").option("inferSchema", "true").csv("file:///home/ak/datasets/emp.csv")
empdf = spark.read.csv("file:///home/ak/datasets/emp.csv", inferSchema=True, sep=True, header=True)

# Can only read Parquet file
loadParq = spark.read.load("file:///home/ak/datasets/emp.csv") 
loadParq = spark.read.format("csv").load("file:///home/ak/datasets/emp.csv")
````

### Write data to Disk

````python
salesDF.write.save("file:///home/ak/data/sparksales")
salesDF.write.mode("overwrite").save("file:///home/ak/data/sparksales") 	# Replace exiting file
salesDF.repartition(8).write.save("file:///home/ak/data/sparksales")
````

### View structure of data

````python
empdf.printSchema()
empdf.show(<no-of-records>, truncate=False)
empdf.count()
df.describe('<column-name>').show() 		# Describe the values in the column
````

### View Data

````python
salesIND.select("Region", "Country", "Profit").show()
````

### Number of partitions

````python
empdf.rdd.getNumPartitions()
````

### Change Column Names

````python
retailDF.withColumnRenamed("_c0", "order_id").withColumnRenamed("_c1", "order_date")
retaildataDF = retaildataDF.toDF(*["order_id", "order_date", "order_customer_id", "order_status"])
````

### Replace Values in a Column

````python
df.withColumn('address', F.regexp_replace('address', 'lane', 'ln'))
df.withColumn('address', F.translate('address', 'lane', 'ln'))
df.na.fill({'age': 50, 'name': 'unknown'}).show() (Replace NULL values)
````

### Change Datatype of Column

````python
from pyspark.sql.types import DoubleType, IntegerType, StringType
cases = cases.withColumn('confirmed', F.col('confirmed').cast(IntegerType()))
````

### Creating New Column (Constant Value)

````python
df = df.withColumn("new_column_name", F.lit("constant_value"))
````

### Filter Data

& and, | or, ~ not clause can be used to chain multiple conditions together

````python
salesIND = salesDF.filter("Country = 'India'")
salesIND.select("Region", "Country", "Profit").filter("City='Agra'").show()
salesIND = salesDF.where("Country = 'India'")  # Where is an alias for filter

from pyspark.sql.functions import col
salesIND.select("Region", "Country", "Profit").filter(col("Profit") != '0').show()
````

### Remove Duplicate Values

````python
df.distinct().count()
df.dropDuplicates().show()
````

### Convert RDD data to DF

````python
lines = sc.textFile("file:///home/ak/spark-2.4.5-bin-hadoop2.7/examples/src/main/resources/people.txt")
parts=lines.map(lambda line : line.split(","))

from pyspark.sql import Row

people = parts.map(lambda p: Row(name=p[0],age=int(p[1])))
peopledf = spark.createDataFrame(people)
peopledf.show()
````

---

**<u>References</u>**:

* [pySpark Dataframe Workbook.docx - Google Docs](https://docs.google.com/document/d/1384aBJjep9oVJHo3iddBvohM1oaOckDhGlgYvuhLJUs/edit)
* [PySpark_SQL_Cheat_Sheet_Python.pdf - Google Drive](https://drive.google.com/file/d/1xK_s3EHhNOjHLsQKaJyA7dVfFJHr1XqE/view)
* [The Most Complete Guide to pySpark DataFrames | by Rahul Agarwal | Towards Data Science](https://towardsdatascience.com/the-most-complete-guide-to-pyspark-dataframes-2702c343b2e8)
* [pyspark.sql module — PySpark 2.4.0 documentation](https://spark.apache.org/docs/2.4.0/api/python/pyspark.sql.html)