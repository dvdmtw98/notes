---
tags:
- analytics
- hadoop
title: HDFS Operations
---

### Writing Data to HDFS

* User tells client to write data to HDFS (Need to specify chuck size & Replication)
* Client divides file into chunks
* Client tells Namenode a chuck needs to be written with so and so size and replication
* Namenode finds necessary Datanodes and sends its address to Client
* Client writes data to 1st Datanode. If replication is required the 1st Datanode will directly send the data to the next Datanode in the chain (Replication Pipeline)
* Once block is written to all the Datanodes they send an Done message to the Namenode
* If there are more blocks the above steps is repeated for all of them
* Once all blocks is written Clients tells Namenode operation is complete

 > [!NOTE]
 > * When data is split into blocks suppose when at the middle of an row the max block size is reached we will continue to read till the end of line is reached before creating an new block
 > * So the block size can be a bit bigger than the max block size

### Replication Placement Strategy

* Cluster -> Racks -> Nodes
* For 1st location if client is member of a cluster write to the same cluster else use an random Datanode
* For the next 2 replications pick an rack which is different than the 1st one and write to different Nodes on that rack
* For subsequent replication the following rules need to be satisfied. 1 replica per node. max 2 replicas per rack

 > [!NOTE]
 > Sometimes these conditions cannot be met so they are ignored. We can use our own placement algorithm as well

### Reading Data from HDFS

* Client sends request to Namenode to send information about the required file
* The location of the data is send back to the client (The nodes are arranged in the increasing order of distance from client)
* The client understands how much data needed to be downloaded and where its located
* It access the nodes one by one and downloads them

---

**<u>References</u>**:

* [Writing data to HDFS.png - Google Drive](https://drive.google.com/file/d/1WRWy4kd793zsRDhcGGXiDKFA-00iZruN/view)
* [Replica placement strategy.png - Google Drive](https://drive.google.com/file/d/1-N0tRTdEX7NE6BBy6JhDl2i3z5eJp2JH/view)
* [Reading Data from HDFS.png - Google Drive](https://drive.google.com/file/d/1TXgSSr6wAOM_vHf2V5rGcAib4Uwyz32p/view)