---
tags:
  - kubernetes
  - container
  - devops
  - orchestration
  - index
title: Kubernetes
date: 2024-01-28 14:15:56 -0600
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
	* [[kubernetes-architecture|Kubernetes Architecture]]
	* [[kubernetes-components|Kubernetes Components]]
2. **Kubernetes Components**
	* [[kubernetes-deployments|Kubernetes Deployments]]
	* [[kubernetes-statefulset|Kubernetes StatefulSet]]
	* [[kubernetes-pods|Kubernetes Pods]]
	* [[kubernetes-services|Kubernetes Services]]
	* [[kubernetes-configmap-and-secrets|Kubernetes ConfigMap & Secrets]]
	* [[kubernetes-namespace|Kubernetes Namespace]]
	* [[kubernetes-ingress|Kubernetes Ingress]]
	* [[kubernetes-volumes|Kubernetes Volumes]]
3. **Other Kubernetes Features**
	* [[kubernetes-yaml-file|Kubernetes YAML File]]
	* [[kubernetes-helm|Kubernetes HELM]]

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

The port order in Kubernetes is the reverse of Docker (Left: Pod, Right: Node)
