### Table of Content

* [IPv4 (Internet Protocol v4) Address](IPv4%20%28Internet%20Protocol%20v4%29%20Address.md)
	* [IP Address Classes](IP%20Address%20Classes.md)
	* [Public & Private IP Addresses](Public%20&%20Private%20IP%20Addresses.md)
	* [CIDR (Classless Inter-Domain Routing)](CIDR%20%28Classless%20Inter-Domain%20Routing%29.md)
* [APIPA (Automatic Private IP Addressing)](APIPA%20%28Automatic%20Private%20IP%20Addressing%29.md)
* [Subnetting](Subnetting.md)
* [IPv6 (Internet Protocol v6) Address](IPv6%20%28Internet%20Protocol%20v6%29%20Address.md)
* [IPv4 to IPv6 Transition](IPv4%20to%20IPv6%20Transition.md)
* [ICMP (Internet Control Message Protocol)](ICMP%20%28Internet%20Control%20Message%20Protocol%29.md)
* [Router](../../Networking%20Devices/Router.md)
	* [Dynamic Routing Protocols](Dynamic%20Routing%20Protocols.md)
	* [NAT (Network Address Translation)](NAT%20%28Network%20Address%20Translation%29.md)

---

### Broadcast Address

Local Broadcast: 255.255.255.255  
Send packet to every host on Local Network

Directed/ Target Broadcast: Broadcast IP of Subnet  
If Subnet is 10.3.3.0/25 then Directed Broadcast IP is 10.3.3.127  
Send packet to every host on local Network as well as send packet to every host on foreign network  
Sending packets to all devices on a foreign network is considered a security risk and this feature is disabled most modern hardware
