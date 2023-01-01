Emulation of Physical Network Infrastructure in the cloud  
Allows to connect Azure services together (allows to connect cloud and on-premises services as well)  
Provides isolation, monitoring, segmentation, communication, filtering between services in the cloud

* VNets can be further broken down into subnets
* Allows to group similar resources together
* Allows for effective address allocation
* Supports Network Filtering via [Network Security Groups (NSG)](Network%20Security%20Groups%20%28NSG%29.md) or Application Security Groups (ASG)

 > [!NOTE]
 > * Subnets cannot be nested
 > * Virtual Networks can only span a single region

Virtual Networks can be connected to each other using:
* VNet Peering
* VPN Gateway
