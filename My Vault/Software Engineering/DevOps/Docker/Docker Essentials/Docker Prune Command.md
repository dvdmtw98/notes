---
tags: [docker, devops, container]
---

````bash
docker system df 		   # View Space used by Docker

docker system prune 	   # Remove everything except unused images
docker system prune -a 	   # Remove everything (Even unused images)

docker image prune 		   # Remove dangling images
````

Tangling images are images/layers that are created during the build process and are no longer required or used

````bash
docker volume prune 	   # Remove unused volumes
docker container prune 	   # Remove all stopped containers
docker builder prune       # Remove build cache
````
