---
title: Other Tools
tags: [security, tool]
---

### SearchSploit

Search's Exploit DB for any known exploits for an given service

<u>Update DB</u>

````bash
searchsploit -u
````

<u>Searching for Exploit</u>

````bash
searchsploit <service-name>
searchsploit <service-name> <version>
searchsploit -t <search-term> # Search Module Title only
````

<u>Copy Exploit Code to current directory</u>

````bash
searchsploit -m <exploit-id>
````

### Encoding/ Decoding

[CyberChef](https://gchq.github.io/CyberChef/)

<u>Base64</u>

Represent Binary Data in ASCII format by converting into Radix-64 Format

````bash
base64 <filename>
base64 -d <filename>
````

<u>Hex Dump</u>

Computer data (RAM Content, Compressed File, etc.) that is represented in Hex representation

````bash
xxd <filename>
xxd -r data.txt > data
````

The output file has no extension as the converted data is not necessarily a text file

### Python One Liners

<u> HTTP Server</u>

````bash
python3 -m http.server <port-no>
````

<u>FTP Server</u>

````bash
pip install pyftpdlib
python -m pyftpdlib -p 21 -w
````

### Reset Root/User Password at Boot

- It attack works only on systems where bootloader is not locked
- On boot select "Advanced Boot Options" -> Select a kernel and press "E" key.
- Find the "Linux" line and replace it as follows:

````bash
# Original Line
linux /boot/<kernel> root=UUID=<uuid-string> ro initrd=/install/initrd.qz quiet splash
# Modified Line
linux /boot/<kernel> root=UUID=<uuid-string> rw init=/bin/bash
````

- Once done press "F10". The system will boot and load a shell
- Use passwd command to set a new password. Reboot

---