It is an object store that is optimized for storing massive amounts of unstructured data (text and binary data)  
Unstructured Data is called as Blob (Binary Large Object)  
Blob storage is the cheapest way to store data in Azure  
It is at the core of most of the Azure Services where storage is required

Can be accessed over HTTP/ HTTPS and NFS 3.0  
Supports up to 5PB and store and can be increased to 190PB on request

It is not suited for storing structured data that need to be queried frequently  
It has higher latency than memory or disk based storage and it lacks the indexes that makes database queries fast  
It is an distributed storage (can spam multiple machines)

Storage Account: A unique namespace in Azure for storing data  
Containers: Similar to folders in FS

All the data in Blob is stored in a flat format (No folders/ directory)  
When we need to access data from Blob we either have to fetch a specific file using the URI or fetch all the data in the container

Use Cases : Storing Files, Streaming video and audio, Serving images/ documents

---

### Block Blobs

Store text and binary data  
They are made up of blocks with a max of 50,000  
Can store up to 4.75 TBs of data

### Append Blobs

Optimized for append operation  
They do not support updating and deleting existing data  
Ideal for situations such as logging data from VMs  
Can be up to 4 MB in size

### Page Blobs

Store random access read/ write data up to 8 TB  
Virtual Hard Drive (VHD) are stored using Page Blobs
