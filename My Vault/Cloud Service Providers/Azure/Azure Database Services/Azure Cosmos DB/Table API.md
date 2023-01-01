The Table API for Cosmos DB uses [Azure Tables](../Azure%20Tables/Azure%20Tables.md) that are present in [Azure Storage Account](../../Azure%20Storage%20Account/Azure%20Storage%20Account.md) only under the hood but adds a couple of extra features and functionality on top of them

| Azure Tables                                      | Cosmos DB                                              |
| ------------------------------------------------- | ------------------------------------------------------ |
| Fast, no upper bound on latency                   | Single digit latency                                   |
| Variable throughput limited to 20,000 operation/s | Guaranteed backed by SLA. No upper limit on throughput |
| Single region                                     | 30+ regions                                            |
| Only Primary index                                | Automatic and complete indexing on all properties      |
