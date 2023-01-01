Hive by default does not allow update/ delete operations for individual records  
The DB should support ACID properties for these operations to be supported  
We can achieve DML (update, delete) operations in Hive by saving the data as an ORC file, using Bucketing and setting `TBLPROPERTIES('transactional'='true')`  
Additionally 2 properties need to be set

````shell
SET hive.support.concurrency=true;
SET hive.txn.manager=org.apache.hadoop.hive.ql.lockmgr.DbTxnManager;
````

````sql
CREATE TABLE hive_dml(emp_id int, first_name string, last_name string) 
CLUSTERED BY(emp_id) 
INTO 4 BUCKETS 
STORED AS ORC 
TBLPROPERTIES('transactional'='true');

INSERT INTO hive_dml VALUES(1001501, 'alaister', 'briito');

INSERT INTO hive_dml VALUES(1001502, 'John', 'briito');

UPDATE hive_dml SET last_name = 'brito' WHERE emp_id = 1001502;

DELETE FROM hive_dml WHERE emp_id = 1001501;
````

 > [!NOTE]
 > These commands are not supported in spark-sql
