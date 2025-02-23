---
title: AWS Lambda
tags:
  - aws
  - cloud
  - compute
  - serverless
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

It is an serverless compute unit. Allows to run code without provisioning or managing servers  
Automated version of [[ec2-elastic-cloud-compute|EC2 (Elastic Cloud Compute)]]. No need to worry about underlying architecture  
Upload the code and Lambda will take care of everything required to run the application  
Cannot be used for deploying application. Used for running background tasks

### Triggers

Services That Lambda Reads From  
Services That Invoke Lambda Functions Synchronously  
Services That Invoke Lambda Functions Asynchronously

### Execution Role

Allows it to access AWS services and resources

### Layers

Addition code that can be added into Lambda. It's in the form of Zip files that contains additional libraries, functions  
Max size of uncompressed Zip: 250 MB

### Environment Variables

Dynamically pass settings to function code and library without making any changes in code  
They are represent as key-value pair

```python
import json
import boto3

def lambda_handler(event, context):
	bucket_name = 'lti871'
	object_name = '/covid_data/cases.csv'

	s3 = boto3.client("s3")
	file_obj = s3.get_object(Bucket=bucket_name, Key=object_name)
	file_content = file_obj["Body"].read().decode("utf-8").strip()
	lines = file_content.split('n')

	split_lines = []
	for line in lines:
		columns = line.split(",")
		split_lines.append(columns)

	dynamo_db = boto3.resource('dynamodb')
	dynamoTable = dynamo_db.Table('covid_data')

	for line in split_lines:
		dynamoTable.put_item(
			Item = {
				'province_state': int(line[0]),
				'country_region': line[1],
				'last_update' : string(line[2]),
				'latitude' : float(line[3]),
				'longitude' : float(line[4]),
				'confirmed' : int(ines[5]),
				'deaths' : int(line[6]),
				'recovered' : int(line[7]),
				'active' : int(line[8])
			}
		)
```
