---
title: Hive Custom Partitioning
---

![Types of Partitions|600](../Apache%20Spark/images/types_of_partitioning.png)

### Custom Partition

Partition is generally created on the column that has repeated data  
By having partitions we can avoid entire table scan when we perform aggregate functions  
User decides the value based on which the partition will be created (User control movement of data)  
Custom partitioning can be used when we have definite data

The amount of files that are created for each partition depends on the number of files that are present in the source table  
The partitioned data is stored in their own folder under the table folder in the format `/tb_name/partition_column=value` (e.g. /sales/country=India)

---

### Static Partition - Using Existing Column

The column used for partitioning should not be included in the table creating part of the query  
The column values are case sensitive

````sql
CREATE TABLE patient2(pid int, pname string, gender string, amt int) PARTITIONED BY (drug string);

DESC patient2;

INSERT OVERWRITE TABLE patient2 PARTITION(drug='Para')

SELECT pid, pname, gender, tot_amt FROM patient WHERE drug='Para';

INSERT OVERWRITE TABLE patient2 PARTITION(drug='Crocin')

SELECT pid, pname, gender, tot_amt FROM patient WHERE drug='Crocin';

SELECT * FROM patient2;
````

---

### Static Partition - Using New Column

This approach is rarely used in real time environment

````sql
CREATE TABLE patient1(pid int, pname string, drug string, gender string, amt int) PARTITIONED BY (d string);

DESC patient1;

INSERT OVERWRITE TABLE patient1 partition(d='Paracetamol')

SELECT * FROM patient WHERE drug='Para';

INSERT OVERWRITE TABLE patient1 partition(d='Painkiller')

SELECT * FROM patient WHERE drug='metacin' OR drug='Crocin';

SELECT * FROM patient1;
````

---

### Dynamic Partitioning

Dynamic is used when we have no idea about the data that is going to be stored so we only specify the column based on which the partition should be created  
By default dynamic partition is not allowed it needs to be enabled  
When inserting values into the table it should be specified in the same order as set during table creation  
In the table a folder with the 1st partition name will be created which will have folders with the name of the 2nd partition which will have files equal to the number to the source table

````bash
set hive.exec.dynamic.partition=true;
set hive.exec.dynamic.partition.mode=nonstrict;
````

````sql
CREATE TABLE patientdy(pid int, pname string, amt int) PARTITIONED BY (drug string, gender string);

DESC patientdy;

INSERT OVERWRITE TABLE patientdy PARTITION(drug, gender)

SELECT pid, pname, tot_amt, drug, gender FROM patient;
````

 > [!NOTE]
 > * During table creating Static and Dynamic partitioning can be specified together
 > * Static partition should always be specified first `PARTITION BY(country='India', year)`

---

**References**:

* [HIVE PARTITION BUCKETING - Geoinsyssoft](https://geoinsyssoft.com/hive-partition-bucketing/)
* [HIVE TABLE USING PARTITION BUCKETING - Geoinsyssoft](https://geoinsyssoft.com/hive-table-using-partition-bucketing/)