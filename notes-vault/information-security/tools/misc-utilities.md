---
title: Misc. Utilities
tags:
  - security
  - tool
date: 2024-01-28 14:15:56 -0600
updated: 2025-06-06 09:38:21 -0500
---

### SearchSploit

Search's Exploit DB for known exploits

```bash
# Update Database
searchsploit -u

# Search Database
searchsploit <service-name>
searchsploit <service-name> <version>
searchsploit -t <search-term>

# Copy Exploit to Clipboard
searchsploit -m <exploit-id>
```

### Python One Liners

#### HTTP Server

````bash
python3 -m http.server <port>
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
