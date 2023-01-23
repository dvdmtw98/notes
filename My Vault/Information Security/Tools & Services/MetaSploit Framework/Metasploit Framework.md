---
title: Metasploit Framework
---

### Setup Metasploit Database

````bash
systemctl postgresql start
msfdb init

msfconsole 			# Start Metasploit
msfconsole -q 		# Start without banner
````

The PostgreSQL DB is used to make module searches faster and for storing the results from scans

Metasploit can be used without starting the DB as well  
Use "db_status" to check the status of the DB

---

### Types of Modules

1. **Exploits**: Code that takes advantage of Vulnerability (uses Payloads)
2. **Payloads**: Code that runs remotely (Reverse Shell, Meterpreter)
3. **Auxiliary**: Modules used for port scanning, fuzzing, sniffing etc. (Information Gathering)
4. **NOPS**: Helps to keep the payload size same across exploits (used for Buffer Overflow)
5. **POST**: Post Exploitation Actions (Clearing Tracks, Keyloggers)
6. **Encoders**: Ensure the payload is delivered intact (Evade Security)
   Evasion

Location of Modules : `/usr/share/metasploit-framework/modules/`

### Payload Types

| Stagged Payload                                                                                                 | Unstagged Payload                                       |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| When using Stagged Payload a small part of the payload is downloaded and then rest of the payload is downloaded | Unstagged Payload the entire code is executed in one go |
| They cannot be listened to using Netcat we have to use Metasploit multi/handler                                 | Netcat listener can be used to listen to them           |

---

### Load Resource Scripts

````bash
# Extension: .rc
msfconsole -r <filename>
````

---

### Table of Content

1. [Selecting Exploit](Selecting%20Exploit.md)
2. [Configuring Metasploit Options](Configuring%20Metasploit%20Options.md)
3. [Using Payloads](Using%20Payloads.md)
4. [Running Exploit](Running%20Exploit.md)
5. [Metasploit Auxiliary Features](Metasploit%20Auxiliary%20Features.md)
6. [Meterpreter](Meterpreter.md)
7. [Msfvenom](Msfvenom.md)