---
tags:
- kubernetes
- container
- devops
- orchestration
title: Kubernetes Deployments
---

````bash
# Create a Deployment
kubectl create deployment nginx-app --image=nginx

# View Deployments
kubectl get deployment

# Edit Deployments
kubectl edit deployment nginx-app

# Delete a Deployment
kubectl delete deployment nginx-app
````

The edit command will open up the YAML spec of the deployment

 > [!important]
 > * In older versions of Kubernetes (> 1.18) the `kubectl run` commad was used to create a deployment
 > * In newer versions the same command only creates a Pod

Inside the deployment a ReplicaSet is created which makes/ manages the replicas of the Pod required in the deployment

````bash
# View Replica Sets
kubectl get replicasets
````

In the Pod the actual container is present. An NIC is also created automatically for the Pods

If we increase the number of replicas present for the deployment an new ReplicaSet will be created inside the same deployment  
Some of the Kubernetes commands have an alternate syntax available

````bash
# Scale a deployment
kubectl scale deployment my-apache --replicas 2
kubectl scale deploy/my-apache --replicas 2
````

When we set replicas to 2 the replicas spec of the deployment gets updated to 2  
The ReplicaSet controller then sets the the Pod count to 2  
Then the Control Plane decides which node to assign the Pod  
Kubelet we see than an new container is needed on its node and would create the Pod

````bash
# View Container Logs
kubectl logs deployment/my-apache
kubectl logs deployment/my-apache --follow --tail 1

# View logs of all replicas of container in Deployment
kubctl logs -l app=my-apache
````

The default log command will only return the log from one of the replicas of the pod from the deployment  
The `-l` flag is used to select pods based on labels assigned (Returns logs from multiple pods in the deployment)  
With using an selector to view logs by default Kubernetes will return results from top 5 pods (Can be changed but not recommended as its taxing on system)