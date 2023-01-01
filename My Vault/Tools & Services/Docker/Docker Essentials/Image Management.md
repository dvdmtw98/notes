An image can be taught of as a collection of binaries and dependencies along with metadata about image and how to run the image  
Image has no kernel, drivers, etc. as the host system provides them

Docker Images are made up of layers. The starting blank layer is called as **scratch**  
Docker uses **Union File System** to combine the multiple layers that makeup an image

Each layer in a image is assigned a unique hash value  
If multiple images share a layer then that layer needs to be downloaded only once  
When we run a container docker added an read/ write layer over the base image because of this a whole new copy of the image does not have to be created

A tag can be specified after the container name (Tag specifies the version of the container to be used) when downloading an image

|Command|Description|
|:------|:----------|
|`docker image ls`|View all Images|
|`docker image pull <image-name>`|Pull image from Docker Hub|
|`docker image history <container-name>`|View Image Layers|
|`docker image inspect <container-name>`|View Image Metadata|
|`docker image tag <name>[:<tag>] <new-name>[:<new-tag>]`|Change Image Name|
|`docker image rm <image-name>`|Remove Image from Docker|
|`docker image rm $(docker image ls -aq)`|Remove all Images from Docker|

If we don't specify a tag then latest will be assigned to it by default

---

[Docker](../Docker.md)
