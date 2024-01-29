---
tags:
  - docker
  - devops
  - container
title: Docker Network
date: 2024-01-28 14:15:56 -0600
---

### Default Network Types

**Bridged** : Default. Connects the docker Virtual Network to the Network of the host  
**Host** : Directly attaches the docker containers to the host network (Faster Performance but less secure)  
**None** : Only localhost interface no access to internet

Third party drivers can be downloaded for creating other types of networks

### Bridge Network

When an create a new Container a `veth` (Virtual Ethernet Network) interface is created between the Container and the Docker Network (docker0) Interface  
The bridge Network has its own DHCP and DNS server  
All the container connected to the same Virtual Network can communicate with each other without exposing any ports

 > [!NOTE]
 > * The default Bridge network does not resolve Container DNS names
 > * On this network containers can be connected to each other only by using the `--link` flag (This flag is considered legacy)
 > * It is recommended to always create a user-defined Bridge Network
 > * The **name of the container** is used as its **hostname** on the network (defaut)

### Host Network

On the Host network the Container is directly attached to the Network Interface of the Host System  
There is no concept of exposing port ( `-p` ) as the container is already connected to the Host network

### MACVLAN Network

Connect the Docker Container directly to the Switch/ Router of the actual network  
Each container will be assigned its own IP Address by the default gateway of the Network and have their own MAC Addresses  
They act kind of like Virtual Machines on the Network

````bash
docker network create -d macvlan \
	--subnet <network-subnet> \
	--gateway <route-ip> \
	-o parent=<default-interface-name> \
	<network-name>
````

When we create a Container on this network we need to manually assign it an IP Address using the ( `--ip` ) flag  
This interface does not have its own DHCP server

 > [!NOTE]
 > By default we will not be able to ping other devices on the network for that Promiscuous Mode needs to be enabled on the Network Interface

This is the default mode of MACVLAN (Bridge)  
It can also be setup in 802.1Q mode

### IPVLAN

Supports two modes : L2 (Default) and L3

L2 is similar to MACVLAN but the Containers are not assigned there own MAC Addresses  
They share their MAC Addresses with the MAC Address of the Host System  
No need to enable Promiscuous Mode  
The IP Addresses still need to be assigned manually to the Containers

In L3 mode all the communication happens over Layer 3  
We can create Networks to which our Containers will belong and these Networks are connected to the Host device as it the Host device was the router  
Containers running in different networks that are created using this approach can also connect with each other  
By default the containers cannot access the Internet

---

[[docker-compose|Docker Compose]] creates a new network automatically for each application (makes working with networks much easier)

````bash
docker network ls
docker network inspect <network-name>

docker network create <network-name> [-d <driver-name>]

docker network connect <network-name> <container-name>
docker network disconnect <network-name> <container-name>
````

**<u>Options</u>**:  
-d : Specify a driver for the network (--driver)  
--net-alias : Set an alias for the hostname of a container  
--link : Link the containers to each other  
--ip : Specify an IP Address
