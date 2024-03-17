---
tags:
  - docker
  - devops
  - container
title: Docker Command Examples
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

### Command Examples

````bash
docker container run \ 
	--name mysql \
	-d -p 3306:3306 \
	-e MYSQL_ROOT_PASSWORD=password -e MYSQL_ROOT_HOST=%
	-v mysqldata:/var/lib/mysql \
	mysql
````

In PowerShell for Multiline command "backtick" has to be used  
`MYSQL_ROOT_HOST=%` : Required to connect to MySQL as root from outside Docker

````bash
docker container run \
	--name mongodb \
	-d -p 27017:27017 \
	-e MONGO_INITDB_ROOT_USERNAME=root \
	-e MONGO_INITDB_ROOT_PASSWORD=password \
	-v mongodb:/data/db -v mongodbconfig:/data/configdb \
	mongo
````

Use `mongodump` and `mongorestore` to Export and Import data from MongoDB

````bash
docker container run \
	--name oracle \
	-d -p 1521:1521 \
	-e ORACLE_PASSWORD=password \
	-v oracle-data:/opt/oracle/oradata \
	gvenzl/oracle-xe:18
````

Default Pluggable DB name : `XEPDB1`
