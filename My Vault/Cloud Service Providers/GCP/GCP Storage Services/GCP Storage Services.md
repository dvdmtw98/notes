---
tags: [gcp, cloud, storage]
---

### [GCP Persistent Disk](GCP%20Persistent%20Disk.md)

It is an **<u>block store</u>** (Data is split into evenly sized blocks)  
Used to provision block storage to be used with VMs (Virtual Hard drives)

### Local SSD

It is an block datastore  
Used as storage of ephemeral data of VMs  
Used in Low Latency and stateless workloads  
Suitable for caches and hot layers  
Local SSD is faster than the fast Persistent Disk offering

### Filestore

It is a **<u>file</u>**-system **<u>storage</u>**  
The file is store along with its data and metadata  
Allows to create fully managed, high performance NFS file servers on Google Cloud  
Supports multiple reads, writing locks the file (Multiple users, VMs can access it at the same time)

### [Cloud Storage](Cloud%20Storage.md)

It is an **<u>object store</u>** with global edge caching  
Object is stored with data, metadata and unique ID  
Can scale with no limit (theoretical) on file size and total storage space  
Supports multiple reads and writes (no locks)  
Not intended for high IOPs applications  
#gcp-serverless-service #gcp-storage-service

### Cloud Storage for Firebase

It is a functionality that is present in Firebase  
Object store for storing and serving objects to our applications
