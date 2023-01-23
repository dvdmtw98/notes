---
title: Payload Generation
---

### Evasion

````bash
list 			# View all the payloads
use <number> 	# Select a Payload
````

#### Payload Naming Scheme

`<payload-language>/<type-of-payload>/<method-used>`  
e.g. go/meterpreter/rev_https.py (Reverse HTTPS Payload)

Some payloads do not follow this naming schema these are payloads that are used to hide other payloads in them to try and bypass some security. Most of the times these payloads do not actually provide any extra protection

````bash
options # View the Options
set <option-name> <value>
````

* Veil by default will encrypt, obfuscate the payload code but sometimes this is not enough to bypass AVs. Anti-Virus Software's make use of a large DB of signatures to try and detect viruses
* We can set some optional parameters in the payload to make the signature of our payload more unique. Pay around with the values of the optional parameters till it's not detected by any antivirus

````bash
generate # Create the Payload
````

[AntiScan.Me | Online Virus Scanner Without Result Distribution](https://antiscan.me/)  
Check if Virus is detected