---
title: Kubernetes Services
tags:
  - kubernetes
  - container
  - devops
  - orchestration
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-31 09:29:58 -0600
---

A service is an stable/ consistent endpoint that can be used by other pods/services inside or outside the cluster to access a Pod  
Service has two Functions : Permanent IP Address & Load Balancer  
Service spans across the entire cluster (As Pods can be on different Nodes)

**CoreDNS** allows to resolve services using their names  
We can access the service using there hostname (Default namespace)  
FQDN available for all services : `<hostname>.<namespace>.svc.cluster.local`

````bash
# View all services
kubectl get service

# View service related metadata
kubectl describe service
````

**<u>Service Endpoint</u>**  
When a Service is created K8s will also create a Service Endpoint  
It has the same name as the Service  
It is used to keep track of the Pods that are members/endpoints of the Service

````bash
# View Endpoints
kubectl get endpoints
````

### Cluster IP

Default service type (Also called as Internal Service)  
Single, internal virtual IP  
Only reachable from inside the cluster (Nodes and Pods)  
Allows Pods on the cluster to access the service using the Port Number  
Multiple ports can also be opened on the service

````bash
# Create a ClusterIP Service
kubectl expose deployment httpenv --port 8888
kubectl expose deployment/httpenv --port 8888
````

**<u>Headless Service</u>**  
An Cluster IP Service  where `.spec.clusterIP` is set to None  
When Load Balancing and Single Service IP is not required Headless Service can be used  
Useful for direct communication between Pods (Sync data between Pods in StatefulSet)

### Node Port

Exposes a fixed high port on the Node. Port is open on every Node's IP  
Allows connection to Pods from outside the cluster  
Not secure as a port on the Node is directly exposed

Allowed High Port Range : 30,000 - 32,767  
Creating a NodePort will automatically create a ClusterIP

````bash
kubectl expose deployment httpenv --port 8888 --name httpenv-np --type NodePort
````

### Load Balancer

Also called as External Service (Pod accessible using `ipaddress:port`)  
Control an Load Balancer endpoint outside the Kubernetes Cluster  
Only available when infrastructure provider gives an Load Balancer

Creating a LoadBalancer will automatically create NodePort and a ClusterIP  
Docker Desktop Kubernetes allows us to use this service

For each app a new service will have to be created (which creates a Load Balancer) due to which this approach can get costly very quickly

````bash
kubectl expose deployment httpenv --port 8888 --name httpenv-lb --type LoadBalancer
````

### External Name

Adds CNAME DNS record to CoreDNS only  
Used to give an DNS name to external service outside of the cluster that needs to be accessed by the Pods

[Service | Kubernetes](https://kubernetes.io/docs/concepts/services-networking/service)  

[Kubernetes NodePort vs LoadBalancer vs Ingress? When should I use what? | Medium](https://medium.com/google-cloud/kubernetes-nodeport-vs-loadbalancer-vs-ingress-when-should-i-use-what-922f010849e0)
