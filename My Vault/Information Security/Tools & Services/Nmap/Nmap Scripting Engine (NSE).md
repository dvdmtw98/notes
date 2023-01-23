---
title: Nmap Scripting Engine (NSE)
---

The Nmap scripts are written in Lua language  
Location : `/usr/share/nmap/scripts`

Update Scripts : `sudo nmap --script-updatedb`  
Help Menu : `nmap --script-help <script-name>`

[NSEDoc Reference Portal — Nmap Scripting Engine documentation](https://nmap.org/nsedoc/)

#### Run Nmap Default/ Inbuild Scripts

````bash
nmap -p 21 --script ftp-anon <ip-address>
nmap -sV -p 21 --script ftp-anon,ftp-vsfppd-backdoor <ip-address>
nmap -sV -p 21 --script "ftp-*" <ip-address> 	# Run all FTP scripts
nmap -sV -p 21 --script=ftp* <ip-address> 		# Run all FTP Scripts
````

#### Banner Grabbing

This scan is similar to service version scan but Nmap does not filter the information that it does not consider important

````bash
nmap -p22,80 --script banner <ip-address>
````

#### FTP Enumeration

FTP runs on port 21  
ls -lah /usr/share/nmap/scripts | grep -e "ftp-" (List only ftp scripts)

**<u>Common Scripts</u>**

* ftp-anon : Check if anonymous login is available for FTP connection
* ftp-brute : Brute force connection using FTP (Not recommended use tool like Hydra)
* ftp-syst : Shows system information
* ftp-proftpd-backdoor, ftp-vsftpd-backdoor : Check if an backdoor connection to the system is possible (Intrusive scripts directly interacts with the system)
* ftp-vuln-cve2010-4221 : Checks for vulnerability (Always search what the vulnerability is applicable for before using. This one only applies to proftpd)

#### DNS Enumeration

Recommended to use SecLists when wordlist is needed.  
"Zonetransfer.me" can be used to test and practice DNS attacks

**<u>Common Scripts</u>**

* dns-zone-transfer : Tries to perform zone transfer (copy dns details from one server to another. Only works on misconfigured servers)
* dns-brute : Brute force the dns to gather information (Recommended over zone transfer)

````bash
nmap --script dns-zone-transfer \
--script-args dns-zone-transfer.server=SERVERNAME,dns-zone-transfer.port=53,dns-zone-transfer.domain=zonetransfer.me # Refer Information Gathering for more details on zone transfer

nmap -Pn --script dns-brute \ 
--script-args dns-brute.threads=5,dns-brute.hostlist=/usr/share/wordlist/SecLists/Discovery/DNS/fierce-hoslist.txt zonetransfer.me
````

#### SMTP Enumeration

SMTP runs on port 25  
ls -lah /usr/share/nmap/scripts | grep -e "smtp-" (List only smtp scripts)

**<u>Common Scripts</u>**

* smtp-commands : Lists all the supported SMTP commands (VRFY, EXPN can be exploited to enumerate usernames)
* smtp-enum-users : Enumerate users on the system
* smtp-open-relay : Check if open relay is enabled which can be used to bypass authentication

````bash
nmap -p 25 --script smtp-commands <ip-address>
nmap -p 25 --script smtp-enum-users --script-args smtp-enum-users.methods={VRFY} <ip-address>
nmap -p 25 --script smtp-open-relay <ip-address>
````

#### HTTP Enumeration

HTTP runs on port 80. HTTPS runs on port 443  
ls -lah /usr/share/nmap/scripts | grep -e "http-" (List only http scripts)

**<u>Common Scripts</u>**

* http-methods : Returns the methods that are running of the server
* http-enum : Enumerate hidden directories on the server (Similar to dirbuster/gobuster)
* http-waf-detect : Detect web application firewall
* http-waf-fingerprint : Identify the version/ type of firewall running

````bash
nmap -Pn -sV -T4 -p 80 --script http-methods --script-args http-methods.test=all <ip-address>
nmap -sV -p 80 --script http-enum <ip-address>
nmap -Pn -p 443,80 --script http-enum-detect,hhtp-waf-fingerprint <ip-address>
````

http-waf-detect will return an payload when run on browser will return the firewall name

#### SMB (Service Message Block) Enumeration

SMB runs on port 445  
ls -lah /usr/share/nmap/scripts | grep -e "smb-" (List only SMB scripts)

**<u>Common Scripts</u>**

* smb-os-discovery : Find the OS running on the system
* smb-enum-shares : List all the shares (Shared folders/ drives, etc.) on the system along with their permissions
* smb-enum-users : Find users on the system
* smb-protocols : Returns the version of the SMB protocol running on the system
* smb-vuln-ms17-010 : Eternal blue remote execution exploit

````bash
nmap -p 445 --script smb-os-discovery <ip-address>
nmap -p 445 --script smb-enum-shares <ip-address>
````

#### MySQL Enumeration

MySQL runs on port 3306

**<u>Common Scripts</u>**

* mysql-info : Returns information about the server
* mysql-enum : Try to guess usernames from the service
* mysql-empty-password : Checks if any user ha empty password
* mysql-brute : Try to brute force users on the system

````bash
nmap -p 3306 --script mysql-info <ip-address>
````

#### NFS (Network File Share) Enumeration

Port 111 with have RPCBind Server which converts the RPC Address to Universal Address
ls -lah /usr/share/nmap/scripts | grep -e "nfs-"

**<u>Common Scripts</u>**

* nfs-ls : Returns files on NTS
* nfs-showmount : Show the Mounted Directories on NTS
* nfs-statsfs : Return information about the NFS File System

````bash
nmap -p 111 --script nfs-ls,nfs-showmount,nfs-statfs <ip-address>
````

#### Vulnerability Scan using Vulners

[GitHub - vulnersCom/nmap-vulners: NSE script based on Vulners.com API](https://github.com/vulnersCom/nmap-vulners)

````bash
nmap -sV -p21-8080 --script vuln <ip-address>
````