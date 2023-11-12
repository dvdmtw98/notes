---
tags: [kubernetes, container, devops, orchestration, index]
---

It is a open-source **container orchestration system**  
It is based of Borg an Propriety Container Orchestrator created by Google for its internal use  
Google open sourced some of the code used in Borg this code became Kubernetes. It is maintained by the Cloud Native Computing Foundation (CNCF)

Kubernetes is commonly referred to as K8s or Kube  
It allows to run containers distributed across multiple VMs

Kubernetes is ideal for micro-service architecture where tens to hundreds of services that need to be managed

**<u>Main Features</u>**  
High Availability - no downtime  
Scalability - high performance  
Disaster Recovery - backup and failure

---

### Table of Content

1. **Theoretical Concepts**
	* [Kubernetes Architecture](Kubernetes%20Basics/Kubernetes%20Architecture.md)
	* [Kubernetes Components](Kubernetes%20Basics/Kubernetes%20Components.md)
2. **Kubernetes Components**
	* [Kubernetes Deployments](Kubernetes%20Components/Kubernetes%20Deployments.md)
	* [Kubernetes StatefulSet](Kubernetes%20Components/Kubernetes%20StatefulSet.md)
	* [Kubernetes Pods](Kubernetes%20Components/Kubernetes%20Pods.md)
	* [Kubernetes Services](Kubernetes%20Components/Kubernetes%20Services.md)
	* [Kubernetes ConfigMap & Secrets](Kubernetes%20Components/Kubernetes%20ConfigMap%20&%20Secrets.md)
	* [Kubernetes Namespace](Kubernetes%20Components/Kubernetes%20Namespace.md)
	* [Kubernetes Ingress](Kubernetes%20Components/Kubernetes%20Ingress.md)
	* [Kubernetes Volumes](Kubernetes%20Components/Kubernetes%20Volumes.md)
3. **Other Kubernetes Features**
	* [Kubernetes YAML File](Kubernetes%20Components/Kubernetes%20YAML%20File.md)
	* [Kubernetes HELM](Kubernetes%20Components/Kubernetes%20HELM.md)

---

### Miscellaneous Commands

````bash
kubectl cluster-info
kubectl version
kubectl get nodes

# Restart CoreDNS Service
kubectl -n kube-system rollout restart deployment coredns
````

[kubectl for Docker Users | Kubernetes](https://kubernetes.io/docs/reference/kubectl/docker-cli-to-kubectl/)  
[kubectl Cheat Sheet | Kubernetes](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)

The port order in Kubernetes is the reverse of Docker (Left : Pod, Right : Node)

---

[DevOps](../DevOps.md)  
[Azure Compute Services](../../../Cloud%20Service%20Providers/Azure/Azure%20Compute%20Services/Azure%20Compute%20Services.md)  
