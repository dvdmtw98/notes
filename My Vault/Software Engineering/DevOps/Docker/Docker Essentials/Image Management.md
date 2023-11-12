---
tags: [docker, devops, container]
---

Image: A program/software along with binaries and dependencies. Additionally, image also contains metadata about itself and instructions on how it can be executed.  
Image does not contain kernel, drivers, etc. (Shared with host system)

Docker Images are made up of layers. A blank image starts from with the layer **scratch**  
Docker uses **Union File System (UFS)** to combine the multiple layers

Each layer in a image has a unique hash value  
If multiple images share a layer then that layer needs to be downloaded only once  
When we run a container an read/ write layer is added over the base image in which the program contained in the image is executed  
Because of this the image that is used for creating the container is never modified

Tag specifies the version of the container to be used. Default tag is `latest`

| Command                                                  | Description                   |
| :------------------------------------------------------- | :---------------------------- |
| `docker image ls`                                        | View all Images               |
| `docker image pull <image-name>`                         | Pull image from Docker Hub    |
| `docker image history <container-name>`                  | View Image Layers             |
| `docker image inspect <container-name>`                  | View Image Metadata           |
| `docker image tag <name>[:<tag>] <new-name>[:<new-tag>]` | Change Image Name             |
| `docker image rm <image-name>`                           | Remove Image from Docker      |
| `docker image rm $(docker image ls -aq)`                 | Remove all Images from Docker |

---

[Docker](../Docker.md)
