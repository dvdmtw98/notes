````bash
docker login 	# Login using Docker Hub Account
docker logout
````

`.docker/config.json` : Docker Hub login auth token location

````bash
docker image push <image-name> # Push Image to Docker Hub
````

If the same image has multiple tags then they all need to be pushed separately (Data will be only pushed once, Docker will understand it is the same image)
