---
title: Swarm Cluster Management
tags:
  - docker
  - devops
  - container
  - orchestration
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

````bash
# Create a Single Node Cluster
docker swarn init
docker swarm init --advertise-addr <ip-address>
````

 > [!important]
 > * The command that swarm init will return needs to be entered on the other machines to add them into the swarm
 > * Worker nodes cannot use any of the swarm commands

A lot of PKI and security automation tasks are performed in the background
* Root Signing Certificate created for the swarm
* Certificate is issued to the manager node
* Join tokens are created 

Raft database is created to store CA, configs and secrets
* Encrypted by default on disk
* Replicated logs amount managers using mutual TLS

````bash
# Convert worker node a manager node
docker node update --role manager <node-name>

# Token to add another node as manager
docker swarm join-token manager

# Leave Swarm Cluster
docker swarm leave
docker swarm leave --force
````
