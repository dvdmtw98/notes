---
title: Subnetting
tags:
  - networking
  - ip
  - subnet
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

Using default Class A, B and C subnets (Classful IP Addressing) is inefficient  
It wastes unused IP Addresses (Private IP Addresses)

Subnetting allows to create multiple logical networks that exist within a single Class A, B or C network (Classless Subnet)

It also allows for more efficient routing via router summarization i.e. Routing tables do not have to store data for an large network so routing tables won't become large

### Fixed Length Subnetting

We borrow host bits to create smaller networks from a Class A, B or C network  
We end up with more networks but the amount of IP addresses in each network reduces  

**Observation**  
255.255.255.X: Every bit we borrow results in the subnet getting divided in half  

255.255.255.0: 1 Network  
255.255.255.128: 2 Network  
255.255.255.192: 4 Network

|       |       |       |       |   x   | Network | Addresses |
| :---: | :---: | :---: | :---: | :---: | :-----: | :-------: |
|  /1   |  /9   |  /17  |  /25  |  128  |    2    |    128    |
|  /2   |  /10  |  /18  |  /26  |  192  |    4    |    64     |
|  /3   |  /11  |  /19  |  /27  |  224  |    8    |    32     |
|  /4   |  /12  |  /20  |  /28  |  240  |   16    |    16     |
|  /5   |  /13  |  /21  |  /29  |  248  |   32    |     8     |
|  /6   |  /14  |  /22  |  /30  |  252  |   64    |     4     |
|  /7   |  /15  |  /23  |  /31  |  254  |   128   |     2     |
|  /8   |  /16  |  /24  |  /32  |  255  |   256   |     1     |

| Addresses | Boundary Values                                                        |
| :-------: | :--------------------------------------------------------------------- |
|    128    | 0, 128                                                                 |
|    64     | 0, 64, 128, 192                                                        |
|    32     | 0, 32, 64, 96, 128, 160, 192, 224                                      |
|    16     | 0, 16, 32, 48, 64, 80, 96, 112, 128, 144, 160, 176, 192, 208, 224, 240 |

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ZxAwQB8TZsM?si=swmbx5Ck5MaCLXTR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

**Step 1**: Using Chart convert IP Address and Subnet Mask to Decimal Notation  
`/26`: 255.255.255.192  
`/24`: 255.255.255.0  
`/20`: 255.255.240.0

**Step 2**: Calculate Network Address  
If subnet mask is 255 bring down the address  
If its 0, use 0

For any other value based on value of x refer charts

**Step 3**: Calculate Broadcast Address  
If subnet mask is 255 bring down the address  
If its 0, use 255

For any other value based on value of x refer charts

**Step 4**: Calculate Usage IPs  
First IP = Network Address + 1  
Last IP = Broadcast Address - 1

#### Exercise

169.174.141.10/28

|              |             Value              |
| :----------: | :----------------------------: |
|  IP Address  |         169.174.141.10         |
| Subnet Mask  |        255.255.255.240         |
|  Network IP  |         169.174.141.0          |
| Broadcast IP |         169.174.141.15         |
| Usable Hosts | 169.174.141.1 - 169.174.141.14 |

18.172.200.77/11

|              |             Value             |
| :----------: | :---------------------------: |
|  IP Address  |         18.172.200.77         |
| Subnet Mask  |          255.224.0.0          |
|  Network IP  |          18.160.0.0           |
| Broadcast IP |        18.191.255.255         |
| Usable Hosts | 169.160.0.1 - 169.191.255.254 |
