---
title: Kubernetes ConfigMap & Secrets
tags:
  - kubernetes
  - container
  - devops
  - orchestration
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

ConfigMap and Secrets are mounted as volumes when they need to be used by a Pod

### Kubernetes Secrets

The value of the secret has to be **base64** encoded  
Storing data as secrets does not make the data secure. Addition security like the build-in encryption feature needs to be used  
Secrets have to be **always created before** the deployment

````bash
# Create secret using value from file
kubectl create secret generic db-user-pass \
  --from-file=username=./username.txt \
  --from-file=password=./password.txt

# Create secret using value from termianl
kubectl create secret generic db-user-pass \
  --from-literal=username=devuser \
  --from-literal=password='S!B\*d$zDsb='

kubectl get secrets
````

### Kubernetes Config Map

It is an central location for storing configuration/ environmental variables  
Can be used by multiple components

[Secrets | Kubernetes](https://kubernetes.io/docs/concepts/configuration/secret/)
