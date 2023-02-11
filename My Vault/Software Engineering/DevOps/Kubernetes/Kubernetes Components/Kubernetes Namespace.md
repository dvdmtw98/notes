---
title: Kubernetes Namespace
tags: [kubernetes, container, devops, orchestration]
---

Namespaces are used to logically segregate objects in the cluster  
Namespaces allows to define quotes which can be used to ensure that all namespaces have enough resources

````bash
kubectl get namespaces
````

Four namespaces created by default:

* **kube-system** : Consist of K8s management process. Should not be accessed by user
* **kube-public** : Contains config map which has cluster information that can be accessed even without authentication
* **kube-node-lease** : Contains hearthbeat information. Each node as associated lease object in namespace. Determines availability of Nodes
* **default** : User resources without namespaces are created here

````bash
kubectl create namespace <namespace-name>
````

 > [!important]
 > * Most resources cannot be access from another Namespace (ConfigMap, Secret)
 > * **Service** can be accessed from another namespace (`<service-name>.<namespace-name>`)
 > * **Volumes** and **Nodes** cannot be added into a namespace (They are global resources)

````bash
# Resource that cannot be namespaced
kubectl api-resources --namespaced=false
````

An object can be created in a specific namespace by specifying the name in the YAML file in the metadata session or using the `-n` flag on the terminal