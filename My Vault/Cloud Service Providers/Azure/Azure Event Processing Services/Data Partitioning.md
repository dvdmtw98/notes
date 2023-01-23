---
title: Data Partitioning
---

Partitioned data in Stream Analytics can help parallelize the processing which in turn will increase the throughput

Inputs that support Partitioning:

* Azure Event Hub (Need to use PARTITION BY clause)
* Azure IoT Hub (Need to use PARTITION BY clause)
* [Azure Blob Storage](../Azure%20Storage%20Account/Azure%20Blob%20Storage.md)

Outputs that support Partitioning:

* [Azure Data Lake Storage](../Azure%20Storage%20Account/Azure%20Data%20Lake%20Storage.md)
* Azure Functions
* [Azure Tables](../Azure%20Database%20Services/Azure%20Tables/Azure%20Tables.md)
* [Azure Blob Storage](../Azure%20Storage%20Account/Azure%20Blob%20Storage.md) (Can be set using PARTITION BY clause)
* [Azure Cosmos DB](../Azure%20Database%20Services/Azure%20Cosmos%20DB/Azure%20Cosmos%20DB.md) (Need to use PARTITION BY clause)
* Event Hub (Need to use PARTITION BY clause)
* IoT Hub (Need to use PARTITION BY clause)
* Service Bus
* [Azure SQL DB](../Azure%20Database%20Services/Azure%20SQL%20DB/Azure%20SQL%20DB.md) and [Azure Synapse Analytics](../Azure%20Analytics%20Services/Azure%20Synapse%20Analytics/Azure%20Synapse%20Analytics.md) (Need to use PARTITION BY clause)

---

### Embarrassingly Parallel Jobs

This is the most scalable type of job in Stream Analytics  
No. of input partitions = No. of output partitions  
It can have multiple steps but they all need to be using the same PARTITION key

---

**<u>References</u>**:
* [Use query parallelization and scale in Azure Stream Analytics | Microsoft Docs](https://docs.microsoft.com/en-us/azure/stream-analytics/stream-analytics-parallelization)