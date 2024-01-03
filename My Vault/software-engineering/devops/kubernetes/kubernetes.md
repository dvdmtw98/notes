---
tags:
- kubernetes
- container
- devops
- orchestration
- index
title: Kubernetes
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
	* [Kubernetes Architecture](kubernetes-basics/kubernetes-architecture.md)
	* [Kubernetes Components](kubernetes-basics/kubernetes-components.md)
2. **Kubernetes Components**
	* [Kubernetes Deployments](kubernetes-components/kubernetes-deployments.md)
	* [Kubernetes StatefulSet](kubernetes-components/kubernetes-statefulset.md)
	* [Kubernetes Pods](kubernetes-components/kubernetes-pods.md)
	* [Kubernetes Services](kubernetes-components/kubernetes-services.md)
	* [Kubernetes ConfigMap & Secrets](kubernetes-components/kubernetes-configmap-and-secrets.md)
	* [Kubernetes Namespace](kubernetes-components/kubernetes-namespace.md)
	* [Kubernetes Ingress](kubernetes-components/kubernetes-ingress.md)
	* [Kubernetes Volumes](kubernetes-components/kubernetes-volumes.md)
3. **Other Kubernetes Features**
	* [Kubernetes YAML File](kubernetes-components/kubernetes-yaml-file.md)
	* [Kubernetes HELM](kubernetes-components/kubernetes-helm.md)

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

[DevOps](../devops.md)  
[Azure Compute Services](../../../cloud-service-providers/azure/azure-compute-services/azure-compute-services.md)