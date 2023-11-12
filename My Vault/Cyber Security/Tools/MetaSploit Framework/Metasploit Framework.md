---
tags: [security, tool, metasploit, index]
---

### Table of Content

- [Selecting Exploit](Selecting%20Exploit.md)
- [Exploit Configuration](Exploit%20Configuration.md)
- [Running Exploit](Running%20Exploit.md)
- [Meterpreter](Meterpreter.md)

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

### Types of Modules

- **Exploits**: Code that takes advantage of Vulnerability
- **Payloads**: Code that runs remotely (Reverse Shell, Meterpreter)
- **Auxiliary**: Modules used for port scanning, fuzzing, sniffing etc. (Enumeration)
- **NOPS**: Helps to keep the payload size same across exploits (used for Buffer Overflow)
- **POST**: Post Exploitation Actions (Clearing Tracks, Keyloggers)
- **Encoders**: Ensure the payload is delivered intact (Evade Security)
   Evasion

Location of Modules : `/usr/share/metasploit-framework/modules/`

#### Load Resource Scripts

````bash
# Extension: .rc
msfconsole -r <filename>
````
