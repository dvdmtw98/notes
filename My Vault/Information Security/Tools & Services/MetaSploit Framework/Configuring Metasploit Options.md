---
title: Configuring Metasploit Options
---

1. <u>View Exploit Details</u>

````bash
show info
show options
show advanced # Show extra advanced parameters that can be set
````

2. <u>Changing Exploit Options</u>

````bash
set <option-name> <value>
````

The "setg" command can be used if some options need to be set globally for the session (LHOSTS, LPORT, etc.)  
The "get" and "getg" option can be used to view an single option value (get RHOSTS)  
An option can be reset using the "unset" and "unsetg" command