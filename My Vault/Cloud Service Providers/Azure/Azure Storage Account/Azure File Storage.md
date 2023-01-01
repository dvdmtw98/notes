It is a fully managed file share on the cloud. The files are stored in containers called Shares  
It is a centralized location for storing data that allows connection using multiple connections

Protocols: Server Message Block (SMB) and Network File System (NFS)  
When we connect to the file share the specific directory is mounted into its own directory tree  
It can also be accessed from anywhere in the world using a URI and SAS key

### Uses cases

Completely replace or supplement on-premises file servers like NAS  
Lift-and-Shift on-premise storage to the cloud

* Classic Lift: Move both application and data to the cloud
* Hybrid Lift: Application data is moved to Azure Files and application runs on-premises

Allows to store common configs, logs that are used by multiple VMs  
Azure Files can be used to persist volumes of stateful containers
