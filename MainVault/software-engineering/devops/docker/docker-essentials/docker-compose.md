---
tags:
  - docker
  - devops
  - container
title: Docker Compose
date: 2024-01-28 14:15:56 -0600
---

Docker Compose has two parts:
* YAML file which describes the configuration of the containers
* CLI tool which is used for local testing/ automation using the YAML file

Compose is not meant for production usage its meant for quick local environment development  
An new network interface is always created for containers created from a config file

### Compose File Structure

The docker-compose file has 3 main parts: 

* Services
* Volumes (Optional)
* Networks (Optional)

The first line in the file always needs to be the version of compose to use  
It is recommended to use version 2 at the very least  
If this line is not specified it defaults to version 1

Inside services we can specify multiple "servicename"  
Each service name refers to a container  
The service name need not be the same as the container name but it will be the name used as hostname on the network

Inside a compose file we can build custom containers as well  
It will be build when `docker compose up` is run and the image does not exist in cache
`docker compose build` can also be used to build images

Whenever compose creates any asset (image, volume, network, etc.) it will prepend the current working directory name to the name that we specify

````bash
docker compose up 			# Start containers and log on terminal
docker compose up -d 		# Start containers in detached state

docker compose down 		# Stop containers/ Cleanup
docker compose down -v 		# Stop containers and remove volumes as well

docker compose ps 			# View running containers
docker compose top 			# View services running in container
docker compose logs 		# View logs
````

If we have files called `docker-compose.yaml` and `docker-compose.override.yaml` in the folder when we run `docker compose up` the override file will overwrite conflicting options from the base compose file

If we want to specify override files with using the default names it can be specified in the `docker compose up` command using the `-f `flag  
The first file specified needs to be the base file

````bash
# Using multiple config files
docker compose -f docker-compose.yml -f docker-compose.test.yml up -d

# Squish multiple config files into one file
docker compose -f docker-compose.yml -f docker-compose.prod.yml config
````

**<u>Options</u>**:  
-f : Alternate Compose File  
-p : Alternate Project Name (Default : Directory name)

[Compose file version 3 reference | Docker Docs](https://docs.docker.com/compose/compose-file/compose-file-v3/#volumes)  
[Overview of docker-compose CLI | Docker Documentation](https://docs.docker.com/compose/reference/)
