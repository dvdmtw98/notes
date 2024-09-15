---
title: Swarm Service
tags:
  - docker
  - devops
  - container
  - orchestration
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

````bash
# View all nodes in cluster
docker node ls

# View tasks running on the node
docker node ps <node-name>
````

`docker service` is the equivalent of `docker run` in swarm

````bash
# Run a service on cluster
docker service create [--replicas 3] alpine ping 1.1.1.1

docker service create --name db --network backend -e POSTGRES_HOST_AUTH_METHOD=trust --mount type=volume,source=db-data,target=/var/lib/postgresql/data postgres:9.4

# View all running services
docker service ls

# View the tasks running for the service
docker service ps <service-name>

# Scale up a service
docker service update <service-name> --replicas 3

# View thw logs for the service
docker service logs <service-name>

# Remove a service
docker service rm <service-name>
````

If we remove a task/container from the cluster using `docker container rm -f <task-name>` then swarm will automatically spin up a new container

 > [!important]
 > * Use the `-d` flag with the service command to start in detached state as we need to wait till the service is deployed
 > * The `-v` flag does not work with service instead we need to use the `--mount` flag

Editing most of the properties of the container is got to cause them to be redeployed  
The changes are propagated one by one to all the containers to minimize downtime

````bash
# Scale a service
docker service scale <service-name>=5

# Update the container Image
docker service update --image <image-name> <service-name>
````

Docker does not have an option to rebalance tasks on the nodes  
Sometimes we can end up in situation where some nodes have a lot of tasks  
Docker before deploring a service always checks which node is the best to deploy an task  
By forcing an redeployment of an service we can have the nodes utilized in a efficient manner

````bash
# Force redeploy containers
docker service update --force <service-name>
````
