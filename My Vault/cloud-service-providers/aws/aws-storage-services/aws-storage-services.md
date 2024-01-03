---
tags:
- aws
- cloud
- storage
- index
title: AWS Storage Services
---

### [S3 (Simple Storage Service)](s3/s3-simple-storage-service.md)

WORM (Write Once Read Many)  
Scales automatically as new data is added

### EBS (Elastic Block Storage)

Access blocks using an instance  
Best for server disks  
Provides high read and write speeds  
Size is fixed in advance

### EFS (Elastic File System)

Shareable File System not attached to any OS  
Similar to EBS but one EFS volume can be mounted to multiple EC2 instances at the same time  
Scales automatically as new data is added

---

#### S3 Glacier

Used to store data for archival purposes

#### Storage Gateway

Move data from one storage to another

#### Snowball

Move data physically from one location to AWS

#### Snowmobile

Used to move extremely large amount of data physically to AWS

---

[AWS](../aws.md)