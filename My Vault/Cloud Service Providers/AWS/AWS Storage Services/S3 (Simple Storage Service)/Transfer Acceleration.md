Makes use of AWS CloudFront to transfer data from one region to another at a faster rate  
CloudFront caches data at the edge nodes which makes it possible to move the data quickly

To help you manage public access to S3 we can use block public access settings  
Use can create new policies or use the existing ones

ARN (Amazon Resource Name): An URL that is created to access bucket and its objects

Max size of data upload able to S3 using Web UI 160GB  
The max size of each object allowed in S3 is 5TB  
S3 uses the concept of eventual consistency. S3 uses read after write consistency for PUTS  
Query with S3 Select can be used to perform basic SQL queries on your data (Only possible on latest version of the data)

 > [!NOTE]
 > AWS Athena: An service that allows to build a structure/ table on top the data that is stored in S3
 > It is similar to external table concept in Hive
