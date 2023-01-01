### Table of Content

* [S3 Storage Classes](S3%20Storage%20Classes.md)
* [Transfer Acceleration](Transfer%20Acceleration.md)
* [Pyspark to S3](Pyspark%20to%20S3.md)

---

Allows to store and retrieve any amount of data at anytime from anywhere on the web

### Features

99.99...99 (11 9s) Durability (Uses Checksum to ensure data is not corrupted)  
Flexible  
Availability  
Cost Efficient  
Scalable  
Secure (Encryption, Policies)

### Buckets & Objects

Bucket is an container where data is stored  
Object is data plus metadata  
Metadata includes Key which is the name of the file, Version Id which is the current version of the file  
Key is an unique identifier for an object within a bucket

 > [!NOTE]
 > * When we create a bucket we need to specify a unique name.
 > * Buckets name are global in nature.
 > * After a bucket is created, the name of that bucket cannot be used by another AWS account in any AWS Region until the bucket is deleted.
