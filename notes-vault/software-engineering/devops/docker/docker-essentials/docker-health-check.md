---
title: Docker Health Check
tags:
  - docker
  - devops
  - container
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

The command is executed inside the container by the Docker Engine  
It expects 0 (OK) or 1 (Error) as output  
There are three states that are present for a container : Starting, Healthy, Unhealthy  
The command is executed every 30 secs by default

The last 5 health check values can be accesses by inspecting the container  
Docker run will not perform an action on an unhealthy container  
Services is responsible for replacing an container if its status is unhealthy

````bash
docker container run --name p2 -d \
	--health-cmd="pd_isready -U postgres || exit 1" postgres
````

Some containers can have an inbuild health check command for other we can specify an command that should be executed to consider the container healthy
