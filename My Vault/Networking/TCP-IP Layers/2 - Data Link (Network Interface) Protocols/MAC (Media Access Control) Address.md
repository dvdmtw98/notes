Physical address of the network adapter card  
These addresses are tied to the card and they cannot be changed  
No two cards anywhere in the world will have the same MAC address

They are made of 6-bit hexadecimal numbers  
6 bytes = 48 bits (6 * 8)

First 3 bytes are called OUI (Organizational Unique Identifier) - Unique to each manufacturing  
Last 3 bytes are assigned sequentially and are unique for each card

<u>Different Notations of MAC Address</u>
  
08:00:27:EC:10:60 (Linux/ MAC)  
08-00-27-EC-10-60 (Windows)  
0800.27EC.1060 (Cisco)

MAC Address is used for communication between devices (True even if the devices are far away and on different LAN networks)

MAC Address : Used to Identify a device (Where)  
IP Address : Used to locate a device (Who)

[ARP (Address Resolution Protocol)](ARP%20%28Address%20Resolution%20Protocol%29.md) is used by devices to find the MAC Address of other devices

Command: `getmac /FO list /V`

---

### Types of MAC Address

* <u>Unicast</u>  
  Unique address that is used by each device

* <u>Multicast</u>  
  Send the packet to a group of devices that are on the network

 > [!INFO]
 > We can differenciate between unicast and multicast addresses by look at the LSB of the first byte
 > 0 : Unicast Address
 > 1 : Multicast Address

* <u>Broadcast</u>  
  FF-FF-FF-FF-FF-FF  
  Send the packet to all the devices on the network

---

**<u>References</u>**:

* [MAC Address Explained - YouTube](https://www.youtube.com/watch?v=TIiQiw7fpsU)
