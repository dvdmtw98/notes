---
title: Hive Commands
tags: [analytics, hive]
---

### Create DB

````sql
CREATE DATABASE <db-name>;
````

### Select an DB

If not select default DB is used

````sql
USE <db-name>; 
````

### Show DB and Tables

````sql
SHOW DATABASES;
SHOW TABLES;
````

### Create Managed Table

````sql
CREATE TABLE student(
	regno INT, 
	name STRING,
	cgpa INT
);

# Create an table for loading data from file
CREATE TABLE patient(
	pid INT,
	pname STRING,
	drug STRING,
	gender string,
	tot_amt INT
)
ROW FORMAT DELIMITED
FIELDS TERMINATED BY ','
STORED AS TEXTFILE;
````

### Create External Table

````sql
# No directory is created in the tables name. The files is given numeric names '00000_0'
CREATE EXTERNAL TABLE patext(
	pid int,
	pname string,
	drug string,
	gender string,
	amt int
)
ROW FORMAT DELIMITED
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
STORED AS TEXTFILE
LOCATION '/xyz/hiveext/';

# A Directory in the tables name is created at '/user/hive/warehouse/xyz.db/'
CREATE EXTERNAL TABLE patext1(
	pid int,
	pname string,
	drug string,
	gender string,
	amt int
)
ROW FORMAT DELIMITED
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
STORED AS TEXTFILE;

# Create table use data on Local FS. Note we need to specify an directory not an file
CREATE EXTERNAL TABLE employee(
	empno int,
	pname string,
	sal int
)
ROW FORMAT DELIMITED
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
STORED AS TEXTFILE
LOCATION 'file://home/ak/datasets/Test/';
````

### Insert Data

<u>Insert Command</u>

````sql
INSERT INTO TABLE student VALUES(1, 'Arjun', 9);

INSERT INTO TABLE <db-name>
SELECT * FROM <table-name>;

# Overwrites existing data in the table
INSERT OVERWRITE TABLE patient1
SELECT * FROM patient
WHERE drug='Para'; 
````

<u>Load Data from Local FS</u>

````sql
LOAD DATA LOCAL INPATH '<local-file>' INTO TABLE <table-name>;
````

<u>Local Data from HDFS</u>

````sql
LOAD DATA INPATH '<hdfs-file>' INTO TABLE <table-name>;
````

 > [!NOTE]
 > When loading data from HDFS the file is moved from the current location to the Hive DB location
 > Hence this approach is not recommended
 > Better alternative to use external tables

<u>Sqoop Command</u>
  
Used for bulk loading data from RDB (Refer hive & Sqoop for command)

<u>HDFS Shell</u>

````bash
hadoop fs -put '/hive-table-path'
````

### Describe Table

````sql
DESC <table-name>;
DESC EXTENDED <table-name>;
DESC FORMATTED <table-name>;
````

### Delete Table

````sql
DROP TABLE <table-name>;
````

### Alter Table

````sql
ALTER TABLE <table-name> RENAME TO <new-table-name>;
ALTER TABLE <table-name> ADD COLUMNS (new-field datatype);
ALTER TABLE <table-name> CHANGE <column-name> <new-column-name> <datatype>;
ALTER TABLE <table-name> SET TBLPROPERTIES('EXTERNAL'='TRUE'); # Change managed table to external table
ALTER TABLE <table-name> SET LOCATION "hdfs:///tmp/newloc";
````

 > [!NOTE]
 > When we change the location of Hive table the data remains in the original location it has to be changed manually
 > [Alter location of a Hive table | This Data Guy](https://thisdataguy.com/2018/04/17/alter-location-of-a-hive-table/)

### Load Parquet File Data

Data can be saved in formats like parquet, ORC using the `INSERT INTO/ INSERT OVERWRITE` command

````sql
create table parquet_file(
	pid int,
	pname string,
	drug string,
	gender string,
	amt int
)
row format delimited 
fields terminated by ',' 
lines terminated by '\n'
stored as parquetfile;

insert overwrite table parquet_file 
select * from patient;
````

### Hive Scripts

````bash
hive -f filename.q 
````

### Change Hive Execution Engine

````sql
set.hive.execution.engine=spark 
````