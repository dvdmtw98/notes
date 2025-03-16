---
title: Kubernetes YAML File
tags:
  - kubernetes
  - container
  - devops
  - orchestration
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

All the commands that we provide in the terminal have an generator that corresponds to it. Generators are template files that are used to fill in the parameters that we do not specify and the command line.  
Every resource in Kubernetes has an specification (spec)

The `--dry-run -o yaml` flag can be used to instruct Kubernetes to not run the command on the cluster and return the spec of the command in YAML format

````bash
kubectl create deployment mynginx --image=nginx --dry-run=client -o yaml

# Difference between running spec and YAML file
kubectl diff -f <file-name>
````

Imperative : Focus on **how** a program operates (CLI Commands)  
Declarative : Focus on **what** the program should accomplish (YAML File)

````bash
kubectl apply -f <file-name>
kubectl delete -f <file-name>
````

Multiple resources can be declared in a single YAML file (Each resource has to be separated by `---` )  
Multiple YAML files can be saved in a folder and the folder can be provided to the `apply` command

---

The full description for an service/ object is called a Manifest  
Each manifest file requires 4 root keys (Four Main key value pairs)  
In metadata filed only name key is mandatory  
An 5 root key called status is added automatically by Kubernetes (This data is fetched from etcd)

````yml
apiVersion: v1
kind: Pod
metadata:
	name: nginx
spec:
````

Label is defined in the metadata part of the configuration file. This is the name that is assigned to the object  
Selector is defined in the spec part of the configuration file. This is used to link connected objects together

````bash
# View Kind Values
kubectl api-resources

# View API Version Values
kubectl api-versions

# All specs supported by a Kind
kubectl explain <kind-name> --recursive
kubectl explain deployment.spec.template
````

[Declarative Management of Kubernetes Objects Using Config Files | Kubernetes](https://kubernetes.io/docs/tasks/manage-kubernetes-objects/declarative-config/)  
[Reference | Kubernetes](https://kubernetes.io/docs/reference/#api-reference)
