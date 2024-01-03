---
tags:
- docker
- devops
- container
- index
title: Docker
---

### Table of Content

1. **Docker**
	* [Image Management](docker-essentials/image-management.md)
	* [Container Run Modes](docker-essentials/container-run-modes.md)
	* [Container Management](docker-essentials/container-management.md)
	* [Docker Network](docker-essentials/docker-network.md)
	* [Docker Volumes](docker-essentials/docker-volumes.md)
	* [Docker Compose](docker-essentials/docker-compose.md)
	* [Docker Prune Command](docker-essentials/docker-prune-command.md)
	* [Docker Health Check](docker-essentials/docker-health-check.md)
2. **Building & Publishing Images**
	* [Docker File](building-docker-image/docker-file.md)
	* [Building Docker Image](building-docker-image/building-docker-image.md)
	* [Docker Hub](building-docker-image/docker-hub.md)
3. **Docker Swarm**
	* [Swarm Architecture](docker-swarm/swarm-architecture.md)
	* [Swarm Cluster Management](docker-swarm/swarm-cluster-management.md)
	* [Swarm Service](docker-swarm/swarm-service.md)
	* [Swarm Network](docker-swarm/swarm-network.md)
	* [Swarm Stacks](docker-swarm/swarm-stacks.md)
	* [Swarm Secrets](docker-swarm/swarm-secrets.md)

---

### Docker Command Format

[Docker Commands, Help & Tips · GitHub](https://gist.github.com/bradtraversy/89fad226dc058a41b596d586022a9bd3)

````bash
docker
docker version 	# Verify CLI can talk to Engine
docker info     # Config Settings of Engine
````

<u>New Docker Command Format</u>

````bash
docker <command> <sub-command> (options)
docker container run
````

<u>Old Docker Command Format</u>

````bash
docker <command> (options)
docker run
````

[Docker Command Examples](docker-command-examples.md)

---

### Miscellaneous Points

* Containers are only alive till the command that started the container is running
* When we specify an command at the end of the "docker run" command it will overwrite the default startup command of the container
* It is best practice to create a new network for each application
* The default network driver used by Docker is Bridge. The default bridge does not have a DNS Server. To overcome this issue the `--link` flag can be used which allows to link containers that need to communicate with each other together
* When we run a container an new read/ write layer is added over the base image (a new copy of base image is not created) because of this only extra space for the new layer is required

---

[DevOps](../devops.md)  
[Azure Compute Services](../../../cloud-service-providers/azure/azure-compute-services/azure-compute-services.md)