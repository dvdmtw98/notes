---
title: Object Replication
---

Allows to distribute the data which will be ideal for geographically distributed clients
The replication process takes place by means of policy which can be used to copy data, move to another access tier, etc.  
The replication process happens asynchronously and do not come with an SLA so the copies can be out of sink

Blob versioning must be enabled which started the replication as soon as a blob is modified  
When blobs are deleted only the current version is deleted previous versions remain
Blobs in archive tier and [Immutable Blob Storage](Immutable%20Blob%20Storage.md) cannot be replicated  
Last Sync time is an attribute present of blobs that have replication configured to show when was it last updated