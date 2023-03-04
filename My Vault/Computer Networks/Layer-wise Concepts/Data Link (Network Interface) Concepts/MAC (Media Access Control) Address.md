---
title: MAC (Media Access Control) Address
tags: [networking, mac, data-link]
---

It is the **Physical Addressing System** for a device operating on the Logical Level  
These addresses are tied to the NIC of the device and they cannot be changed  
No two [NIC (Network Interface Card)](../../Network%20Components/NIC%20(Network%20Interface%20Card).md) anywhere in the world will have the same MAC address

MAC Addresses are always made of 48 bits  
They are represented using 12 hexadecimal characters  
Each hexadecimal character is 4 bits in size i.e. 4 * 12 = 48 bits 

First 6 characters are called OUI (Organizational Unique Identifier) which is unique to each manufacturer (Vender Code)  
Last 6 characters are assigned sequentially and are unique for each card

<u>Different Notations of MAC Address</u>
  
08:00:27:EC:10:60 (Linux/ MAC)  
08-00-27-EC-10-60 (Windows)  
0800.27EC.1060 (Cisco)

MAC Address is used for communication between devices (True even if the devices are far away and on different LAN networks)

MAC Address: Used to Identify a device (Who)  
IP Address: Used to locate a device (Where)

[ARP (Address Resolution Protocol)](ARP%20%28Address%20Resolution%20Protocol%29.md) is used by devices to find the MAC Address of other devices

Command: `getmac /FO list /V`

### Types of MAC Address

<u>Unicast</u>  
Unique address that is used by each device

<u>Multicast</u>  
Send the packet to a group of devices that are on the network

 > [!INFO]
 > We can differenciate between unicast and multicast addresses by look at the LSB of the first byte
 > 0 : Unicast Address
 > 1 : Multicast Address

<u>Broadcast</u>  
FF-FF-FF-FF-FF-FF  
Send the packet to all the devices on the network

[MAC Address Explained - YouTube](https://www.youtube.com/watch?v=TIiQiw7fpsU)