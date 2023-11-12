---
tags: [azure, cloud, networking, security]
---

Allows to filter traffic going to and from the Resources that are present in a Virtual Network (VNet)  
Security Rules are used for creating Filters  
NSGs can be configured on the VM NIC in addition to the Subnet

![Network Security Groups|450](../images/network-security-groups.png)

#### Security Rule Components

* Source/Destination
* Protocol
* Ports
* Direction
* Priority (Order of Evaluation)

#### Security Rules Logic

Two security rules with the same priority and direction cannot be created  
We can have 5000 NSG per subscription and 1000 security rules per NSG  
Security rules with lower priority number are processed first  
If we create a inbound rules we do not have to create a corresponding outbound rule
