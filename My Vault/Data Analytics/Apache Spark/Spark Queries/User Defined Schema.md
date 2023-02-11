---
title: User Defined Schema
tags: [analytics, spark]
---

### Create Schema for a File

````python
from pyspark.sql.types import StructType, StructField, StringType, IntegerType, DoubleType

EmpSchema = StructType([
	StructField('Empno', IntegerType(), True), 
	StructField('Empname', StringType(), True), 
	StructField('salary', DoubleType(), True) 
])
empDF = spark.read.schema(EmpSchema).csv("file:////home/ak/datasets/emp.csv")
````

### Create a Schema for Data

````python
from pyspark.sql.types import StructType, StructField, StringType, IntegerType, DoubleType

EmpSchema = StructType([ 
	StructField('Empno', IntegerType(), True), 
	StructField('Empname', StringType(), True),
	StructField('MGR', IntegerType(), True), 
	StructField('YOJ', StringType(), True), 
	StructField('deptno', StringType(), True), 
	StructField('gender', StringType(), True), 
	StructField('salary', DoubleType(), True) 
])

emp = [ 
	(1,"Smith",1,"2018","10","M",3000.00), 
	(2,"Rose",1,"2010","20","M",4000.00), 
	(3,"Williams",1,"2010","10","M",1000.00), 
	(4,"Jones",2,"2005","10","F",2000.00), 
	(5,"Brown",2,"2010","40","",300.00), 
	(6,"Brown",2,"2010","50","",2000.00) 
]

empDF = spark.createDataFrame(data=emp, schema = EmpSchema)
````

### Column name for data (Infer Schema)

````python
empColumns = ["emp_id", "name", "superior_emp_id", "year_joined", "emp_dept_id", "gender","salary"]
empDF = spark.createDataFrame(data=emp, schema = empColumns)
````