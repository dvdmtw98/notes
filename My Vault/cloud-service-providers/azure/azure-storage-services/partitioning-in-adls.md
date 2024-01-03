---
tags:
- azure
- cloud
- storage
- partition
title: Partitioning in ADLS
---

The partition key for Blob Storage is Storage Name, Container Name and Blob Name  
Blob Storage places sequential blobs that have the same name in the same partition to overcome this hash values are generally appended before the name

### File Size

When storing data in ADLS the file sizes should be in the range of 250 MB to 1 GB  
Data in Blob Storage should be larger than 4 MB for standard tier and above 256 KB in premium tier  
Very small file sizes can negatively impact the performance  
An aggregation pipeline can be used to convert multiple small files into a single large file
Recommended to append a three digit hash to Storage account/ Container or Blob Name

### Folders

The data should be stored in folders in a liner manner. i.e. The data should be separated into multiple folders based on the date/ time, etc.  
Each folder should have at least a couple of files for proper distribution of the data