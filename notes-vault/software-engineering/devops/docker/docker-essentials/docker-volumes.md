---
tags:
  - docker
  - devops
  - container
title: Docker Volumes
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-31 09:25:48 -0600
---

Containers are immutable and ephemeral  
This is an issue if our application generates persistent data

Docker has two solutions to deal with this problem:  
* **Volume**: Make special volume outside of UFS
* **Bind Mount**: Maps host directory to container directory

### Bind Mount

Bind Mounts cannot be specified in `Dockerfile` they have to be created at runtime  
If there is a file that is present on both host and container when we use bind mounts the host file will always win (The files in the container are not deleted they are just not present when bind mount is used)

```bash
# Create a Bind Mount
-v $(pwd):/usr/share/nginx/html
```

On PowerShell for command substitution use `${pwd}`

### Volume

Volumes are not deleted when an container is destroyed  
Volume can be created beforehand using the `docker volume create` command this is generally used when we need to specify a driver for the volume

````bash
docker volume ls
docker volume inspect <volume-name>

# Named Volume
docker container run -d --name mysql -e MYSQL_ROOT_PASSWORD=123456 \
	-v mysql-data:/var/lib/mysql mysql

# Bind Mount
docker container run -d -p 8080:80 -v $(pwd):/usr/share/nginx/html \
	--name nginx-website nginx
````

At the end of the path we can added `:ro` to make the path/volume read only

````bash
# Create a unnamed volume (Default)
-v /var/lib/mysql 
# Create a named volume
-v mysql-data:/var/lib/mysql
````

 > [!INFO]
 > When using Docker Desktop with WSL the data on the volumes can be found at: `\\wsl$\docker-desktop-data\version-pack-data\community\docker\volumes`

### Copy Command

The copy command can be used to modify files in present in container volume

```bash
# Copy files from container to local system
docker cp container-name:/data/ /data
```

[Manage data in Docker | Docker Documentation](https://docs.docker.com/storage/)
