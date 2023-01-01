### Start All Daemons

````bash
start-all.sh 	# Deprecated
start-dfs.sh 	# Datenode, Namenode, Secondary node
start-yarn.sh 	# Recourse Manager, Node Manager
````

### Java Process Status

Check if all daemons are online  
Returns the name along with the process id

````bash
jps 
````

### HDFS Web Console

<http://localhost:50070/> (VM)
<http://localhost:9870> (WSL)

### Made Directory

````bash
hadoop fs -mkdir /lti
hadoop fs -mkdir -p /lti/david/ 	# Parent Directory
hdfs dfs -mkdir day2 				# Will make folder in /user/<username>/
````

### Copy from Local FS to Hadoop FS

````bash
hadoop fs -copyFromLocal <local-file> <hdfs-path>
hadoop fs -copyFromLocal -f <local-file> <hdfs-path> 	# Force
hadoop fs -put <local-path> <hdfs-path>
hadoop fs -put sample.txt hdfs://localhost:9000/lti/ 	# Path for hdfs on other system
````

### Copy from Hadoop FS to Local FS

````bash
hadoop fs -copyToLocal <hfds-file> <local-path>
hadoop fs -get <hdfs-path> <local-path>
````

### Append Files

````bash
hadoop fs -appendToFile<local-file> <hdfs-file>
````

### Copy (From HDFS to HDFS)

````bash
hdfs dfs -cp /user/hadoop/file1 /user/hadoop/file2
````

### Move (From HDFS to HDFS)

````bash
hdfs dfs -mv <hdfs-file> <hdfs-file>
````

### List Directory

````bash
hadoop fs -ls <dir>
hadoop fs -ls -R <dir> # Recursive
````

### Delete (Remove from HDFS)

````bash
hdfs dfs -rm <hdfs-file>
hdfs dfs -rm -R <hdfs-file>
````

### Change Replication Factor

````bash
hadoop fs -setrep <num> /lti/
````

 > [!NOTE]
 > These properties can be changed at the global level in hdfs-site.xml
 > * dfs.replication
 > * dfs.blocksize

### Distributed Copy (Inter/ Intra-Cluster Copying)

````bash
hadoop distcp hdfs://nn1:8020/foo/bar hdfs://nn2:8020/bar/foo
````

---

**<u>References</u>**:

* [Apache Hadoop 2.4.1 - File System Shell Guide](https://hadoop.apache.org/docs/r2.4.1/hadoop-project-dist/hadoop-common/FileSystemShell.html)
* [Apache Hadoop Distributed Copy – DistCp Guide](https://hadoop.apache.org/docs/current/hadoop-distcp/DistCp.html)
