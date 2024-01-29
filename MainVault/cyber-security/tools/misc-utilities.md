---
tags:
  - security
  - tool
title: Misc. Utilities
updated: 2024-01-28
date: 2024-01-28 14:15:56 -0600
---

### SearchSploit

Search's Exploit DB for any known exploits for an given service

#### Update DB

````bash
searchsploit -u
````

#### Searching for Exploit

````bash
searchsploit <service-name>
searchsploit <service-name> <version>
searchsploit -t <search-term> # Search Module Title only
````

#### Copy Exploit to CWD

````bash
searchsploit -m <exploit-id>
````

### Hex Dump

Computer data (RAM Content, Compressed File, etc.) that is represented in Hex representation

````bash
xxd <filename>
xxd -r data.txt > data
````

The output file has no extension as the converted data is not necessarily a text file

### Python One Liners

#### HTTP Server

````bash
python3 -m http.server <port-no>
````

#### FTP Server

````bash
pip install pyftpdlib
python -m pyftpdlib -p 21 -w
````

### Reset Root/User Password at Boot

* It attack works only on systems where bootloader is not locked
* On boot select "Advanced Boot Options" -> Select a kernel and press "E" key.
* Find the "Linux" line and replace it as follows:

````bash
# Original Line
linux /boot/<kernel> root=UUID=<uuid-string> ro initrd=/install/initrd.qz quiet splash
# Modified Line
linux /boot/<kernel> root=UUID=<uuid-string> rw init=/bin/bash
````

* Once done press "F10". The system will boot and load a shell
* Use passwd command to set a new password. Reboot
