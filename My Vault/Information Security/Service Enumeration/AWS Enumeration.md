1. <u>List Content in Bucket</u>

````bash
# AWS CLI required
aws s3 ls s3://<bucket-name> --no-sign-request
````

2. <u>S3 Scanner Tool</u>

[GitHub - sa7mon/S3Scanner: Scan for open S3 buckets and dump the contents](https://github.com/sa7mon/S3Scanner)

````bash
python3 -m S3Scanner scan --bucket <bucket-name>
python3 -m S3Scanner scan --bucket <bucket-name> --dump-dir <dump-location>
````
