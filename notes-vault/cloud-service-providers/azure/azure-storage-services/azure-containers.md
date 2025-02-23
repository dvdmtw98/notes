---
title: Azure Containers
tags:
  - azure
  - cloud
  - storage
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

Object store optimized for storing large amounts of unstructured (text and binary) data    
It is a Highly Durable Service (11 nines, up to 16 nines)  
It is at the core of most of Azure Services where storage is required

Can be accessed over HTTP and NFS 3.0  
Supports up to 5PB of storage and can be increased to 190PB on request

It is not suited for storing structured data that need to be queried frequently  
Has higher latency when compared with memory and disk based storage  
It also lacks the any form of indexing  
It is an distributed storage (can span multiple machines)

All the data in Blob Storage is stored in a flat hierarchy (No folders/ directory)  
To access data from Blob we either have to fetch a specific file using the URI or fetch all the data in the container

Use Cases : Storing Files, Streaming video and audio, Serving images/ documents

### Public Access Level

Private: No anonymous access  
Blob: Anonymous Read Access  
Container: Anonymous Read & Container Listing Access
