---
tags:
  - analytics
  - databricks
title: Databricks Auto Loader
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

Auto Loader only supports loading data from directories (Block Storage)  
Loading data from DB is not supported

Auto Loader uses [[spark-structure-streaming|Spark Structure Streaming]] under the hood and the command will run indefinitely  
When reading data using Auto Loader we can even use the options that are specific to the data type being loaded

````python
# Start Streaming Process
(spark.readStream
	.format("cloudFiles")
	.option("cloudFiles.format", source_format)
	.option("cloudFiles.schemaLocation", checkpoint_directory)
	.load(data_source)
	.createOrReplaceTempView(view))

# Write the streaming data
query = (spark.table(view)
              .writeStream
              .format("delta")
              .option("checkpointLocation", checkpoint_directory)
              .outputMode("complete")
              .table(target_table))
````

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/8a38Fv9cpd8?si=w0mGm0NBJNXvxcj6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Checkpoint

When configuring Auto Loader to read data a checkpoint location needs to be specified this location houses a key value database (RockDB) which keeps track of all the files that are processed

This location also stores the schema of the data that is automatically inferred
Schema evolution is also performed automatically  
The schema related metadata is stored in the **`_schemas`** directory in the checkpoint location

[Configure schema inference and evolution in Auto Loader | Databricks on AWS](https://docs.databricks.com/ingestion/auto-loader/schema.html)

Auto Loader when using JSON source loads all data as string

**`_rescued_data`** column in the target table is automatically added by Auto Loader to capture records that are malformed and could not fit into the schema

For each batch of new files added into the target table a new entry is made in its history called STREAMING UPDATE  
Tables/Views that are created based on the data that is loaded into a table by Auto Loader are auto updated

### Unsupported Features

Sorting of data is not allowed on Streaming Data (To expensive and complex operation)  
Multiple aggregation operations on the same dataset is not supported

[Structured Streaming Programming Guide - Spark 3.5.0 Documentation](https://spark.apache.org/docs/latest/structured-streaming-programming-guide.html#unsupported-operations)

### Triggers

Triggers are used to define the interval at which new data from the source will be persisted to the sink.  
When a trigger is not specified then continuously new data will be saved into sink when the previous batch is completed

When the **`triggerNow`** or **`trigger_once`** triggers are used the resultant table created is static (i.e. not auto updated by upstream new data) and as such we can use any normal spark operations on this data

[Structured Streaming Programming Guide - Spark 3.5.0 Documentation](https://spark.apache.org/docs/latest/structured-streaming-programming-guide.html#triggers)
