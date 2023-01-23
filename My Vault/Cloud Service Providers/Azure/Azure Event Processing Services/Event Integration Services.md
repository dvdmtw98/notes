---
title: Event Integration Services
---

### IoT Hub

Bi-directional communication with streaming source  
Was designed specify to connect to IoT devices, sensors, etc.  
Allows to manage security for individual devices  
Gives Insight into the producer and consumers, allows to monitor and control the source  
It is a PaaS (Platform as a Service) offering  
Highly secure, scalable and reliable service  
Provides SDK for lot of programming languages  
Supports : AMPQ, AMTT and HTTPS

---

### Event Hub

Receives data stream from source  
Allows to consume millions of events in a second  
Pricing : Basic, Standard and Dedicated  
Supports : AMPQ, HTTPS and Kafka Protocol

 > [!NOTE]
 > The partition count of a streaming job can only be changed after creation in Event Hub Dedicated

---

### [Apache Kafka](../../../Data%20Analytics/Apache%20Kafka/Apache%20Kafka.md) (HDInsight)

Open source software for message queuing and stream processing  
This is an software that we need to install and manage (IaaS)  
Supports : Kafka Protocol