---
tags:
  - azure
  - database
  - nosql
  - cosmos-db
title: Table API
date: 2024-01-28 14:15:56 -0600
---

The Table API for Cosmos DB uses [[azure-tables|Azure Tables]] that are present in [[azure-storage-services|Azure Storage Services]], but adds a couple of extra features and functionality on top of them

| Azure Tables                                      | Cosmos DB                                              |
| ------------------------------------------------- | ------------------------------------------------------ |
| Fast, no upper bound on latency                   | Single digit latency                                   |
| Variable throughput limited to 20,000 operation/s | Guaranteed backed by SLA. No upper limit on throughput |
| Single region                                     | 30+ regions                                            |
| Only Primary index                                | Automatic and complete indexing on all properties      |
