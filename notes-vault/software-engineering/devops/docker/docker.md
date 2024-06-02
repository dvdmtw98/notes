---
tags:
  - docker
  - devops
  - container
  - index
title: Docker
date: 2024-01-28 14:15:56 -0600
updated: 2024-06-01 16:09:35 -0500
---

### Table of Content

1. **Docker**
	* [[image-management|Image Management]]
	* [[container-run-modes|Container Run Modes]]
	* [[container-management|Container Management]]
	* [[docker-network|Docker Network]]
	* [[docker-volumes|Docker Volumes]]
	* [[docker-compose|Docker Compose]]
	* [[docker-prune-command|Docker Prune Command]]
	* [[docker-health-check|Docker Health Check]]
2. **Building & Publishing Images**
	* [[docker-file|Docker File]]
	* [[building-docker-image|Building Docker Image]]
	* [[docker-hub|Docker Hub]]
3. **Docker Swarm**
	* [[swarm-architecture|Swarm Architecture]]
	* [[swarm-cluster-management|Swarm Cluster Management]]
	* [[swarm-service|Swarm Service]]
	* [[swarm-network|Swarm Network]]
	* [[swarm-stacks|Swarm Stacks]]
	* [[swarm-secrets|Swarm Secrets]]

### Docker Command Format

[Docker Commands, Help & Tips · GitHub](https://gist.github.com/bradtraversy/89fad226dc058a41b596d586022a9bd3)

````bash
docker
docker version 	# Verify CLI can talk to Engine
docker info     # Config Settings of Engine
````

#### New Docker Command Format

````bash
docker <command> <sub-command> (options)
docker container run
````

#### Old Docker Command Format

````bash
docker <command> (options)
docker run
````

[[docker-command-examples|Docker Command Examples]]

### Miscellaneous Points

* Containers are only alive till the command that started the container is running
* When we specify an command at the end of the "docker run" command it will overwrite the default startup command of the container
* It is best practice to create a new network for each application
* The default network driver used by Docker is Bridge. The default bridge does not have a DNS Server. To overcome this issue the `--link` flag can be used which allows to link containers that need to communicate with each other together
* When we run a container an new read/ write layer is added over the base image (a new copy of base image is not created) because of this only extra space for the new layer is required
