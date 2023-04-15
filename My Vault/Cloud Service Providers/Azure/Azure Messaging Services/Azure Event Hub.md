---
title: Azure Event Hub
tags: [azure, cloud, event]
---

It is an event ingestion and processing service  
Ideal for Big data scenarios where millions of events are generated every second  
Supports integration with Azure and Non-Azure services  
Can be configured to write event data to Blob/ADLS

The data that is sent in the event needs to be in Binary format

Pricing: Basic, Standard and Dedicated  
Protocols: AMPQ, HTTPS and Kafka Protocol

**Use cases**  
Telemetry data processing, Data Archival, Transaction Processing, Anomaly Detection

### Components

**Namespace**  
Container for Event Hubs. More than one Event Hub can belong to a namespace  
Any option applied to Namespace applies to all Event Hubs within it  
Throughput units that determine the throughput of Event Hub is set on the Namespace  
Event Hub <u>namespace</u> needs to be <u>created before</u> creating Event Hub

**Event Producer**: Applications that sends data to Event Hub  

**Partition**  
It is the bucket in which data in Event Hub is stored  
By default Event Hub Instance is created with 4 partitions (Supported partition range 2-32)  
Events in the partition are time-ordered  

Once an event is read its not deleted (Only deleted based on Retention Period Configured)  
Event Hub decides which partition will get the event. Partition can be specified using partition key

Recommendation: No. of partitions >= No. of concurrent subscribers

**Consumer Group**  
A view of the Event Hub data at given instant  
Multiple Groups allow multiple applications to read the data from Event Hub at the same time at their own pace  

**Subscriber**: Reads the data from Event Hub

---

[Azure Messaging Services](Azure%20Messaging%20Services.md)