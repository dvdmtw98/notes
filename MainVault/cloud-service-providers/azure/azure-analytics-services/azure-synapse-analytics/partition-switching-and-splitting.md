---
tags:
  - azure
  - cloud
  - analytics
  - data-warehouse
  - synapse
  - partition
title: Partition Switching & Splitting
date: 2024-01-28 14:15:56 -0600
---

### Partition Switching

<iframe width="560" height="315" src="https://www.youtube.com/embed/4SQouxsR7DQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

When data needs to be inserted into the production table the new data should first be loaded into a staging table from where partition switch-in is performed which adds the new data to the production table  
Partition Switch-in is just a metadata change operation and hence happens almost instantaneously (irrespective of table size)

The same process in reverse can be used for partition switch-out which is used to delete or archive a partition from the production table

### Partition Splitting

We can split partitions using the ALTER statement but this is only going to work if the table is empty (When CCI is used)

To deal with tables that already have data there are three main approaches:
* The most efficient method is to use CTAS to split the partition
* We can disable CCI and then use ALTER statement to create the new partition and then recreate the CCI
* Use CTAS to create a new table to hold data and once the partition is split move the data back
