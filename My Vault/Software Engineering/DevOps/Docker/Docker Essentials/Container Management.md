---
tags: [docker, devops, container]
---

````bash
docker container ls 	# List running containers
docker container ls -a 	# List all containers
````

`ps` is an alias for the `ls` command  
`ls` is the newer command and should be used

````bash
# View Logs
docker container logs <container-name>
# Follow the Logs
docker container logs -f <container-name> 			

# View details of config in JSON format
docker container inspect <container-name> 			
# View IP Address of Container
docker container inspect --format '{{ .NetworkSettings.IPAddress }}' <container-name> 

# View Process in Container
docker container top <container-name> 	
# View Usage Stats for all running container
docker container stats
# View the exposed ports on the container
docker container port <container-name> 				

# Stop Container
docker container stop <container-name> 				
# Stop all running containers
docker container stop $(docker container ls -aq) 	 

# Remove Container
docker container rm <container-name> 
# Forcefully Remove Running Container
docker container rm -f <container-name> 
````
