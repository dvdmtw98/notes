* Can have multiple brokers on same machine. Each broker has an Broker Id
* Messages in Kafka are variable size byte array. Can use any data format as per need
* No size limit on message (Optimal: KBs, Practical: 1 MB)
* Retails data even if not read by consumer. Data retained for 7 days/ 1 GB (Default)
* No limit on topics but works best with few large topics
* The commit logs are append only we cannot delete/ modify an message

![Kafka Topics|500](images/kafka_topics.png)

* Topics are broken up into ordered commit logs called partitions
* Each message in a partition is assigned a sequential id called as offset
* Writes to partition are sequential in order (Reduces no. of hard disk seeks)
* Messages can be read either from an offset or from the beginning

 > [!IMPORTANT]
 > * No of replications = No. of brokers on the cluster
 > * 1 consumer can consume from 1 partition at a time (Multiple consumers cannot access the same partition)
 > * We can have multiple partitions on the same cluster
