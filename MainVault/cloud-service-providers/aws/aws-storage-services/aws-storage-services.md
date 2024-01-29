---
tags:
  - aws
  - cloud
  - storage
  - index
title: AWS Storage Services
date: 2024-01-28 14:15:56 -0600
---

#### [[s3-simple-storage-service|S3 (Simple Storage Service)]]
WORM (Write Once Read Many)  
Scales automatically as new data is added

#### EBS (Elastic Block Storage)
Access blocks using an instance  
Best for server disks  
Provides high read and write speeds  
Size is fixed in advance

#### EFS (Elastic File System)
Shareable File System not attached to any OS. Similar to EBS  
One EFS volume can be mounted to multiple EC2 instances simultaneously  
Scales automatically as new data is added

#### S3 Glacier
Used to store data for archival purposes

#### Storage Gateway
Move data from one storage to another

#### Snowball
Move data physically from one location to AWS

#### Snowmobile
Used to move extremely large amount of data physically to AWS
