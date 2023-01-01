![Kafka Partitions|550](images/kafka_partitions.png)

* For each partition there is an lead node (Chosen at random).
* The other replicas of the partition are called as follower nodes.
* The write by the producer only happens on a single broker which becomes the leader node and it replicates the data into other brokers
* ISR: In Sync Replica (The follower does that the leader does)
* In time of failure the next ISR becomes the new leader node

---

**<u>References</u>**:

* [Kafka Topic Architecture - Replication, Failover, and Parallel Processing - DZone Big Data](https://dzone.com/articles/kafka-topic-architecture-replication-failover-and)
