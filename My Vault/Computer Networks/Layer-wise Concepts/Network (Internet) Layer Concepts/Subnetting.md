---
title: Subnetting
tags: [networking, network, ip, subnet]
---

Using default Class A, B and C subnets (Classful IP Addressing) is inefficient  
It wastes unused IP Addresses (Private IP Addresses)

Subnetting allows to create multiple logical networks that exist within a single Class A, B or C network (Classless Subnet)

It also allows for more efficient routing via router summarization i.e. Routing tables do not have to store data for an large network so routing tables won't become large

---

### Fixed Length Subnetting

Also called Fixed Length Subnet Mask (FLSM)  
We borrow host bits to create smaller networks from a Class A, B or C network  
We end up creating more networks but the amount of IP addresses available reduces  

|     |     |     |     |  x  | Network | Addresses |
|:---:|:---:|:---:|:---:|:---:|:-------:|:---------:|
| /1  | /9  | /17 | /25 | 128 |    2    |    128    |
| /2  | /10 | /18 | /26 | 192 |    4    |    64     |
| /3  | /11 | /19 | /27 | 224 |    8    |    32     |
| /4  | /12 | /20 | /28 | 240 |   16    |    16     |
| /5  | /13 | /21 | /29 | 248 |   32    |     8     |
| /6  | /14 | /22 | /30 | 252 |   64    |     4     |
| /7  | /15 | /23 | /31 | 254 |   128   |     2     |
| /8  | /16 | /24 | /32 | 255 |   256   |     1     |

| Addresses | Boundary Values                                                        |
|:---------:|:---------------------------------------------------------------------- |
|    128    | 0, 128                                                                 |
|    64     | 0, 64, 128, 192                                                        |
|    32     | 0, 32, 64, 96, 128, 160, 192, 224                                      |
|    16     | 0, 16, 32, 48, 64, 80, 96, 112, 128, 144, 160, 176, 192, 208, 224, 240 | 

If Subnet Mask contains 0 in Network IP it will be 0  
If Subnet Mash contains 0 in Broadcast IP it will be 255

#### Exercise

169.174.141.10/28

|              |             Value              |
|:------------:|:------------------------------:|
|  IP Address  |         169.174.141.10         |
| Subnet Mask  |        255.255.255.240         |
|  Network IP  |         169.174.141.0          |
| Broadcast IP |         169.174.141.15         |
| Usable Hosts | 169.174.141.1 - 169.174.141.14 | 

18.172.200.77/11

|              |             Value             |
|:------------:|:-----------------------------:|
|  IP Address  |         18.172.200.77         |
| Subnet Mask  |          255.224.0.0          |
|  Network IP  |          18.160.0.0           |
| Broadcast IP |        18.191.255.255         |
| Usable Hosts | 169.160.0.1 - 169.191.255.254 | 

[Professor Messer - Seven Second Subnetting - YouTube](https://www.youtube.com/watch?v=ZxAwQB8TZsM)
