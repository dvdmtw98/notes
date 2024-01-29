---
tags:
  - docker
  - devops
  - container
title: Container Run Modes
date: 2024-01-28 14:15:56 -0600
---

````bash
docker container run	 	# Create new instance of Image
docker container start 		# Start stopped container
docker container exec 		# Execute command on a running container
````

### Docker Run

````bash
docker container run -d -p 80:80 nginx
docker container run --rm -it ubuntu /bin/bash

docker container run -d -p 80:80 --name mynginx nginx
docker container run -d -p 3306:3306 --name mysql --env MYSQL_ROOT_PASSWORD=123456 mysql

docker container run -d --net <network-name> --name db postgres:latest
docker container run -d --name es2 --net my_network --net-alias search 1c9757417a29

docker container run -d --name mysql -e MYSQL_ROOT_PASSWORD=123456 -v mysql-data:/var/lib/mysql mysql
docker container run -v //c/Users/Username/stuff:/container/path nginx

docker run -it --rm --name my-running-script -v $(pwd):/usr/src/myapp -w /usr/src/myapp python:3 python your-daemon-or-script.py
````

### Docker Start/ Exec

````bash
# Attach the container in interactive mode
docker container start -ai <container-name>

# Execute command on a running container (login as root)
docker container exec -u 0 -it <container-name> bash
````

 > [!NOTE]
 > * An interactive container can be converted to an daemon container using `^P^Q` shortcut
 > * Exec command does not overwrite the entrypoint command executed by the container

**<u>Options</u>**:  
-d : Run in detached/ background mode (--detach)  
-p 80:80 : 1st port is the host port and the 2nd one is the container port (--publish)  
-it : Run container in interactive mode and spawn a pseudo terminal (--interactive --tty)  
-a : Attach the container (Start again) (--attach)

--rm : Delete the container once it is exited (--remove)  
--name : Assign an name to the docker container  
-e : Used if the container allows environment variables to be set (--env)

--net : Connect container to a specific interface (--network)  
--net-alias : Assign a alternative hostname for container (--network-alias)  
--link : Link container together

-v : Create a volume and bind mount (--volume)  
-w : Working directory inside container (--workdir)
