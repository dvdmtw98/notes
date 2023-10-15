---
title: Injecting JavaScript Code
---

Create a .js with the code to be executed  
In the payloads line of the hstshijack.cap file add the new .js file : `<site-to-attack>:<path-to-script>`

 > [!NOTE]
 > Ensure to use the modified hstshijack module when using this attack.
 > In payloads we can add as many scripts as required. * is a wildcard that represents all websites

#### Inject JS

````bash
bettercap -iface <interface> -caplet <spoof-data-cap-file>
hstshijack/hstshijack # Run HSTS Caplet
````