---
tags:
  - analytics
  - kafka
title: Kafka Commands
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28
---

### Start Zookeeper

````bash
zookeeper-server-start.sh kafka_2.11-2.4.1/config/zookeeper.properties
````

### Start Kafka

````bash
kafka-server-start.sh kafka_2.11-2.4.1/config/server.properties
````

**<u>Setup Another Broker</u>**  
Make copy of `server.properties` file in the kafka config folder

Set the broker id = 1  
On line 32 uncomment line listeners = url:port and change port to 9093  
On line 60 change the log directory

````bash
# Start new Broker
kafka-server-start.sh kafka_2.11-2.4.1/config/server1.properties
````

### Create a Topic

````bash
kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic stockupdates --if-not-exists
````

### Increase Partitions of a Topic

````bash
kafka-topics.sh --zookeeper localhost:2181 --alter --topic my-first-topic --partitions 5
````

### Describe an Topic

````bash
kafka-topics.sh --zookeeper localhost:2181 --describe --topic covid
````

### Delete a Topic

````bash
kafka-topics.sh --zookeeper localhost:2181 --delete --topic securityalerts
````

### List Topics

````bash
kafka-topics.sh --list --zookeeper localhost:2181
````

### Start Producer

````bash
kafka-console-producer.sh --broker-list localhost:9092 --topic stockupdates

# Produce messages for a topic from a file
kafka-console-producer.sh --broker-list localhost:9092 --topic stockupdates < topic-input.txt
````

`/tmp/kafka-logs/` : Default Location of Kafka messages

### Start Consumer

````bash
kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic covid --from-beginning
````

`--from-beginning`: Will broadcast all the message from the producer including the ones before the consumer came online

[Apache Kafka CLI commands cheat sheet | by Tim van Baarsen | Medium](https://medium.com/@TimvanBaarsen/apache-kafka-cli-commands-cheat-sheet-a6f06eac01b)  

[Kafka Consumer Group CLI - javatpoint](https://www.javatpoint.com/kafka-consumer-group-cli)
