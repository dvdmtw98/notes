---
tags:
- kubernetes
- container
- devops
- orchestration
title: Kubernetes Pods
---

````bash
# View created Pods
kubectl get pods [--all-namespaces] [-o wide]
````

In Kubernetes we generally do not create a lone Pod (Deployment is created)  
When the -o wide flag is used the IP Address of the Pods are also visible

````bash
# Create Pod directly
kubectl run netshoot --rm -it --image bretfisher/netshoot -- /bin/bash

# Connect to terminal of running Pod
kubectl exec <pod-name> -it -- /bin/bash
````

Command to be executed on container needs to be specified after the `--`

````bash
# View labels present on Pod
kubectl get pod <pod-name> -o template --template='{{.metadata.labels}}'

# View the metadata/ state information related to Pod
kubectl describle pod <pod-name>

# View metadata/ state information of all Pods
kubectl describe pods

# View logs od a Pod
kubctl logs <pod-name>
````