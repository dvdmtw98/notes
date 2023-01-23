---
title: Sqoop Commands
---

### RDB to HDFS

````bash
# Table with primary key no need for mapper
sqoop import --connect jdbc:mysql://localhost/sqoopdb -username hiveuser -password hivepassword -table emp -m 1

# Append allows to add new data to existing file
#Split by needed when more than 1 mapper used
sqoop import --connect jdbc:mysql://localhost/sqoopdb 
-username hiveuser -password hivepassword -table emp
--append --split-by empno -m 3;
````

### Increment Loading of Data

````bash
sqoop-import --connect jdbc:mysql://localhost/sqoopdb 
-username hiveuser -password hivepassword -table emp -m 1 
--incremental append --check-column empno --last-value 10
````

### Load only specific column from Table

````bash
sqoop import --connect jdbc:mysql://localhost/sqoopdb 
-username hiveuser -password hivepassword -table emp 
-columns empno, name --append -m 1
````

### Import all tables from RDB (All table should have primary key)

````bash
sqoop import-all-tables --connect jdbc:mysql://localhost/userdb --username root
````

 > [!NOTE]
 > * When using an text column for split-by an extra parameter needs to be enabled
 >   Dorg.apache.sqoop.splitter.allow_text_splitter=true
 > * The data is stored on HDFS under `/user/<username>` (Sqoop Staging Area)
 > * We can save the data to other locations. But when it's always loaded first into staging area
 > * Sqoop can only load data once (Data needs to dropped to load the entire dataset)
 > * For tables that don't have a primary key we need to specify mappers (Default Mappers: 4)
 > * Mappers specify the no. of parallel processes that is going to be used to load the data

### HDFS to RDB

````bash
create table patmysql(pid int, pname varchar(10), drug varchar(10), gender varchar(10), amt int);

sqoop export -connect jdbc:mysql://localhost/sqoopdb 
--username hiveuser --password hivepassword --table patmysql 
--export-dir /user/hive/warehouse/lti871.db/patient -m 1 
--input-fields-terminated-by ','
````

 > [!IMPORTANT]
 > Before exporting data make sure already table exist. If not error will be thrown

### RDB to Hive

````bash
sqoop-import --connect jdbc:mysql://localhost/sqoopdb -username hiveuser -password hivepassword --table emp -create-hive-table -hive-table lti871.employeehive -hive-import --fields-terminated-by ',' -m 1;
````

We don't have to create a table in hive it can be created automatically. The data is 1st written into the Staging area and then loaded into Hive. If same data exist in staging area the job will fail

---

### Options

Location to save data  
`--target-dir <hdfs-dir>`

Filter Data  
`--where "ename='David'"`

Incremental loading into RDB into HDFS  
`--incremental append/ lastmodified --check-column <column-name> --last-value <value>`

Instead of hardcoding an password prompt will be shown  
`-P`

Makes an new managed table in Hive  
`--create-hive-table`

---

**<u>References</u>**:

* [sqoop commands in detail - Google Docs](https://docs.google.com/document/d/1ZX05d3VqdIP3DrOGZ85X0jvFtGiiXsmx4cnqUm1LKhA/edit)