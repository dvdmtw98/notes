---
title: PySpark and Snowflake Intergration
---

````shell
pyspark --packages net.snowflake:snowflake-jdbc:3.8.0,net.snowflake:spark-snowflake_2.11:2.4.14-spark_2.4
````

````python
options = {
	"user" : "<username>",
	"password" : "<password>",
	"database" : "lti_db",
	"schema" : "ltischema",
	"warehouse" : "compute_wh"
}

df = spark.read.format("jdbc") \
	.option("driver", "net.snowflake.client.jdbc.SnowflakeDriver") \
	.option("url", "jdbc:snowflake://<account-id>.us-east-1.snowflakecomputing.com") \
	.options(**options) \
	.option("dbtable", "employee") \
	.load()

df.write.format("jdbc").option("driver", "net.snowflake.client.jdbc.SnowflakeDriver") 
	.option("url", "jdbc:snowflake://<account-id>.us-east-1.snowflakecomputing.com") \
	.options(**options) \
	.option("dbtable", "employee_spark") \
	.save()
````