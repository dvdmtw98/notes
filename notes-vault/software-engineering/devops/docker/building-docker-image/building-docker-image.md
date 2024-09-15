---
title: Building Docker Image
tags:
  - docker
  - devops
  - container
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-31 09:23:24 -0600
---

Whenever we build an image Docker will cache each layer of the build process so if in the future we make change to a any layer the other layers can be used directly without having to build them  
When a layer changes every layer below that will also be built again

````bash
docker image build -t <image-name> . 
````

The `.` at the end of the command is to use say make the image using the files in the current directory

 > [!note]
 > `.dockerignore` file can be created to skip adding on certain files into the container when using the COPY option

**Options**  
`-t`: Name to be assigned to the image  
`-f`: Dockerfile name  
`--progress plan`: View output of commands executed inside container
