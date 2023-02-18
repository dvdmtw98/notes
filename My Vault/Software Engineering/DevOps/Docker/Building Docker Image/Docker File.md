---
title: Docker File
tags: [docker, devops, container]
---

Generally created with the filename "Dockerfile" and saved in the root of the project  
Another name can be used as well but during build the file name needs to be specified explicitly using the `-f` flag

Every Docker command that we write is going to be created as a new layer for the image  
When using FROM for getting a base image whatever is specified in the base image is inherited into our target image as well

### Commands

````docker
FROM <distro-name>
````

The FROM command is an required command in every Docker file  
It is the base image that is going to be used for making the new image  
If we don't want to start from on image then "FROM scratch" can be used

````docker
WORKDIR <directory-path>
````

Similar to running `cd <path>`  
Recommended way of change the working directory when building Docker Images

````docker
ENV <key>=<value>
````

Environment Variables can be optionally set which can be used later on in the docker file  They can be accessed and modified in the container after the image is built  
ENV can be created without the `=` signal as well

```docker
ARG <key>=<value>
```

Arguments are a special type of environment variable that is only available during the build process of the image.

To pass values for the arguments during build use the `--build-arg` flag. If a FROM command is encountered in the `Dockerfile` all the arguments that have been defined before it will be reset
Additionally ARGs can be declared globally before the 1st FROM statement but to use these values the variables need to be called in each of the stages as required

```docker
ARG FILENAME=foo.txt

FROM ubuntu:latest

ARG FILENAME
RUN echo "Hello World" >> ${FILENAME}
```

ARG can be used to dynamically select the version of the image to be used

````docker
COPY <host-system> <docker-image>
````

Copy files/ source code from host system into the Docker Image

````docker
RUN <command>
````

Used to run some shell commands that can be used to install/ unzip/ update various binaries that are present in the image at this point of time  
Multiple commands can be changed together using the `&&` operator

````docker
EXPOSE <port-no>
````

Used to specify the ports that need to be exposed by this container so the user can connect to them using the '-p' flag  
By default no ports are exposed on a container

````docker
CMD ['command', 'to', 'run']
````

It is a required parameter and appears at the end of the docker file  
Specifies how the container needs to be run  
Only one CMD is allowed per docker file so if multiple are specified the last one wins

````docker
USER <username>
````

Run commands in the image as a specific user  
Some images come with an non root user created out of the box  
When using `COPY` and `WORKDIR` commands add the `--chown` flag to ensure the operations are being performed as the non-root user

````docker
ENTRYPOINT ['entry-point.sh']
````

The actual syntax of the command run at the start of the container is ENTRYPOINT CMD  
It can be used to specify an script that needs to be executed every time at the start of the container

---

**<u>Reference</u>**:

* [udemy-docker-mastery/Dockerfile at main · BretFisher/udemy-docker-mastery · GitHub](https://github.com/BretFisher/udemy-docker-mastery/blob/main/dockerfile-sample-1/Dockerfile)
* [Dockerfile reference | Docker Documentation](https://docs.docker.com/engine/reference/builder/)
* [ENTRYPOINT vs. CMD, what's the difference in Dockerfiles - YouTube](https://www.youtube.com/watch?v=C1GE07UEFDo)