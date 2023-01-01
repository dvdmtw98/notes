Assigns IP Addresses, Subnet Mask, Default Gateway and DNS details to new devices on a network  
If DHCP is not configured then these properties need to assign manually

### DHCP IP Address Leasing Process

New client connected to network has an Initial IP 0.0.0.0. It sends "DHCP Discover"  Message as Broadcast on the network/ subnet  
DHCP Server returns an "DHCP Offer" Message (IP Address and Lease Information) after looking through its table and finds an usable IP Address. It is sent as Broadcast Message
Client accepts the "DHCP Offer" by replying with a "DHCP Request" message  
DHCP Server assigns client the IP Address and sends a "DHCP Ack" message finalizing the IP Address Lease

 > [!INFO]
 > If no DHCP Server is found a windows client will use [APIPA (Automatic Private IP Addressing)](../TCP-IP%20Layers/3%20-%20Network%20%28Internet%20Layer%29%20Protocols/APIPA%20%28Automatic%20Private%20IP%20Addressing%29.md) to configuration the device
