---
title: Kubernetes StatefulSet
tags: [kubernetes, container, devops, orchestration]
---

An sticky identity is assigned to each Pod in the Set  
The numbers are assigned sequentially starting from zero

All Replicas of the Pod can read data while only one can read and write the data  
The Pod that can read and write data becomes the **Master Pod**

An separate replica of the data storage is used by each Pod  
A mechanism needs to exist that synchronizes data between the Pods (So that all replicas are consistent)  
When the Master Pod writes the data into its storage the same change is replicated by the Slave Pods

If an new Pod is added into the Stateful Set the new Pod will first replicate the data from its **Previous Pod** (Always from the Previous Pod) and then continuously sync new data that is added by Master Pod

---

Each Pod has its on Persistent Volume which is backed by actual storage which stored the data along with the **state of the Pod** (Master/ Slave Pod, sync status, etc.)

If any of the Pod in the Stateful Set crashes a new replacement Pod is created it will have the **same identity** assigned to it and as the Volume has information about the state of the Pod it will reattach to the new Pod

For the reattachment to work it is important to use Remote Storage  
Local Storage is tied to a Node the new Pod might get created on a different Node that does not have access to the previously used storage

---

The first Pod (Pod 0) is the Set becomes the Master Pod  
Next Pod is not created until and unless the previous Pod is up and running  
If the Stateful Set is scales down then the deletion happens in reverse order (Waits for the Pod to be successfully deleted before the next deletion begins)

Each Stateful Set gets two DNS endpoints

* Service allow to access the Stateful Set which routes traffic to all the Pods (Same as Deployment)
* Individual DNS name that is assigned to each Pod (It is made of the Pod name and the Governing Service Name)

If an Pod crashes and restarts the IP Address will change but its Identity and DNS Name remains the same

 > [!important]
 > * The configuration of cloning and data synchronization needs to be performed by the user
 > * Containerized environment is not a perfect solution for stateful applications