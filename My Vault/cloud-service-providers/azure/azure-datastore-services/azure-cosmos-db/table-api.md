---
tags:
- azure
- database
- nosql
- cosmos-db
title: Table API
---

The Table API for Cosmos DB uses [Azure Tables](../azure-tables/azure-tables.md) that are present in [Azure Storage Services](../../azure-storage-services/azure-storage-services.md), but adds a couple of extra features and functionality on top of them

| Azure Tables                                      | Cosmos DB                                              |
| ------------------------------------------------- | ------------------------------------------------------ |
| Fast, no upper bound on latency                   | Single digit latency                                   |
| Variable throughput limited to 20,000 operation/s | Guaranteed backed by SLA. No upper limit on throughput |
| Single region                                     | 30+ regions                                            |
| Only Primary index                                | Automatic and complete indexing on all properties      |

[Azure Datastore Services](../azure-datastore-services.md)