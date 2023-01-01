1. **Docker**
	* [Image Management](Docker%20Essentials/Image%20Management.md)
	* [Container Run Modes](Docker%20Essentials/Container%20Run%20Modes.md)
	* [Container Management](Docker%20Essentials/Container%20Management.md)
	* [Docker Network](Docker%20Essentials/Docker%20Network.md)
	* [Docker Volumes](Docker%20Essentials/Docker%20Volumes.md)
	* [Docker Compose](Docker%20Essentials/Docker%20Compose.md)
	* [Docker Prune Command](Docker%20Essentials/Docker%20Prune%20Command.md)
	* [Docker Health Check](Docker%20Essentials/Docker%20Health%20Check.md)
2. **Building & Publishing Images**
	* [Docker File](Building%20Docker%20Image/Docker%20File.md)
	* [Building Docker Image](Building%20Docker%20Image/Building%20Docker%20Image.md)
	* [Docker Hub](Building%20Docker%20Image/Docker%20Hub.md)
3. **Docker Swarm**
	* [Swarm Architecture](Docker%20Swarm/Swarm%20Architecture.md)
	* [Swarm Cluster Management](Docker%20Swarm/Swarm%20Cluster%20Management.md)
	* [Swarm Service](Docker%20Swarm/Swarm%20Service.md)
	* [Swarm Network](Docker%20Swarm/Swarm%20Network.md)
	* [Swarm Stacks](Docker%20Swarm/Swarm%20Stacks.md)
	* [Swarm Secrets](Docker%20Swarm/Swarm%20Secrets.md)

---

### Docker Command Format

[Docker Commands, Help & Tips · GitHub](https://gist.github.com/bradtraversy/89fad226dc058a41b596d586022a9bd3)

````bash
docker
docker version 	# Verify CLI can talk to Engine
docker info     # Config Settings of Engine
````

<u>New Docker Command Format</u>

````bash
docker <command> <sub-command> (options)
docker container run
````

<u>Old Docker Command Format</u>

````bash
docker <command> (options)
docker run
````

[Docker Command Examples](Docker%20Command%20Examples.md)

---

### Miscellaneous Points

* Containers are only alive till the command that started the container is running
* When we specify an command at the end of the "docker run" command it will overwrite the default startup command of the container
* It is best practice to create a new network for each application
* The default network driver used by Docker is Bridge. The default bridge does not have a DNS Server. To overcome this issue the `--link` flag can be used which allows to link containers that need to communicate with each other together
* When we run a container an new read/ write layer is added over the base image (a new copy of base image is not created) because of this only extra space for the new layer is required

---

[Tools & Services](../Tools%20&%20Services.md)
